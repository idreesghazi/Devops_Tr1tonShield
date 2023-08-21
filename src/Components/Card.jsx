import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faBoxes } from '@fortawesome/free-solid-svg-icons';
import { useAccount, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import { abi as NFTContractABI } from '../../contracts-abi.js';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Dialog } from '@headlessui/react'
import crossIcon from '../assets/cross.svg'
import { parseEther } from 'ethers';

function Card({ id, image, name, minCost, maxSupply, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [count, setCount] = useState(1);
  const { address, isConnecting, isDisconnected } = useAccount()


  const { data, isLoading, isSuccess, writeAsync: mintNFTs } = useContractWrite({
    address: '0x11f371E0F63aFcc5b60D6eB8986703216464D392',
    abi: NFTContractABI,
    functionName: 'mint',
  })

  const handleMintClick = () => {
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = count;
    if (newQuantity >= 1 && newQuantity <= maxSupply) {
      setQuantity(newQuantity);
    }
  };
  const incCount = () => {
    if (count < maxSupply) {
      setCount(count + 1);
      setQuantity(count + 1);
    }

  }
  const decCount = () => {
    if (count === 1) { return }
    setCount(count - 1);
    setQuantity(count - 1);
  }
  const handleMintConfirm = async (id, quantity) => {
    // Perform actions with the selected quantity (e.g., mint NFTs)
    console.log(`Minting ${quantity} NFT(s)`);
    setPopupOpen(false);
    await mintNFTs({
      args: [id, quantity],
    })
  };
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  });

  return (
    <div className="m-4 bg-[#fffbfa] rounded-lg customShadow overflow-hidden group" data-aos="fade-right" data-aos-delay={index * 50}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative" >
        <img
          src={image}
          alt={name}
          className="mx-auto transition-transform transform rounded-lg lg:w-64 xl:w-96 group-hover:scale-105 "
        />
      </div>
      <div className='p-4 bg-white'>
        <h3 className="mb-2 text-lg font-semibold text-center font-poppins sm:text-base md:text-lg lg:text-xl lg:text-start ">
          {name}
        </h3>
        <div className="flex flex-row items-center justify-between lg:justify-between lg:items-center">
          <div className="flex items-center">
            <span className="text-center font-poppins sm:text-xs md:text-base lg:text-lg">
              Min Cost: <a className='font-bold'>{minCost}</a>
            </span>
          </div>
          <div className="flex items-center">
            <span className="font-poppins sm:text-xs md:text-base lg:text-lg">
              Max Supply: <a className='font-bold'>{maxSupply}</a>
            </span>
          </div>

        </div>
        <div className='flex px-2 mt-2 lg:items-center lg:justify-center'>
          <button
            onClick={handleMintClick}
            className="sliding-animation transition-all transform duration-100 w-[20rem] rounded-xl shadow-lg hover:text-[#0B3954] bg-blue-400 lg:p-2 p-2 left-0 bottom-0  flex items-center justify-center text-white font-poppins font-semibold text-base lg:text-xl"
          >
            Mint
          </button>
        </div>

      </div>
      {isPopupOpen && (
        <Dialog
          open={isPopupOpen}
          onClose={() => setPopupOpen(false)}
          className="relative z-50"
        >
          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

          {/* Full-screen container to center the panel */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            {/* The actual dialog panel  */}
            <Dialog.Panel className="flex flex-col w-full max-w-sm p-4 mx-auto bg-white rounded-lg shadow-xl ">
              <div className="flex flex-col w-full gap-4 p-4 ">
                <button
                  className="text-gray-600 transition-all transform duration-100 hover:scale-110 rounded-md w-[1rem] self-end"
                  onClick={handlePopupClose}
                >
                  <img src={crossIcon} alt='CrossImg' />
                </button>
                <h2 className="mb-2 text-xl font-semibold text-center font-poppins">Select Quantity</h2>
                <div className='flex items-center justify-center gap-5'>
                  <button onClick={decCount} className='font-bold text-center transition-all duration-100 transform font-poppins font-3xl hover:scale-125'>-</button>
                  <div
                    className="w-20 p-2 mb-2 text-center border rounded-md font-poppins" // Retain the "text-center" class
                  >
                    {count}
                  </div>
                  <button onClick={incCount} className='font-bold text-center transition-all duration-100 transform font-poppins font-3xl hover:scale-125'>+</button>
                </div>
                <div className='flex items-center justify-center font-poppins'>
                  <button
                    className="px-4 py-2 text-white transition-all duration-100 transform bg-blue-400 rounded-md w-52 hover:scale-105 "
                    onClick={() => handleMintConfirm(id, quantity)}
                  // onClick={() => mint?.(quantity)}
                  >
                    Mint
                  </button>

                </div>
              </div>

              {/* ... */}
            </Dialog.Panel>
          </div>
        </Dialog >
      )
      }
    </div >

  );
}

export default Card;


// (
//   <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-50">
//     <div className="flex flex-col w-full p-4 bg-white rounded-lg">
//       <h2 className="mb-2 text-xl font-semibold text-center font-poppins">Select Quantity</h2>
//       <input
//         type="number"
//         placeholder='Enter Quantity'
//         className="p-2 mb-2 border rounded-md"
//         value={quantity}
//         onChange={handleQuantityChange}
//       />
//       <div className='flex items-center justify-center font-poppins'>
//         <button
//           className="bg-[#c1b9f9] transition-all transform duration-100 hover:scale-105 text-white rounded-md px-4 py-2"
//           onClick={handleMintConfirm}
//         >
//           Mint
//         </button>
//         <button
//           className="text-gray-600 transition-all transform duration-100 hover:scale-105 bg-[#69e2f2] ml-4 rounded-md px-4 py-2"
//           onClick={handlePopupClose}
//         >
//           Cancel
//         </button>
//       </div>
//     </div>

//   </div>
// )


