import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiBroadcast } from "react-icons/bi";
import classes from "./Project.module.css";

type projectProps = {
  project: {
    img: string;
    title: string;
    logo: string;
    liveURL: string;
    githubURL: string;
  };
};

const Project = ({ project }: projectProps) => {
  const { img, title, logo, liveURL, githubURL } = project;
  return (
    <div className={classes.project}>
      <img src={img} alt="" />
      <div className={classes.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={classes.details}>
        <h4>{title}</h4>
        <div className={classes.links}>
          <a target="_blank" rel="noreferrer" href={githubURL}>
            <AiFillGithub />
          </a>
          <a target="_blank" rel="noreferrer" href={liveURL}>
            <BiBroadcast />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
