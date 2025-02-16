import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Home = () => {
  const images = [
    "https://ramdootrestoresfoundation.com/wp-content/uploads/2024/11/1-scaled.jpg",
    "https://ramdootrestoresfoundation.com/wp-content/uploads/2024/11/2-scaled.jpg",
    "https://ramdootrestoresfoundation.com/wp-content/uploads/2024/11/DSC03390-scaled.jpg",
    "https://ramdootrestoresfoundation.com/wp-content/uploads/2024/10/3-scaled.jpg",
    "https://ramdootrestoresfoundation.com/wp-content/uploads/2024/10/2-scaled.jpg"
  ];

  return (
    <div className="slider z-10 relative">
      <div style={{top: '50%', left: '50%'}} className="bg-[#0000009f] h-full flex gap-10 justify-center flex-col items-center slider-info absolute z-20 w-full text-center text-white font-black">
        <h1 className='text-7xl'>Make Your voice count</h1>
        <button style={{padding: '15px 25px'}} className='rounded-lg cursor-pointer duration-100 bg-amber-800 font-medium hover:bg-amber-900'>Donate</button>
      </div>
      <Slide arrows={false}>
        <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${images[0]})` }}>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${images[1]})` }}>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${images[2]})` }}>
          </div>
        </div>
      </Slide>

    </div>
  );
};

export default Home;