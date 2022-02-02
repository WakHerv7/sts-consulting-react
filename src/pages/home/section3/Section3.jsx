import "./style_Section3.css";
import bgImg from '../../../assets/img/Image16.jpg';
import SliderAnnonce from "./SliderAnnonce/SliderAnnonce";

const Section3 = () => {
  return (
    <>
        <div className="section3_container">
            <div className="section3_title">A LA UNE</div>
            <SliderAnnonce/>
        </div>
    </>
  );
}
 
export default Section3;