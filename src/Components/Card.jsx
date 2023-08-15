import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faBoxes } from '@fortawesome/free-solid-svg-icons';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Card({ image, name, minCost, maxSupply, index }) {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  });

  return (
    <div className="m-4 bg-white rounded-lg shadow-lg overflow-hidden group" data-aos="fade-right" data-aos-delay={index * 50}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative" >
        <img
          src={image}
          alt={name}
          className="mx-auto lg:w-64 xl:w-96 transition-transform rounded-lg transform group-hover:scale-105 "
        />
      </div>
      <div className='bg-white p-4'>
        <h3 className="text-lg font-poppins font-semibold mb-2 sm:text-base md:text-lg lg:text-xl">
          {name}
        </h3>
        <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center">
          <div className="flex items-center">
            <span className="font-poppins sm:text-xs md:text-base lg:text-lg">
              Min Cost: <a className='font-bold text-red-400'>{minCost}</a>
            </span>
          </div>
          <div className="flex items-center">
            <span className="font-poppins sm:text-xs md:text-base lg:text-lg">
              Max Supply: <a className='font-bold'>{maxSupply}</a>
            </span>
          </div>
          {isHovered && (
            <button
              className="sliding-animation transition-all transform duration-100 hover:text-[#0B3954] absolute w-full lg:p-2 p1 left-0 bottom-0 bg-[#FF9233] flex items-center justify-center text-white font-poppins font-semibold text-xl"
            >
              Mint
            </button>
          )}
        </div>
      </div>
    </div>

  );
}

export default Card;
