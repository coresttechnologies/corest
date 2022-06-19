import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './ImageSlider.css'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <i className='fa-solid fa-chevron-left left-arrow' onClick={prevSlide}></i>
      <i className='fa-solid fa-chevron-right right-arrow' onClick={nextSlide}></i>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <div className="testimonial">
                <img src={slide.image} alt='travel image' className='image' />
                <h1>{slide.name}</h1>
                <h4>{slide.desigination}</h4>
                <p>{slide.description}</p>
              </div>
              
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
