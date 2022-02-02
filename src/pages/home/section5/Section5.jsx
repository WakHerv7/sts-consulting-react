import "./style_Section5.css";
import hat from '../../../assets/img/hat.svg';
import hands from '../../../assets/img/hands.svg';
import building from '../../../assets/img/building.svg';

const Section5 = () => {
  return (
    <>
        <div className="section5_container">
          <div className="section5_item">
            <div className="section5_item_box_top">
              <img src={hat} alt="" width="80px"/>
            </div>
            <div className="section5_item_box_bottom">
              <div className="section5_item_title">0000</div>
              <div className="section5_item_content">Membres</div>
            </div>
          </div>

          <div className="section5_item">
            <div className="section5_item_box_top">
              <img src={hands} alt="" width="80px"/>
            </div>
            <div className="section5_item_box_bottom">
              <div className="section5_item_title">0000</div>
              <div className="section5_item_content">Partenaires</div>
            </div>
          </div>

          <div className="section5_item">
            <div className="section5_item_box_top">
              <img src={building} alt="" width="80px"/>
            </div>
            <div className="section5_item_box_bottom">
              <div className="section5_item_title">0000</div>
              <div className="section5_item_content">Entreprises</div>
            </div>
          </div>
                  
        </div>
    </>
  );
}
 
export default Section5;