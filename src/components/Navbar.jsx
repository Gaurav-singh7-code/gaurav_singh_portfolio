import logo from "../assets/GauravLogo.png";

import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import LeetCodeIcon from '../assets/LeetCodeIcon.jsx';

const Navbar = () => {
  return (
    <nav className="mb-20 flex flex-col md:flex-row items-center justify-between py-6">
      <div className="flex items-center mb-4 md:mb-0">
        <img className="mx-5 w-20" src={logo} alt="logo" />
      </div>
      <div className="flex items-center gap-4 text-3xl">
        <a
          href="https://www.linkedin.com/in/gaurav-singh-vit/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-300 transition-colors duration-200"
          onClick={() => console.log('LinkedIn clicked')}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Gaurav-singh7-code"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-300 transition-colors duration-200"
          onClick={() => console.log('GitHub clicked')}
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/gauravsinghcode?t=RVssBs59xT4E3ArgJqdcRg&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-300 transition-colors duration-200"
          onClick={() => console.log('Twitter clicked')}
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/gauravvsingh._?igsh=enU0M2thdm55bWYx"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-300 transition-colors duration-200"
          onClick={() => console.log('Instagram clicked')}
        >
          <FaInstagram />
        </a>
        <a
          href="https://leetcode.com/u/Gaurav_singh7_code/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-300 transition-colors duration-200"
          onClick={() => console.log('LeetCode clicked')}
        >
          <LeetCodeIcon />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
