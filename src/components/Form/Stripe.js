import config from "../../config";
import {useState} from 'react';

function Stripe({form}){
  const [employees, claims] = form.map(({value})=>value);
  const {getPrice} = config;
  const [yearly, monthly] = getPrice(employees, claims);
  const [paymentOption, set_paymentOption] = useState(0)
  const paymentOptions = ['Year', 'Month'];

  function handleToggle(){
    const isYearly = !paymentOption;
    if (isYearly) set_paymentOption(1);
    else set_paymentOption(0);
  }
    return (
      <div className="payment">
        <h3>STRIPE</h3>
        <div className="options"><span>{paymentOptions[0]}</span><span>{paymentOptions[1]}</span></div>
        <label className="switch">
          <input type="checkbox" onChange={handleToggle} value={paymentOption}/>
          <span className="slider round"></span>
        </label>
        <div>
          <span>Employees: </span><span>{employees}</span>
        </div>
        <div>
          <span>Claims per yr: </span><span>{claims}</span>
        </div>
        <div>
          <span>Cost per {paymentOptions[paymentOption]}: </span><span>{[yearly, monthly][paymentOption]}</span>
        </div>
      </div>
    )
  }

  export default Stripe;