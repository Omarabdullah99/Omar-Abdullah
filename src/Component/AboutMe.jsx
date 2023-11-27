import "./aboutme.css";
import aboutimage from "../assets/about.jpeg";

const About = () => {
    return (
        <div className="a">
          <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
              <img
                src={aboutimage}
                alt=""
                className="a-img"
              />
            </div>
          </div>
          <div className="a-right">
            <h1 className="a-title text-3xl font-bold">About Me</h1>
            <p>Hello, It’s me Omar Abdullah. I have completed my diploma degree in Computer Technology from Khulna Polytechnic Institute. I am a Full-stack developer. I have knowledge about frontend and backend technology to build responsive modern and dynamic website. <br /><br />
            On the front-end side, I am specialized in HTML, CSS, tailwind, bootstrap, and JavaScript frameworks such as React. I can create user friendly web application <br /> <br />
            Moving the backend I specialize in backend web development using Node.js, Express.js, MongoDB, and Mongoose. This tech stack allows me to build the server-side of web applications, handle data storage, and create robust APIs for various web and mobile projects. <br /> <br />
            
            I have done several projects like e-commerce, blog, and quize web applications using react,CSS, tailwind css, react-router-dom, expressjs, nonsql databases like mongo-db, authentication mongoose
            </p>
          </div>
        </div>
      );
    };


export default About;
