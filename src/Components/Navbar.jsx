import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo_no_bg_b.png";
import {
  Link,
  animateScroll as scroll,
  scroller,
} from "react-scroll";
import { CustomConnectButton } from './CustomConnectButton';
library.add(faBars);

function Navbar() {
  const [account, setAccount] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* bg-[#fffbfa] */}
      <nav className="flex flex-row items-center justify-between gap-2 pt-3 overflow-hidden  lg:gap-4 lg:p-4 lg:pt-2 lg:flex-row flex-col-3 shadow-md">
        <div className="w-[15rem]">
          <img src={logo} alt="logo" className="flex w-52 p-1 mt-0 lg:-mt-2 cursor-pointer transition-all transform duration-100 hover:scale-110 hover:-rotate-6" />
        </div>
        <div className="hidden lg:flex items-start justify-start px-2 py-1 space-x-1 text-black font-bold font-poppins rounded-full lg:space-x-6">
          <ul className="flex gap-2 text-xs lg:text-lg lg:gap-10 lg:self-center">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                <h1 className="hover:text-[#69e2f2] transition-transform transform duration-300 hover:scale-110">
                  Home
                </h1>
              </Link>
            </li>
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                <h1 className="hover:text-[#69e2f2] transition-transform transform duration-300 hover:scale-110">
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
                <h1 className="hover:text-[#69e2f2] transition-transform transform duration-300 hover:scale-110">
                  Mint
                </h1>
              </Link>
            </li>
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                <h1 className="hover:text-[#69e2f2] transition-transform transform duration-300 hover:scale-110">
                  Roadmap
                </h1>
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <button
            onClick={handleMobileMenuToggle}
            type="button"
            className="p-2"
          >
            <FontAwesomeIcon icon="bars" size="lg" />
          </button>
        </div>
        <div className="hidden lg:block">
          <CustomConnectButton />
          {/* <button
            onClick={handleClick}
            type="button"
            className="font-poppins px-6 py-3 bg-[#69e2f2] transform transition-all duration-100  hover:scale-110 rounded-full shadow-lg lg:mr-0 lg:mt-2 mt-4 mb-4 lg:text-xl text-sm text-white font-bold"
          >
            {account
              ? `${account.substring(0, 6)}...${account.substring(
                account.length - 4
              )}`
              : "Connect Wallet"}
            {/* Connect Wallet */}
          {/* </button> */}
        </div>
      </nav>
      {
        isMobileMenuOpen && (
          <div className="lg:hidden bg-white w-full p-4">
            <ul className="gap-10 text-md lg:text-lg lg:gap-10 font-poppins">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={handleMobileMenuToggle}
                >
                  <h1 className="hover:text-[#69e2f2] transition-transform transform duration-300 hover:scale-110">
                    Home
                  </h1>
                </Link>
              </li>
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={handleMobileMenuToggle}
                >
                  <h1 className="hover:text-[#69e2f2] transition-transform transform duration-300 hover:scale-110">
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
                  onClick={handleMobileMenuToggle}
                >
                  <h1 className="hover:text-[#69e2f2] transition-transform transform duration-300 hover:scale-110">
                    Mint
                  </h1>
                </Link>
              </li>
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={handleMobileMenuToggle}
                >
                  <h1 className="hover:text-[#69e2f2] transition-transform transform duration-300 hover:scale-110">
                    Roadmap
                  </h1>
                </Link>
              </li>
            </ul>

            <div className="flex items-center justify-center">
              <CustomConnectButton />
            </div>
          </div>

        )
      }
    </>
  );
}

export default Navbar;
