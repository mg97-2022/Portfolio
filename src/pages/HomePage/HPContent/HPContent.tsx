import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import classes from "./HPContent.module.css";
import Developer from "./Developer/Developer";

const HPContent = () => {
  return (
    <div className={`section ${classes.home}`}>
      <div className={classes.middle}>
        <h2>mohamed gamal</h2>
        <div className={classes.desc}>
          <Developer />
        </div>
        <a href='Mohamed_Gamal_CV.pdf' download='Mohamed_Gamal_CV.pdf' className="btn">
          Download CV
        </a>
      </div>
      <div className={classes.social}>
        <a target='_blank' rel='noreferrer' href="https://www.facebook.com/MOHAMEDGAMALSAIED97/">
          <FaFacebookF />
        </a>
        <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/mohamed-gamal-229ab71a5/">
          <FaLinkedin />
        </a>
        <a target='_blank' rel='noreferrer' href="https://github.com/mg97-2022">
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
};

export default HPContent;
