import React from 'react'

const Bannerimg  = ({ src, altText }) => {
    return (
      <div>
        <img
          id='imageslide1'
          className="img-fluid"
          style={{ maxWidth: '95%', height: '79%' }}
          src={src}
          alt={altText}
        />
      </div>
    );
  };
export default Bannerimg;