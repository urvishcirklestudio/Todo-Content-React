import React, { useEffect, useId, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
 
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import InputBox from './InputBox.jsx';


function Currency() {
    const [abc, setABC] = useState()
    const [amount, setAmount] = useState(0)
    const [convertCurrency, setConvertCurrency] = useState(0)
    const [from, setFrom] = useState("inr")
    const [to, setTo] = useState("usd")
    const currencyInfo = useCurrencyInfo(from) 
    const options = Object.keys(currencyInfo)  
    
   
 


    const  getInptVal= (value)=> { 
        // console.log(value);
        setAmount(value===''?1:value)
        setConvertCurrency(value===''? currencyInfo[to] : value * currencyInfo[to]) 
    } 
    const  onAmountChange= (value)=> { 
        setAmount(value)
    }
    
    const  swap= (value)=> {
        setFrom(to)
        setTo(from)
        setConvertCurrency(amount)
        setAmount(convertCurrency)
     } 
      const  selectval= (value,curStatus)=> { 
          setFrom(curStatus==='from'?value:from)
          setTo(curStatus==='to'?value:to)
        setConvertCurrency(amount * currencyInfo[to]) 
         
     } 
  return (
    <>
    <div className="position-relative">
        <div className="main_bg"></div>
        <div className="form_box  position-absolute top-50 start-50 translate-middle">
            <form action="#" onSubmit={(e)=> e.preventDefault()}>
                <InputBox label="From" amount={amount} setAmount={setAmount} getInptVal={getInptVal} amountDisable={false} convertCurrency={convertCurrency} options={options} selectval={selectval} from={from} to={to}/>
                <div className="my-4 text-center">
                    <div className="transfer_arrow  rounded-circle mx-auto" onClick={swap}>
                    <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 8H8.001L8 20H6V8H2L7 3L12 8ZM22 16L17 21L12 16H16V4H18V16H22Z"></path></svg>
                    </div>
                </div>
                <InputBox label="To" amount={amount} setAmount={setAmount} getInptVal={getInptVal} amountDisable={true} convertCurrency={convertCurrency} options={options} selectval={selectval} from={from} to={to}/> 

                <div className="text-center">
                    <button type='submit' className='btn btn-primary btn-lg px-5'>Submit</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Currency
