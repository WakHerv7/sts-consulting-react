import {React} from "react";

import "./style_emailInput.css";

function EmailInput({title, nameText, placeholderText, requiredValue, grayColor}) {
  return (
    <div>
    
    <label className="commonEmailInputLabel" htmlFor={nameText}>{title}{requiredValue ? '*' : ''}</label>
    <input className={`commonEmailInput ${grayColor ? "grayColor": ""}`} type="email" id={nameText} name={nameText} required={requiredValue} placeholder={placeholderText}/>
    
    </div>   
  );
}

export default EmailInput;