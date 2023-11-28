
import aboutimage from "../assets/about.jpeg";
import { CiViewList } from "react-icons/ci";
import resume from "../assets/ResumeofOmarAbdullah(Web Developer)_.pdf";
import './about.css'


const AboutCopy = () => {
  return (
      <div className="flex flex-col lg:flex-row items-center w-[90%] mx-auto gap-10 my-10 ">

      <div className="left w-[40%] relative ">
      <div className=" absolute top-0 left-0 w-full h-[300px] rounded-lg shadow-lg bg-[#64FFDA] "></div>
      <img src={aboutimage} alt="" className="w-full h-[300px] object-cover rounded-lg shadow-lg relative z-10 top-[28px] left-[17px] hover-effect" />
    </div>

        <div className="right w-[60%]">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="mb-4">
            Hello, It’s me Omar Abdullah. I have completed my diploma degree in
            Computer Technology from Khulna Polytechnic Institute. I am a
            Full-stack developer. I have knowledge about frontend and backend
            technology to build responsive modern and dynamic websites.
            <br />
            <br />
            On the front-end side, I am specialized in HTML, CSS, tailwind,
            bootstrap, and JavaScript frameworks such as React. I can create user
            friendly web applications.
            <br />
            <br />
            Moving to the backend, I specialize in backend web development using
            Node.js, Express.js, MongoDB, and Mongoose. This tech stack allows me
            to build the server-side of web applications, handle data storage, and
            create robust APIs for various web and mobile projects.
            <br />
            <br />
            I have done several projects like e-commerce, blog, and quiz web
            applications using React, CSS, Tailwind CSS, React Router DOM,
            Express.js, NoSQL databases like MongoDB, and authentication with Mongoose.
          </p>

          <div className="flex items-center text-sm bg-black text-white w-40 py-3 shadow-xl rounded-lg gap-2 justify-center mt-3">
            <i className="cvicon">
              <CiViewList />
            </i>
            <a download="" href={resume}>
              Download Resume
            </a>
          </div>
        </div>
      </div>
  );
};

export default AboutCopy;
