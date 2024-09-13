"use client"

import React, { useState } from 'react';

function Credentials() {
  const [popupImage, setPopupImage] = useState(null);

  // Open modal with the clicked image
  const handleImageClick = (imageSrc) => {
    setPopupImage(imageSrc);
  };

  // Close modal when clicked outside or on pressing escape key
  const closePopup = () => {
    setPopupImage(null);
  };

  React.useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closePopup();
      }
    };
    if (popupImage) {
      document.addEventListener('keydown', handleEscKey);
    } else {
      document.removeEventListener('keydown', handleEscKey);
    }
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [popupImage]);

  return (
    <div className='flex mb-5 mt-5 gap-6 justify-center items '>
      {/* Executive Leadership Block */}
      <div className='flex flex-col items-center'>
      <p className="text-xs text-secondary">Click on image to expand</p>

        <img
          src="exec.jpg"
          alt="Executive logo"
          className='rounded-full w-24 h-24 object-cover cursor-pointer lg:hover:opacity-75'
          onClick={() => handleImageClick('exec.jpg')}
        />
        <p className='mt-2 text-center text-sm'>
        Fully insured and ICO registered
        </p>
      </div>

      {/* Professional Certification Block */}
      <div className='flex flex-col items-center'>
      <p className="text-xs text-secondary">Click on image to expand</p>

        <img
          src="Cert.jpeg"
          alt="Certification logo"
          className='w-50 h-24 object-cover cursor-pointer lg:hover:opacity-75'
          onClick={() => handleImageClick('Cert.jpeg')}
        />
        <p className='mt-2 text-center text-sm'>
          Professional Certification
        </p>
      </div>

      {/* Modal for image pop-up */}
      {popupImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closePopup}
        >
          <div className="relative flex justify-center items-center">
            <img
              src={popupImage}
              alt="Popup"
              className={`object-contain 
                ${popupImage === 'Cert.jpeg' ? 'lg:w-[70%] lg:h-[70%] w-[80%] h-[80%]' : 'lg:w-[80%] lg:h-[80%] w-[95%] h-[95%]'}`}
            />
            <button
              className="absolute top-2 right-2 text-white text-xl font-bold cursor-pointer"
              onClick={closePopup}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Credentials;
