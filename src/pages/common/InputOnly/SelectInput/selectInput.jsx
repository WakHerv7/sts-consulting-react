import {React} from "react";

import "./style_selectInput.css";

function SelectInput({title, nameText, placeholderText, requiredValue, optionList, grayColor}) {
  return (
    <div>    
    {/* <label className="commonSelectInputLabel" htmlFor={nameText}>{title} <span>{requiredValue ? '*' : ''}</span> </label> */}
    
    <select className={`commonSelectInput ${grayColor ? "grayColor": ""}`} name={nameText} id={nameText} required={requiredValue}>
        <option disabled selected value="">{`Sélectionnez ${placeholderText}...`}</option>        
        {
            optionList.map((val, ind) => {
                return <option value={val.value}>{val.text}</option>
            })
        
        }
    </select>    
    </div>   
  );
}

export default SelectInput;