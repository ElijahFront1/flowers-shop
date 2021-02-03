import React, { Component } from "react";
import Slider from "react-slick"
import imageTwo from '../../../images/slider-image-2.png'
import imageThree from '../../../images/slider-image-3.png'
import "../../../scss/components/slick/slick.css";
import "../../../scss/components/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: true,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      tabindex: false,
      fade: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={imageTwo} alt="" className="css-adaptive" />
          </div>
          <div>
            <img src={imageThree} alt="2" className="css-adaptive" />
          </div>
        </Slider>
      </div>
    );
  }
}
