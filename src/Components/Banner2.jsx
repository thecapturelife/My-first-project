import React from 'react'

const Banner2 = () => {
  return (
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
<img
  style={{
    width: '32.5%',
    maxWidth: '100%',
    height: 'auto',
    transition: 'transform 0.3s ease-in-out',
  }}
  src="https://supertails.com/cdn/shop/files/SC-1_495f1aa5-4416-400c-813f-f3ac91e40041.png?v=1705905236"
  alt=""
  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
/>


<img
  style={{
    width: '32.5%',
    maxWidth: '100%',
    height: 'auto',
    transition: 'transform 0.3s ease-in-out',
  }}
  src="https://supertails.com/cdn/shop/files/SC_d5bd7379-24e5-4206-a145-59b02b799e6d.png?v=1705905239"
  alt=""
  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
/>


<img
  style={{
    width: '32.5%',
    maxWidth: '100%',
    height: 'auto',
    transition: 'transform 0.3s ease-in-out',
  }}
  src="https://supertails.com/cdn/shop/files/SC_fafdf464-5c83-420b-8b78-7e16f6ca74f7.png?v=1706769409"
  alt=""
  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
/>

</div>


  )
}

export default Banner2
