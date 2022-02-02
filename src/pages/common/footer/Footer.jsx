import React from "react";

import "./style_footer.css";

import { 
    MdLocationOn,
    MdPhone,
    MdMail
  } from "react-icons/md";
  
const Footer = () => {
    
  return (
    <>
    <section className="footer">
        <div className="user_img">
            {/* <img className="skywalker_logo" src="/img/logo-white.svg" alt="skywalker_logo"/> */}
        </div>
        <div class="grid-container-three">
            <div class="item item1">
                <span className="footer_item_title">STS CONSULTING <small>S.A.R.L.</small></span>
                <div className="footer_description">
                Voluptate eu ipsum sint dolore reprehenderit velit elit ipsum elit velit culpa exercitation proident laborum. Pariatur labore anim Lorem ea adipisicing occaecat ullamco magna labore consectetur amet incididunt.
                </div>
            </div>
            <div class="item item1">
                <span className="footer_item_title">Liens</span>
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Entreprises</a></li>
                    <li><a href="#">Emplois</a></li>
                    <li><a href="#">Qui sommes nous</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="item item1">
                <span className="footer_item_title">Contact info</span>
                <div className="footer_contacts">
                    <div className="footer_contact_item">
                        <div className="footer_contact_icon"><MdPhone/></div>
                        <div className="footer_contact_text">Appelez nous : 00237 000 000 000</div>
                    </div>
                    <div className="footer_contact_item">
                        <div className="footer_contact_icon"><MdMail/></div>
                        <div className="footer_contact_text">info@stsconsultingcam.com</div>
                    </div>
                    <div className="footer_contact_item">
                        <div className="footer_contact_icon"><MdLocationOn/></div>
                        <div className="footer_contact_text">000 000, Capitole <br/> Yaoundé</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer_copyright">
            <p>©2022 STS Consulting S.A.R.L. Tous droits réservés. "Nous sommes plus fort ensemble". Designed by <a href="https://www.alpha-labo.cm">AlphaLabo</a>. </p>
        </div>
    </section> 
    </>
  )
};

export default Footer;