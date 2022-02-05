import {React} from "react";
import {Link} from "react-router-dom";


import "./style_primaryBtn.css";

function PrimaryBtn({text, link, submit}) {
  return (
    
    submit ?
        <input className="onePrimaryBtn" type="submit" value={text}/>
    :
        <Link className="onePrimaryBtn" to={link}>
            <span>{text}</span>
        </Link>
        
    
  );
}

export default PrimaryBtn;