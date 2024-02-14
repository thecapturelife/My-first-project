import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bannerimg from './Bannerimg'

function Banner () {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dearpet.in/cdn/shop/files/Desktop_website_banner_END_OF_SALE.png?v=1705562724"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dearpet.in/cdn/shop/files/Desktop_website_banner_END_OF_SALE.png?v=1705562724" 
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dearpet.in/cdn/shop/files/Desktop_website_banner_END_OF_SALE.png?v=1705562724"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
