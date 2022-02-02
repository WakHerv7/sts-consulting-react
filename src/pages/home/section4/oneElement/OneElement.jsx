import React from "react";
import userIcon from '../../../../assets/img/user_grey.svg';
import "./style_OneElement.css";


const OneElement = ({one_img, one_title, one_content}) => {
  return (
    <>
    <div class="item item1">
        <div className="box-top">
            {/* <div className="video_color_layer"></div> */}
            <div className="video_icon_layer">
            <img src={userIcon} alt="" width="80px"/>
            {/* <i className="material-icons">play_circle_filled</i> */}
            </div>
        </div>
        <div className="box-bottom">
            <span className="box-bottom-title">{one_title}</span>
            <span className="box-bottom-subtitle">{one_content}</span>
        </div>
    </div>
    </>
  );
}

export default OneElement;