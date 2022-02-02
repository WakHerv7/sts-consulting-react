import Navbar from "../common/navbar/Navbar";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import Section3 from "./section3/Section3";
import Section4 from "./section4/Section4";
import Section5 from "./section5/Section5";
import Footer from "../common/footer/Footer";
// GoUpBtn
import GoUpBtn from "../common/goUpBtn/GoUpBtn";
// SocialLinks
import SocialLinks from "../common/socialLinks/SocialLinks";

// import bgImg from '../../assets/img/Image1.png';
import bgImg from '../../assets/img/bg-img-0000.jpg';
import "./style_home.css";

const Home = () => {
  return (
    <div className="mainBody">
    <Navbar/>
    <div className={`homeBackgroundImg`} style={{background: `url(${bgImg}) no-repeat scroll 0% 0%`}}></div>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Footer/>
    <GoUpBtn/>
    <SocialLinks/>
    </div>
  );
}
 
export default Home;