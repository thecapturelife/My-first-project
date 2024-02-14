import React from 'react'

const Banner3 = () => {
  return (
    <div>
     <img
  style={{
    width: '100%',
    transition: 'transform 0.3s ease-in-out',
  }}
  src="https://supertails.com/cdn/shop/files/Des-3_4d08492f-536b-4676-9d48-5220972e5b98_1600x.png?v=1703667838"
  alt=""
  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
/>

    </div>
  )
}

export default Banner3
