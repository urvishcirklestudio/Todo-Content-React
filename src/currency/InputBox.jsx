import React, { useId } from "react";

function InputBox(props) {
  const {label,amount , getInptVal,amountDisable,convertCurrency,options,selectval,from ,to} =props
  const amountInputId = useId()
// console.log(amountDisable,from,to);
  return (
    <div className="input_box d-flex justify-content-between gap-4">
      <div className="input_wpr text-white w-75">
        <label htmlFor={amountInputId} className="d-block form-label">
          {label}
        </label>
        <input
          type="number"
          placeholder={label}
          id={amountInputId}
          value={amountDisable? convertCurrency:amount} 
          className="form-control"
          onChange={(e) => getInptVal && getInptVal(e.target.value)}
          disabled={amountDisable}
        />
      </div>
      <div className="select_Wpr d-flex flex-column w-25">
      <label htmlFor={amountInputId} className="d-block form-label text-white opacity-0">
          {label}
        </label>
        <select name="crto" id="cur" className="flex-grow-1 rounded-3 px-2" onChange={(e)=>selectval(e.target.value,amountDisable?'to':'from')}>
          {
            options.map((items,i)=>{ 
              return(
                <option value={items} key={i} selected={amountDisable?to===items:from===items}>{items}</option>
              )
            })
          }
        </select>
      </div>
    </div>
  );
}

export default InputBox;
