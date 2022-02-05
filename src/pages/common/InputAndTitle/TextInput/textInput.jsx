import {React} from "react";

import "./style_textInput.css";

function TextInput({title, nameText, placeholderText, requiredValue}) {
  return (
    <div>
    
    <label className="commonTextInputLabel" htmlFor={nameText}>{title} <span>{requiredValue ? '*' : ''}</span> </label>
    <input className="commonTextInput" type="text" id={nameText} name={nameText} required={requiredValue} placeholder={placeholderText}/>
    
    </div>   
  );
}

export default TextInput;