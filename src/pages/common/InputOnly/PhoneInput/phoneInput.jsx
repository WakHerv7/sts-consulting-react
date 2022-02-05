import {React} from "react";

import "./style_phoneInput.css";

function PhoneInput({title, nameText, placeholderText, requiredValue, grayColor}) {
  return (
    <div>
    
    {/* <label className="commonPhoneInputLabel" htmlFor={nameText}>{title} <span>{requiredValue ? '*' : ''}</span> </label> */}
    <input className={`commonPhoneInput ${grayColor ? "grayColor": ""}`} type="tel" id={nameText} name={nameText} required={requiredValue} placeholder={placeholderText}/>
    
    </div>   
  );
}

export default PhoneInput;