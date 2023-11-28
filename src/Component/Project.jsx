/* eslint-disable no-unused-vars */
import React from "react";
import "./project.css";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";
const Project = () => {
  return (
    <div className="my-10 w-[90%] mx-auto">
      <h1 className="text-center text-2xl font-bold mb-3">My Projects</h1>
      <div className="liveproject flex flex-col  lg:flex-row justify-between gap-10">
        <div>
          <div className="box box-1 relative w-[300px] h-[200px] bg-black"></div>
          <div className="link flex gap-2">
            <a
              href="https://omarstorebd.netlify.app"
              className="flex items-center"
            >
              <FaExternalLinkSquareAlt />
              <span>Live</span>
            </a>

            <a
              href="https://github.com/Omarabdullah99/E-Commerce-Fontend-save"
              className="flex  items-center"
            >
              <FaGithub />
              <span>Front-end</span>
            </a>

            <a
              href="https://github.com/Omarabdullah99/E_commerce_backend"
              className="flex  items-center"
            >
              <FaGithub />
              <span>Backend</span>
            </a>
          </div>
        </div>

        <div>
          <div className="box box-2 relative w-[300px] h-[200px] bg-black"></div>

          <div className="link flex gap-2">
            <a
              href="https://65636d71593b1108eb9a54b0--sweet-clafoutis-63dd83.netlify.app"
              className="flex items-center"
            >
              <FaExternalLinkSquareAlt />
              <span>Live</span>
            </a>

            <a
              href="https://github.com/Omarabdullah99/blog-project-client"
              className="flex  items-center"
            >
              <FaGithub />
              <span>Front-end</span>
            </a>

            <a
              href="https://github.com/Omarabdullah99/blog-project-server"
              className="flex  items-center"
            >
              <FaGithub />
              <span>Backend</span>
            </a>
          </div>
        </div>

        <div>
          <div className="box box-3 relative w-[300px] h-[200px] bg-black"></div>
          <div className="link flex gap-2">
            <a
              href="https://growup-skill.web.app"
              className="flex items-center"
            >
              <FaExternalLinkSquareAlt />
              <span>Live</span>
            </a>

            <a
              href="https://github.com/Omarabdullah99/b610-learning-platfrom-client-side-Omarabdullah99"
              className="flex  items-center"
            >
              <FaGithub />
              <span>Front-end</span>
            </a>

            <a
              href="https://github.com/Omarabdullah99/b610-learning-server-site"
              className="flex  items-center"
            >
              <FaGithub />
              <span>Backend</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
