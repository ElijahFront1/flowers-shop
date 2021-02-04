import React, { Component } from "react";
import Slider from "react-slick"
import imageTwo from '../../../images/slider-image-2.png'
import imageThree from '../../../images/slider-image-3.png'
import "../../../scss/components/slick/slick.css";
import "../../../scss/components/slick/slick-theme.css";
import SliderText from './SliderText'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      tabindex: false,
      fade: true,
      autoplaySpeed: 5000,
      autoplay: true,
      pauseOnHover: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={imageTwo} alt="" className="css-adaptive-image" />
            <SliderText />
          </div>
          <div>
            <img src={imageThree} alt="2" className="css-adaptive-image" />
            <SliderText />
          </div>
        </Slider>
      </div>
    );
  }
}
