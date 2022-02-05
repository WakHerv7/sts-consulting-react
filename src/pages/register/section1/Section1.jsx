import TextInput from "../../common/InputOnly/TextInput/textInput";
import PasswordInput from "../../common/InputOnly/PasswordInput/passwordInput";
import PhoneInput from "../../common/InputOnly/PhoneInput/phoneInput";
import EmailInput from "../../common/InputOnly/EmailInput/emailInput";
import TextArea from "../../common/InputOnly/TextArea/textArea";
import SelectInput from "../../common/InputOnly/SelectInput/selectInput";
import PrimaryBtn from "../../common/PrimaryBtn/primaryBtn";

import "./style_Section1.css";

const Section1 = () => {
  return (
    <>
    <div className="header_register">
      <div className="header_title_register">Formulaire d'inscription</div>
      <div className="register_form_container">
        <div className="intro_text_register">
          Connectez-vous aux professionnels, entreprise comme particuliers.
          <br/>Accédez aux services du réseau sans restriction : <strong>l'inscription est rapide et entièrement gratuite</strong>
        </div>
        <a href="#" className="register_with_gmail_btn">S'inscrire via Gmail</a>
        <form action="">
          <div class="grid-container-itemRight-section06_formateur ">
              {/* <b className="section_title" >Informations personnelles</b> */}
              <div className="grid-container-info_perso-section06_formateur">
                  <TextInput title={"Prénom"} nameText={"prenom"} placeholderText={"Prénom*"} requiredValue={"True"}/>
                  <TextInput title={"Nom"} nameText={"nom"} placeholderText={"Nom*"} requiredValue={"True"}/>
              </div>
              <EmailInput title={"Email"} nameText={"email"} placeholderText={"Email"} requiredValue={"True"}/>
              <PasswordInput title={"Mot de passe"} nameText={"password"} placeholderText={"Mot de passe"} requiredValue={"True"}/>
              <PasswordInput title={"Confirmez le mot de passe"} nameText={"password"} placeholderText={"Mot de passe"} requiredValue={"True"}/>
          
          </div>
          <div className="submit_btn_container_register">
              {/* <PrimaryBtn text={"Envoyer"} submit={"True"}/> */}
              <button type="submit" className="submitBtn_register">Inscription</button>
          </div>
      </form>
    </div>
  </div>
  </>
  );
}
 
export default Section1;