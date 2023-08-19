import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faBoxes } from '@fortawesome/free-solid-svg-icons';
import { useAccount, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import { abi as wagmigotchiABI } from '../../contracts-abi.js';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Dialog } from '@headlessui/react'
import crossIcon from '../assets/cross.svg'
import { parseEther } from 'ethers';

const nftContractAddress = '0x874fC3d9Ae9C9668DD5307D93350168E81caf6C7';
const nftContractAbi = wagmigotchiABI;

const contractConfig = {
  nftContractAddress,
  nftContractAbi,
};

// const {
//   data: txData,
//   isSuccess: txSuccess,
//   error: txError,
// } = useWaitForTransaction({
//   hash: mintData?.hash,
// });

function Card({ id, image, name, minCost, maxSupply, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [count, setCount] = useState(1);
  const { address, isConnecting, isDisconnected } = useAccount()


  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: '0x2808E2B9D2a2462B722Ec19B78005C226F5807ca',
    abi: wagmigotchiABI,
    functionName: 'mint',
  })

  const { config: contractWriteConfig } = usePrepareContractWrite({
    ...contractConfig,
    functionName: 'mint',
    args: [
      {
        mintAmount: quantity,
        gasLimit: 500000,
      }
    ]
  });

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
  const handleMintConfirm = (id, quantity) => {
    // Perform actions with the selected quantity (e.g., mint NFTs)
    console.log(`Minting ${quantity} NFT(s)`);
    alert("mintingNightmare")
    setPopupOpen(false);
    write({
      args: [id, address, quantity, '0x'],
      from: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
      value: parseEther('0.01'),
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
          className="mx-auto lg:w-64 xl:w-96 transition-transform rounded-lg transform group-hover:scale-105 "
        />
      </div>
      <div className='bg-white p-4'>
        <h3 className="text-lg font-poppins font-semibold mb-2 sm:text-base md:text-lg lg:text-xl lg:text-start text-center ">
          {name}
        </h3>
        <div className="flex flex-row lg:justify-between lg:items-center items-center justify-between">
          <div className="flex items-center">
            <span className="font-poppins sm:text-xs md:text-base lg:text-lg text-center">
              Min Cost: <a className='font-bold'>{minCost}</a>
            </span>
          </div>
          <div className="flex items-center">
            <span className="font-poppins sm:text-xs md:text-base lg:text-lg">
              Max Supply: <a className='font-bold'>{maxSupply}</a>
            </span>
          </div>

        </div>
        <div className='flex lg:items-center lg:justify-center px-2 mt-2'>
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
            <Dialog.Panel className="mx-auto max-w-sm bg-white rounded-lg p-4 flex flex-col w-full shadow-xl ">
              <div className=" p-4 flex flex-col w-full gap-4">
                <button
                  className="text-gray-600 transition-all transform duration-100 hover:scale-110 rounded-md w-[1rem] self-end"
                  onClick={handlePopupClose}
                >
                  <img src={crossIcon} alt='CrossImg' />
                </button>
                <h2 className="text-xl font-poppins text-center font-semibold mb-2">Select Quantity</h2>
                <div className='flex items-center justify-center gap-5'>
                  <button onClick={decCount} className='font-poppins font-bold font-3xl text-center transition-all transform duration-100 hover:scale-125'>-</button>
                  <div
                    className="border p-2 rounded-md mb-2 font-poppins w-20 text-center" // Retain the "text-center" class
                  >
                    {count}
                  </div>
                  <button onClick={incCount} className='font-poppins font-bold font-3xl text-center transition-all transform duration-100 hover:scale-125'>+</button>
                </div>
                <div className='flex font-poppins items-center justify-center'>
                  <button
                    className="bg-blue-400 w-52 transition-all transform duration-100 hover:scale-105 text-white rounded-md px-4 py-2 "
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
//   <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center">
//     <div className="bg-white rounded-lg p-4 flex flex-col w-full">
//       <h2 className="text-xl font-poppins text-center font-semibold mb-2">Select Quantity</h2>
//       <input
//         type="number"
//         placeholder='Enter Quantity'
//         className="border p-2 rounded-md mb-2"
//         value={quantity}
//         onChange={handleQuantityChange}
//       />
//       <div className='flex font-poppins items-center justify-center'>
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


