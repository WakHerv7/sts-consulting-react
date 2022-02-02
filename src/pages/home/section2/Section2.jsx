import "./style_Section2.css";
import bgImg from '../../../assets/img/Image16.jpg';

const Section2 = () => {
  return (
    <>
    <div className="section2">
        <div className={`section2BackgroundImg`} style={{background: `rgba(0,0,0,0.8) url(${bgImg}) no-repeat`}}></div>    
        <div className="section2_container">
            <div className="section2_item">
                <div className="section2_item_title">
                    <div className="item_triangle"></div>
                    <span><strong>ACCES</strong> EMPLOI</span>
                </div>
                <div className="section2_item_subtitle">
                    <span>DIPLOME VOUS ETES A</span><br/>
                    <strong>LA RECHERCHE D'UN EMPLOI</strong>
                </div>
                <div className="section2_item_content">
                    <div className="section2_item_content_subitem">
                        <div className="content_subitem_title"><strong>DEPOT DE CV</strong></div>
                        <div className="content_subitem_content">En moins de 5 minutes</div>
                    </div>
                    <div className="section2_item_content_subitem">
                        <div className="content_subitem_title"><strong>GESTION DE CANDIDATURE</strong></div>
                        <div className="content_subitem_content">Memorisez vos offres</div>
                    </div>
                    <div className="section2_item_content_btn_container">
                        <a href="#" className="section2_item_content_btn">Se connecter</a>
                    </div>
                </div>
            </div>
            <div className="section2_item">
                <div className="section2_item_title">
                    <div className="item_triangle"></div>
                    <span><strong>ACCES</strong> RECRUTEUR</span>
                </div>
                <div className="section2_item_subtitle">
                    <span>ENTREPRISE A</span><br/>
                    <strong>LA RECHERCHE DE PERSONNELS ?</strong>
                </div>
                <div className="section2_item_content">
                    <div className="section2_item_content_subitem">
                        <div className="content_subitem_title"><strong>PUBLIEZ VOS OFFRES</strong></div>
                        <div className="content_subitem_content">En moins de 5 minutes</div>
                    </div>
                    <div className="section2_item_content_subitem">
                        <div className="content_subitem_title"><strong>GESTION DE CANDIDATURE</strong></div>
                        <div className="content_subitem_content">Memorisez vos offres</div>
                    </div>
                    <div className="section2_item_content_btn_container">
                        <a href="#" className="section2_item_content_btn">Se connecter</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
 
export default Section2;