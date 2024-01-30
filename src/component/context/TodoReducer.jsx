const TodoReducer = (state,action) => {
    switch (action.type) {
        case 'Set_input_val': 
            return{...state,todo:{...state.todo,[action.payload.name]:action.payload.value}}
    case 'Add_New_Todo': 
            return{...state,TodosItems:[...state.TodosItems,state.todo]}
    case 'ClearTodo': 
        return{...state,todo:{...state.todo,FirstName:'',LastName:''}}
    
    case 'Edit_Todo': 
        return{...state,
            todo:{...action.payload.data},
            updateTodo:{...state.updateTodo,update:true,index:action.payload.id}
        } 
    case 'Update_Todo': 
        let updateTodoData = [...state.TodosItems]
            updateTodoData[state.updateTodo.index]= state.todo
        return{...state,
            todo:{...state.todo,FirstName:'',LastName:''},
            TodosItems:[...updateTodoData],
            updateTodo:{...state.updateTodo,update:false,index:''}
        }
        case 'Delete_Items':  
        let RemoveTodoDelItems = state.TodosItems.filter((ele,index)=>{
            return index !== action.payload;
        })

        return{...state,
            TodosItems:[...RemoveTodoDelItems],
            show:{...state.show,modalShow: false,id:'',Offcanvas:false},
            DelHistory:[...state.DelHistory,state.TodosItems[action.payload]]
        }
    case 'Show_Modal':  
        return{...state,
            show:{...state.show,modalShow: true,id:action.payload}, 
        }
    case 'Show_OffCanvas':  
        return{...state,
            show:{...state.show,Offcanvas:true}, 
        } 
    case 'Close_Modal':  
        return{...state,
            show:{...state.show,modalShow: false,id:'',Offcanvas:false}, 
        } 
    case 'Reuse_Del_Item':  
    const reuseDelItem = state.DelHistory.filter((ele, index) => {
        return index !== action.payload;
        })   
        return{...state,
            DelHistory:[...reuseDelItem],
            TodosItems:[...state.TodosItems,state.DelHistory[action.payload]],
            show:{...state.show,Offcanvas:reuseDelItem.length === 0 ? false:true},   
        }
    case 'Del_History_Item':
        const DeleteHistory = state.DelHistory.filter((ele, index) => {
            return index !== action.payload;
          });
        return{...state,
            DelHistory:[...DeleteHistory],
            show:{...state.show,Offcanvas:DeleteHistory.length === 0 ? false:true}
        }  
    
        default:
            return state;
    }
}
export default TodoReducer;