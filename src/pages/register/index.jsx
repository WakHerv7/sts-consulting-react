import Navbar from "../common/navbar/Navbar";
import Section1 from "./section1/Section1";
// import Section2 from "./section2/Section2";
import Section5 from "./section5/Section5";
import Footer from "../common/footer/Footer";

import GoUpBtn from "../common/goUpBtn/GoUpBtn";
import SocialLinks from "../common/socialLinks/SocialLinks";

// import bgImg from '../../assets/img/Image1.png';
import bgImg from '../../assets/img/Image2.png';
import "./style_register.css";

const Home = () => {
  return (
    <div className="mainBody">
    <Navbar isHomePage={false}/>
    <div className={`homeBackgroundImg_Register`} style={{background: `url(${bgImg})`}}></div>
    <Section1/>
    <Footer/>
    <GoUpBtn/>
    <SocialLinks/>
    </div>
  );
}
 
export default Home;