import {React} from "react";

import "./style_textInput.css";

function TextInput({title, nameText, placeholderText, requiredValue, grayColor}) {
  return (
    <div>
    
    <label className="commonTextInputLabel" htmlFor={nameText}>{title}{requiredValue ? '*' : ''}</label>
    <input className={`commonTextInput ${grayColor ? "grayColor": ""}`} type="text" id={nameText} name={nameText} required={requiredValue} placeholder={placeholderText}/>
    
    </div>   
  );
}

export default TextInput;