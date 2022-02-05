import {React} from "react";

import "./style_passwordInput.css";

function PasswordInput({title, nameText, placeholderText, requiredValue, grayColor}) {
  return (
    <div>
    
    <label className="commonPasswordInputLabel" htmlFor={nameText}>{title}{requiredValue ? '*' : ''}</label>
    <input className={`commonPasswordInput ${grayColor ? "grayColor": ""}`} type="text" id={nameText} name={nameText} required={requiredValue} placeholder={placeholderText}/>
    
    </div>   
  );
}

export default PasswordInput;