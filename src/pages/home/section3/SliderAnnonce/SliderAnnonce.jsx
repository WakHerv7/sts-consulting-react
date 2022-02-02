import React, { useEffect } from "react";

// import bg_picture_1 from "../../../../imgs/adaaForSchool/icon5.png";
import bg_picture_1 from '../../../../assets/img/Image16.jpg';
// import bg_picture_2 from "../../../../imgs/adaaForSchool/icon5.png";

import "./style_sliderAnnonce.css";

import {
  AiOutlineFolder,
  AiOutlineArrowDown,
  AiOutlineClockCircle
} from "react-icons/ai";

import { 
  MdLocationOn,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight 
} from "react-icons/md";

const items = [
    { 
      one_title: "Entreprise Lambda", 
      one_content: "Recherche d'un expert comptable", 
      one_img: bg_picture_1,
      contrat: "CDI",
      lieu: "Douala",
      disponibilite: "Immediat"
    },
    { 
      one_title: "Entreprise Alpha", 
      one_content: "Propose un poste de secretaire ", 
      one_img: bg_picture_1,
      contrat: "CDI",
      lieu: "Douala",
      disponibilite: "Immediat"
    }, 
    { 
      one_title: "Entreprise Beta", 
      one_content: "Recherche d'un programmeur UI/UX", 
      one_img: bg_picture_1,
      contrat: "CDI",
      lieu: "Douala",
      disponibilite: "Immediat"
    },
    { 
      one_title: "Entreprise Lambda", 
      one_content: "Recherche d'un expert comptable", 
      one_img: bg_picture_1,
      contrat: "CDI",
      lieu: "Douala",
      disponibilite: "Immediat"
    },
    { 
      one_title: "Entreprise Alpha", 
      one_content: "Propose un poste de secretaire ", 
      one_img: bg_picture_1,
      contrat: "CDI",
      lieu: "Douala",
      disponibilite: "Immediat"
    }, 
    { 
      one_title: "Entreprise Beta", 
      one_content: "Recherche d'un programmeur UI/UX", 
      one_img: bg_picture_1,
      contrat: "CDI",
      lieu: "Douala",
      disponibilite: "Immediat"
    },
  ];

const ItemComponent = ({ one_title, one_content, one_img, contrat, lieu, disponibilite, fitSlider }) => {
    // return <div className="ItemComponent">{title}</div>;
    return (
        <div className={`ItemComponent card-container-slide_formateur ${fitSlider ? "fit-content-slider":""} `}>
            <div className="card-slide_formateur">
                {/* <div className="img"></div> */}
                <div className="box-top-slide_formateur"> 
                  <div className="perso_formateur" style={{background: "url("+ one_img + ") center center no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}></div>
                    {/* <img className="bg_picture_card_invest " src={one_img} alt="background_picture"/> */}
                    {/* <img className="one_img" src={`../../../../imgs/adaaForInvest/notre_formateur/Image1.jpg`} alt=""/> */}
                </div>
                <div className="box-bottom-slide_formateur">
                    <div className="box-bottom-title-slide_formateur">{one_title}</div>
                    <div className="box-bottom-content-slide_formateur">{one_content}</div>
                    <div className="box-bottom-infos-slide_formateur">
                      <div className="box_bottom_infos_slide_item"><AiOutlineFolder size="16" /><span>{contrat}</span></div>
                      <div className="box_bottom_infos_slide_item"><MdLocationOn/><span>{lieu}</span></div>
                      <div className="box_bottom_infos_slide_item"><AiOutlineClockCircle/><span>{disponibilite}</span></div>
                    </div>
                </div>
                
            </div>
        </div>
    )
  };

const Slider = () => {
    const [clickCount, setClickCount] = React.useState(0);
    // FitSlider
    const [hideRightArrow, setHideRightArrow] = React.useState(false);
    const [fitSlider, setFitSlider] = React.useState(false);

    const mainWrap = React.useRef();
    const containerRef = React.useRef();

    useEffect(() => {
      const width = mainWrap.current?.clientWidth;
      let stepCardnumber = 3;
      const tablette = (width <= 720 && width > 640)
        const tablette_mini = (width <= 640 && width > 340)
        const mobile = width <= 340 
        if (tablette) {
            stepCardnumber = 3;
        }
        else if (tablette_mini) {
          stepCardnumber = 2;
        }
        else if (mobile) {
            stepCardnumber = 1;
        }

        console.log("",stepCardnumber)
        console.log(items.length)
      if (items.length <= stepCardnumber) {
        setHideRightArrow(true);
        setFitSlider(true);
      } else {
        setHideRightArrow(false);
        setFitSlider(false);
      }
    }, [])

    const scrollSllides = (direction) => {
        const width = mainWrap.current?.clientWidth;
        console.log("mainWrap", mainWrap.current?.offsetWidth)
        // console.log("containerRef", containerRef.current?.offsetWidth)
        let scrollTo;
        let stepCardnumber = 3;
        const tablette = (width <= 720 && width > 640)
        const tablette_mini = (width <= 640 && width > 340)
        const mobile = width <= 340 
        if (tablette) {
            stepCardnumber = 3;
        }
        else if (tablette_mini) {
          stepCardnumber = 2;
        }
        else if (mobile) {
            stepCardnumber = 1;
        }
        const diff = direction === "next" ? 1 : -1;
        const newValue = (clickCount + diff) % (items.length / stepCardnumber);
        
        setClickCount(newValue);
        scrollTo = width * newValue;

        // handleRightArrow
        if (((newValue+1)*stepCardnumber) >= items.length) {
          setHideRightArrow(true);
        } else {
          setHideRightArrow(false);
        }

        console.log("newValue", newValue)
        console.log("items.length", items.length)
        console.log("stepCardnumber", stepCardnumber)
        console.log("scrollTo", scrollTo)
        console.log("RESULT", ((newValue+1)*stepCardnumber))
        console.log("*******************************")

        containerRef.current?.scrollTo({
            behavior: "smooth",
            left: scrollTo
        });
    }
  return (
    <>
        <div ref={mainWrap}>
      {/* <button onClick={() => scrollSllides("prev")}>Prev</button>
      <button onClick={() => scrollSllides("next")}>Next</button> */}
      
      <div className="Slider_formateur carousel-container-Formateur" >
        
        <div className="carousel-inner" ref={containerRef}>
            <div className="track">
                {items?.map((item, index) => (
                <ItemComponent 
                key={index}  
                one_title={item.one_title} 
                one_content={item.one_content} 
                one_img={item.one_img} 
                contrat={item.contrat}
                lieu={item.lieu}
                disponibilite={item.disponibilite}
                fitSlider={fitSlider}
                />
                ))}
            </div>
        </div>
        <div className="nav-Formateur">
            <button className={`prev ${clickCount>0 ? "show":""}`} onClick={() => scrollSllides("prev")}>
                {/* <i class="material-icons">keyboard_arrow_left</i> */}
                <MdKeyboardArrowLeft size="35"/>
            </button>
            <button className={`next ${hideRightArrow ? "hide":""} `} onClick={() => scrollSllides("next")}>
                {/* <i class="material-icons">keyboard_arrow_right</i> */}
                <MdKeyboardArrowRight size="35"/>
            </button>         
        </div>
      </div>
    </div>
    </>
  );
}

export default Slider;