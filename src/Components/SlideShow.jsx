import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function SlideShow() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{ margin: '0 auto', maxWidth: '80%' }}>
      <Carousel.Item>
        <img
          src="https://supertails.com/cdn/shop/files/Des_f874d631-7f82-4450-a673-3180e876cb4e_1600x.png?v=1706771358"
          alt="Slide 1"
          style={{ width: '100%', height: 'auto' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://supertails.com/cdn/shop/files/Des-3_f268d901-03fc-4e96-91a3-9229a39552db_1600x.png?v=1706771358"
          alt="Slide 2"
          style={{ width: '100%', height: 'auto' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://supertails.com/cdn/shop/files/Des-1_e34f56cf-3a12-4e30-a26c-ef129f7bd452_1600x.png?v=1706771358"
          alt="Slide 3"
          style={{ width: '100%', height: 'auto' }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideShow;
