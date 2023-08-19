import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Card from './Components/Card';
import img1 from './assets/Tr1ton-Shield-Edition-01-Clan.jpg';
import img2 from './assets/Tr1ton-Shield-Edition-02-Ted.jpg';
import img3 from './assets/Tr1ton-Shield-Edition-03-Rooted.jpg';
import img4 from './assets/Tr1ton-Shield-Edition-04-Leader.jpg';
import img5 from './assets/Tr1ton-Shield-Edition-05-Breath.jpg';
import img6 from './assets/Tr1ton-Shield-Edition-06-Grounded.jpg';
import img7 from './assets/Tr1ton-Shield-Edition-07-Alive.jpg';
import img8 from './assets/Tr1ton-Shield-Edition-08-Be-Bold.jpg';
import img9 from './assets/Tr1ton-Shield-Edition-09-Thunder.jpg';
import img10 from './assets/Tr1ton-Shield-Edition-10-Royal-Lion.jpg';
import img11 from './assets/Tr1ton-Shield-Edition-11-Fight.jpg';
import img12 from './assets/Tr1ton-Shield-Edition-12-Hell.jpg';
import img13 from './assets/Tr1ton-Shield-Edition-13-Silence.jpg';
import img14 from './assets/Tr1ton-Shield-Edition-14-Flame.jpg';
import img15 from './assets/Tr1ton-Shield-Edition-15-Wing-of-Freedom.jpg';
import img16 from './assets/Tr1ton-Shield-Edition-16-Sting.jpg';
import Footer from './Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  const [index, setIndex] = useState(0);
  const text = "TR1TON SHIELD EDITION";
  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, 250); // Adjust the delay for typing speed

      // Clear timeout if the component is unmounted
      return () => clearTimeout(timer);
    }
  }, [index]);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, 150); // Adjust the delay for typing speed

      // Clear timeout if the component is unmounted
      return () => clearTimeout(timer);
    }
  }, [index]);

  const cardsData = [
    {
      id: 1,
      image: img1,
      name: 'Clan',
      minCost: "Free",
      maxSupply: 50,
    },
    {
      id: 2,
      image: img2,
      name: 'Ted',
      minCost: "Free",
      maxSupply: 50,
    },
    {
      id: 3,
      image: img3,
      name: 'Rooted',
      minCost: "Free",
      maxSupply: 50,
    },
    {
      id: 4,
      image: img4,
      name: 'Leader',
      minCost: "Free",
      maxSupply: 50,
    },
    {
      id: 5,
      image: img5,
      name: 'Breath',
      minCost: "Free",
      maxSupply: 50,
    },
    {
      id: 6,
      image: img6,
      name: 'Grounded',
      minCost: "Free",
      maxSupply: 1,
    },
    {
      id: 7,
      image: img7,
      name: 'Alive',
      minCost: "Free",
      maxSupply: 50,
    },
    {
      id: 8,
      image: img8,
      name: 'Be Bold',
      minCost: "Free",
      maxSupply: 25,
    },
  ];
  const cardsData2 = [
    {
      id: 9,
      image: img9,
      name: 'Thunder',
      minCost: "Free",
      maxSupply: 25,
    },
    {
      id: 10,
      image: img10,
      name: 'Royal Lion',
      minCost: "Free",
      maxSupply: 25,
    },
    {
      id: 11,
      image: img11,
      name: 'Fight',
      minCost: "Free",
      maxSupply: 25,
    },
    {
      id: 12,
      image: img12,
      name: 'Hell',
      minCost: "Free",
      maxSupply: 25,
    },
    {
      id: 13,
      image: img13,
      name: 'Silence',
      minCost: "Free",
      maxSupply: 1,
    },
    {
      id: 14,
      image: img14,
      name: 'Flame',
      minCost: "Free",
      maxSupply: 1,
    },
    {
      id: 15,
      image: img15,
      name: 'Wing of Freedom',
      minCost: "Free",
      maxSupply: 20,
    },
    {
      id: 16,
      image: img16,
      name: 'Sting',
      minCost: "Free",
      maxSupply: 10,
    },
  ];


  return (
    <div className='min-h-screen h-auto bg-[#FFFBFA]'>
      <Navbar />
      <div id='home' className='min-h-screen h-auto text-center flex flex-col items-center justify-center bg-gradient border border-gray-200'>
        <h1 className='text-6xl lg:text-9xl font-poppins font-bold'>
          {text.substring(0, index)}
        </h1>
        <h1 className='text-2xl lg:text-4xl font-poppins font-semibold p-12' data-aos="fade-up" data-aos-delay={3000}>
          Where Legends Emerge from Limited Supply!
        </h1>
      </div>
      <div id='mint' className="container mx-auto grid grid-cols-1 sm:grid-cols-4 lg:mt-10 ">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            index={index}
            id={card.id}
            image={card.image}
            name={card.name}
            minCost={card.minCost}
            maxSupply={card.maxSupply}

          />
        ))}
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-4 mb-4">
        {cardsData2.map((card, index) => (
          <Card
            key={index}
            index={index}
            id={card.id}
            image={card.image}
            name={card.name}
            minCost={card.minCost}
            maxSupply={card.maxSupply}

          />
        ))}
      </div>
      {/* <Footer /> */}
    </div >
  )
}

export default App
