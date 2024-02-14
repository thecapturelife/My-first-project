import React from 'react';

const CutPics = () => {
  const containerStyle = {
    display: 'flex',
    gap: '10px',
    overflowX: 'auto', // Add horizontal scrollbar if needed
  };

  const imageStyle = {
    width: '240px',
    height: '340px',
    maxWidth: '100%',
    transition: 'transform 0.2s',
  };

  const handleImageHover = (e) => {
    e.target.style.transform = 'scale(1.1)';
  };

  const handleImageLeave = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  return (
    <div style={containerStyle}>
      <img
        src="https://supertails.com/cdn/shop/files/Frame_106723107.png?v=1707117976"
        alt=""
        style={imageStyle}
        onMouseOver={handleImageHover}
        onMouseLeave={handleImageLeave}
      />
      <img
        src="https://supertails.com/cdn/shop/files/Frame_106723106.png?v=1707117976"
        alt=""
        style={imageStyle}
        onMouseOver={handleImageHover}
        onMouseLeave={handleImageLeave}
      />
      <img
        src="https://supertails.com/cdn/shop/files/Frame_106723108_996d267e-fc8e-4afe-8b32-12826e04bc37.png?v=1707119862"
        alt=""
        style={imageStyle}
        onMouseOver={handleImageHover}
        onMouseLeave={handleImageLeave}
      />
      <img
        src="https://supertails.com/cdn/shop/files/Frame_106723110_0721e34e-0101-4191-bfce-4ce4ddfa34c6.png?v=1707120816"
        alt=""
        style={imageStyle}
        onMouseOver={handleImageHover}
        onMouseLeave={handleImageLeave}
      />
      <img
        src="https://supertails.com/cdn/shop/files/Frame_106723111_2f11c983-e636-4a46-a2a6-c6b91d67a64c.png?v=1707120840"
        alt=""
        style={imageStyle}
        onMouseOver={handleImageHover}
        onMouseLeave={handleImageLeave}
      />
      <img
        src="https://supertails.com/cdn/shop/files/Frame_106723109_91f88b3c-67d5-4240-a73e-f1bfd5d018f3.png?v=1707120337"
        alt=""
        style={imageStyle}
        onMouseOver={handleImageHover}
        onMouseLeave={handleImageLeave}
      />
    </div>
  );
};

export default CutPics;
