import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Card from './Components/Card';
import img1 from './assets/1.png';
import img2 from './assets/45.png';
import img3 from './assets/47.png';
import img4 from './assets/60.png';
import img5 from './assets/Harrypotter.png';
import img6 from './assets/Heisenberg.png';
import img7 from './assets/Hippo.png';
import img8 from './assets/Wolverine2.png';
import Footer from './Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {



  const cardsData = [
    {
      image: img1,
      name: 'Clan',
      minCost: "Free",
      maxSupply: 50,
    },
    {
      image: img2,
      name: 'Ted',
      minCost: "Free",
      maxSupply: 50,
    },
    {
      image: img3,
      name: 'Rooted',
      minCost: "Free",
      maxSupply: 50,
    },
    {
      image: img4,
      name: 'Leader',
      minCost: "Free",
      maxSupply: 50,
    },
    {
      image: img5,
      name: 'Breath',
      minCost: "Free",
      maxSupply: 50,
    },
    {
      image: img6,
      name: 'Grounded',
      minCost: "Free",
      maxSupply: 1,
    },
    {
      image: img7,
      name: 'Alive',
      minCost: "Free",
      maxSupply: 50,
    },
    {
      image: img8,
      name: 'Be Bold',
      minCost: "Free",
      maxSupply: 25,
    },
  ];
  const cardsData2 = [
    {
      image: img1,
      name: 'Thunder',
      minCost: "Free",
      maxSupply: 25,
    },
    {
      image: img2,
      name: 'Royal Lion',
      minCost: "Free",
      maxSupply: 25,
    },
    {
      image: img3,
      name: 'Fight',
      minCost: "Free",
      maxSupply: 25,
    },
    {
      image: img4,
      name: 'Hell',
      minCost: "Free",
      maxSupply: 25,
    },
    {
      image: img8,
      name: 'Silence',
      minCost: "Free",
      maxSupply: 1,
    },
    {
      image: img5,
      name: 'Flame',
      minCost: "Free",
      maxSupply: 1,
    },
    {
      image: img6,
      name: 'Wing of Freedom',
      minCost: "Free",
      maxSupply: 20,
    },
    {
      image: img7,
      name: 'Sting',
      minCost: "Free",
      maxSupply: 10,
    },
  ]

  return (
    <div className='min-h-screen h-auto bg-[#BFD7EA]'>
      <Navbar />
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 lg:mt-10">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            index={index}
            image={card.image}
            name={card.name}
            minCost={card.minCost}
            maxSupply={card.maxSupply}

          />
        ))}
      </div>
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4">
        {cardsData2.map((card, index) => (
          <Card
            key={index}
            index={index}
            image={card.image}
            name={card.name}
            minCost={card.minCost}
            maxSupply={card.maxSupply}

          />
        ))}
      </div>
      <Footer />
    </div >
  )
}

export default App
