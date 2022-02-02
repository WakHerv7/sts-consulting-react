import { React }from "react";
import { BrowserRouter } from "react-router-dom";

import Temoignage from "./oneElement/OneElement";
import bg_picture_1 from '../../../assets/img/Image16.jpg';
import "./style_Section4.css";

const items = [
    { 
        title: "Prenom NOM", 
        content: "Ingénieur Industriel", 
        imgsrc: bg_picture_1,
    },
    { 
        title: "Prenom NOM", 
        content: "Nouveau Bachelier", 
        imgsrc: bg_picture_1,
    },
    { 
        title: "Prenom NOM", 
        content: "Ménagère", 
        imgsrc: bg_picture_1,
    },
    { 
        title: "Prenom NOM", 
        content: "Ingénieur BTP", 
        imgsrc: bg_picture_1,
    },
    { 
        title: "Prenom NOM", 
        content: "Menuisier", 
        imgsrc: bg_picture_1,
    },
    { 
        title: "Prenom NOM", 
        content: "Agent Immobilier", 
        imgsrc: bg_picture_1,
    },
    { 
        title: "Prenom NOM", 
        content: "Nouveau Bachelier", 
        imgsrc: bg_picture_1,
    },
    { 
        title: "Prenom NOM", 
        content: "Ménagère", 
        imgsrc: bg_picture_1,
    },
]

const Section4 = () => {

  return (
    <>
    <section className="s4">

        {/* <div className="s4_title_container"> */}
        <div className="s4_title">
            <span className="s4_title_text big">STS Consulting</span>
            <span className="s4_title_text_small">C'est déjà 000,000 membres inscrits...</span>
        </div>
        {/* </div> */}
        <div class="grid-container">
            {

                items.map((val, ind) => {
                    return <Temoignage 
                            key={ind}
                            one_img={val.imgsrc} 
                            one_title={val.title}
                            one_content={val.content}
                            />
                })
            }
            
        </div>
    </section>
    </>
  );
}

export default Section4;