import logo from '../../../logo.svg';
import userIcon from '../../../assets/img/user_white.svg';
import "./style_navbar.css";
import {
    AiOutlineUser
  } from "react-icons/ai";

const Navbar = () => {

    const range = (size, startAt = 0,  step = 0) => {
        let n =startAt;
        return [...Array(size).keys()].map(i => (
            n = n + step
        ));
    }

    return (
    <div className="navbar">
        <div className="navbar_container">
            <div className="navbar_left">
            <img src={logo} className="navbar_logo" alt="logo"/>
            </div>
            <div className="navbar_center">
            <ul>
                <li className="activeNav"><a href="#">ACCUEIL</a></li>
                <li><a href="#">ENTREPRISES</a></li>
                <li><a href="#">EMPLOI</a></li>
                <li><a href="#">QUI SOMMES NOUS</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
            </div>
            <div className="navbar_right">
            <a className="loginBtn" href="#">S'inscrire</a>
            <a className="userBtn" href="#"><span><img src={userIcon} width="30px" alt=""/></span></a>
            </div>
        </div>
        <div className="navbar_bottom_container">
            <form action="" method="get">
                <label for="slct1" className={`custom_select custom_select_1`} >
                    <select id="slct1">                
                        <option value="" disabled selected defaultValue>Entreprise</option>
                        {range(12,0,5).map((value, index) => (
                            <option key={index} value={value}>option {value}</option>
                        ))}                
                    </select>
                </label>
                <label for="slct2" className={`custom_select custom_select_2`} >
                    <select id="slct2">                
                        <option value="" disabled selected  defaultValue className="defaultValue" >Qui, quoi ?</option>
                        {range(12,0,5).map((value, index) => (
                            <option key={index} value={value}>option {value}</option>
                        ))}                
                    </select>
                </label>
                <label for="slct3" className={`custom_select custom_select_3`} >
                    <select id="slct3">                
                        <option value="" disabled selected defaultValue>Où ?</option>
                        {range(12,0,5).map((value, index) => (
                            <option key={index} value={value}>option {value}</option>
                        ))}                
                    </select>
                </label>
                <button type="submit" className="submitBtn">Rechercher</button>
            </form>
        </div>
        <div className="navbar_bottom_border"></div>
    </div>
  );
}
 
export default Navbar;