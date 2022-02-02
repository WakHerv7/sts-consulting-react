
import "./style_SocialLinks.css";
import {
    AiOutlineArrowUp
  } from "react-icons/ai";
  import { 
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn
  } from "react-icons/fa";

const SocialLinks = () => {

    return (
    <>
    <div className="SocialLinks">
        <a href="#" className="socialItem"><FaFacebookF/></a>
        <a href="#" className="socialItem"><FaInstagram/></a>
        <a href="#" className="socialItem"><FaTwitter/></a>
        <a href="#" className="socialItem"><FaLinkedinIn/></a>
    </div>
    </>
  );
}
 
export default SocialLinks;