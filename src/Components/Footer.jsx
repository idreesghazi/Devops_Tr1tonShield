import React, { useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
function Footer() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    })
    return (
        <div className="bg-[#fffbfa] px-12 flex justify-between items-center text-black font-bold py-6 sm:py-4 lg:flex-row space-y-4 flex-col overflow-hidden">
            <a href="/" className="text-2xl text-black  font-poppins">
                <a href="#home">TR1TON SHIELD EDITION</a>
            </a>
            <p className="mt-4 text-center font-poppins sm:mt-0 sm:ml-4 sm:mr-4">
                Copyright @ TR1TON SHIELD NFTs | All rights reserved
            </p>
            <div className="flex gap-2 px-2">
                {" "}
                {/* Increased gap to create more horizontal gap */}
                <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon="fa-brands fa-x-twitter" className="float lg:p-2 p-1 text-xl hover:text-[#FF9233]" />
                </a>
                <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon="fa-brands fa-facebook" className="float lg:p-2 p-1 text-xl hover:text-[#FF9233]" />
                </a>
                <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon="fa-brands fa-discord" className="float lg:p-2 p-1 text-xl hover:text-[#FF9233]" />
                </a>
            </div>
        </div>
    )
}

export default Footer