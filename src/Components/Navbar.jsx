import "../App.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import dash1 from "../assets/react.svg";
import * as Scroll from "react-scroll";
import logo from "../assets/logo_no_bg.png"
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

// import { MetaMaskSDK } from '@metamask/sdk';
library.add(fab);

function Navbar() {
  const [account, setAccount] = useState(null);

  const handleClick = async () => {
    if (account) {
      setAccount(null);
      return;
    }
    try {
      // const accounts = await connectMetamask();
      setAccount(accounts);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <nav className="flex flex-col items-center justify-between gap-2 pt-3 overflow-hidden bg-[#0B3954] lg:gap-4 lg:p-6 lg:pt-6 lg:flex-row flex-col-3">
        <div className="w-[15rem]">
          <img src={logo} alt="logo" className="flex w-52 p-1 mt-0 lg:-mt-2 cursor-pointer transition-all transform duration-100 hover:scale-110 hover:-rotate-6" />
        </div>
        <div className="flex items-start justify-start px-2 py-1 space-x-1 text-white font-bold font-poppins rounded-full lg:space-x-6">
          <ul className="flex gap-2 text-xs lg:text-lg lg:gap-10">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}

              >
                <h1 className="hover:text-[#FF9233] transition-transform transform duration-300 hover:scale-110">
                  Home
                </h1>
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}

              >
                <h1 className="hover:text-[#FF9233] transition-transform transform duration-300 hover:scale-110">
                  About
                </h1>
              </Link>
            </li>
            <li>
              <Link
                to="mint"
                spy={true}
                smooth={true}
                duration={500}

              >
                <h1 className="hover:text-[#FF9233] transition-transform transform duration-300 hover:scale-110">
                  Mint
                </h1>
              </Link>
            </li>

            <li>
              <Link
                to="faq"
                spy={true}
                smooth={true}
                duration={500}

              >
                <h1 className="hover:text-[#FF9233] transition-transform transform duration-300 hover:scale-110">
                  Roadmap
                </h1>
              </Link>
            </li>
          </ul>

        </div>
        <div className="">
          <button
            onClick={handleClick}
            type="button"
            className="font-poppins px-6 py-3 bg-[#FF9233] transform transition-all duration-100  hover:scale-110 rounded-full shadow-lg lg:mr-0 lg:mt-2 mt-4 mb-4 lg:text-xl text-sm text-white font-bold"
          >
            {account
              ? `${account.substring(0, 6)}...${account.substring(
                account.length - 4
              )}`
              : "Connect Wallet"}
            {/* Connect Wallet */}
          </button>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
