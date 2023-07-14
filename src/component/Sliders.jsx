import React from 'react'
import "./style.css"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Sliders() {

  const renderSlide = (imageUrl, altText, legend) => {
    return (
      <div>
        <img className="custom-image" src={imageUrl} alt={altText} />
        <p className="legend">{legend}</p>
      </div>
    );
  };

  return (
    <>
    <Carousel autoPlay interval={3000} infinite showThumbs={false} renderItem={renderSlide}>
      {[
        {
          imageUrl: 'https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility1.webp',
          altText: 'Image 1',
          legend: 'Legend 1'
        },
        {
          imageUrl: 'https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility1.webp',
          altText: 'Image 2',
          legend: 'Legend 2'
        },
        {
          imageUrl: 'https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility1.webp',
          altText: 'Image 3',
          legend: 'Legend 3'
        }
      ].map((slide, index) => (
        <div key={index}>{renderSlide(slide.imageUrl, slide.altText, slide.legend)}</div>
      ))}
    </Carousel>
    </>
  
  )
}

export default Sliders