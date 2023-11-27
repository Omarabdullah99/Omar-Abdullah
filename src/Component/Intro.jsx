import "./intro.css";
import Me from "../assets/profilebright.png"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import {  FaLinkedinIn,FaGithub,FaFacebook,FaInstagram } from "react-icons/fa";

const Intro = () => {
    const [text] = useTypewriter({
        words: ['MERN Stack Developer', 'Full Stack Developer', 'Web Developer', 'Front-End Developer'],
        loop: {},
        typeSpeed:140
      })
  return (
    <div className="i flex flex-col-reverse lg:flex-row justify-between items-center w-[80%] mx-auto py-3">
      <div className="i-left flex flex-col md:flex-row-reverse justify-between md:items-center gap-5">
        <div className="i-left-wrapper">
          <h2 className="text-xl ">Hello, It's Me</h2>
          <h1 className="text-5xl font-bold py-5">Omar Abdullah</h1>
          <h1 className="text-3xl">I'm a 
          <span className="ml-3" style={{fontWeight:'bold', color:'green'}}>{text}</span>
          <span style={{ color:'green'}}> <Cursor cursorStyle='...' /> </span>
          </h1>
{ /*         <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">MERN Stack</div>
              <div className="i-title-item">Fontend Devloper</div>
            </div>
  </div> */ }
          <p className="leading-7 pt-2">
         I am a MERN Stack developer . I have a strong foundation in front-end <br /> & back-end development and am skilled in creating user-friendly and <br /> responsive web applications using React and its ecosystem
          </p>
        </div>

        <div>
        <h1 className=" md:hidden text-2xl font-bold pb-3">Contact me</h1>
        <div className="flex flex-row md:flex-col gap-7 text-xl md:text-2xl">
       <a href="https://www.linkedin.com/in/omar-abdullah-07151a194"> <FaLinkedinIn /> </a>
       <a href="https://github.com/Omarabdullah99">  <FaGithub /> </a>
       <a href="https://www.facebook.com/omarabdullah.omar.37">  <FaFacebook /> </a>
       <a href="https://www.instagram.com/omar_abdullah303">  <FaInstagram /> </a>
        </div>
        </div>

      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img w-fit h-[300px] md:h-[450px] shadow-lg rounded-lg" />
      </div>
    </div>
  );
};

export default Intro;