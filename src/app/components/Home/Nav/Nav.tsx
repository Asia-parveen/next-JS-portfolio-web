import React from "react";
import Link from "next/link";
// import { faDownload } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

interface Props {
  openNav:() => void;
}

const Nav = ({ openNav }:Props) => {
  return (
    <div className="h-[13vh] bg-[#181a1d]">
      <div className="flex items-center justify-between w-[90%] xl:w-[80%] h-full mx-auto">
        <div className="text-[25px] md:text-[35px]  font-semibold text-white">
          As<span className="text-[#E487FF]">i</span>a Pa
          <span className="text-[#E487FF]">rv</span>een
        </div>
        <ul className="lg:flex hidden text-white items-center space-x-6 xl:space-x-10">
          <li className="navlink">
          <a href="#Home">Home</a>
          </li>
          <li className="navlink">
          <a href="#About">About</a>
          </li>
          <li className="navlink">
          <a href="#Services">Services</a>
          </li>
          <li className="navlink">
          <a href="#Skills">Skills</a>
          </li>
          <li className="navlink">
          <a href="#Project">Project</a>
          </li>
          <li className="navlink">
          <a href="#Contact">Contact</a>
          </li>
        </ul>
        {/* download manu */}
        <div className="flex items-center space-x-6">
          <Link href="https://www.linkedin.com/in/asia-parveen-258a952a7/">
            <button className="relative h-12 w-48 overflow-hidden rounded-full bg-[#E487FF] text-lg shadow group">
              {/* Expanding white background on hover */}
              <span className="absolute inset-0 w-3 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>

              {/* Text color change effect */}
              <span className="relative flex items-center justify-center space-x-3 text-white font-semibold group-hover:text-[#AF3cFF] transition-colors duration-300">
                <span>Linkedin</span>
              </span>
            </button>
          </Link>
          {/* burger manu */}
          <HiBars3BottomRight 
          onClick={openNav} 
          className="w-[2rem] text-white h-[2rem] lg:hidden"/>
        </div>
      </div>
    </div>
  );
};

export default Nav;
