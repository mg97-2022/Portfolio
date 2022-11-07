import SectionHeading from "../../../components/SectionHeader/SectionHeading";
import amazon from "../../../assets/amazon.png";
import netflix from "../../../assets/netflix.png";
import resto from "../../../assets/resto.png";
import coffee from "../../../assets/coffee.png";
import mg from "../../../assets/mg.png";
import netLogo from "../../../assets/logos/netLogo.png";
import amzLogo from "../../../assets/logos/amzLogo.png";
import resLogo from "../../../assets/logos/resLogo.png";
import coffLogo from "../../../assets/logos/coffLogo.png";
import mgLogo from "../../../assets/logos/mgLogo.png";
import Project from "./Project/Project";
import classes from "./ProjectsContent.module.css";

const projects = [
  {
    img: netflix,
    title: "netflix clone",
    logo: netLogo,
    liveURL: "https://netflix-mg97.web.app/",
    githubURL: "https://github.com/mg97-2022/Netflix-clone",
  },
  {
    img: amazon,
    title: "amazon clone",
    logo: amzLogo,
    liveURL: "http://mg97-2.web.app/",
    githubURL: "https://github.com/mg97-2022/Amazon-clone",
  },
  {
    img: resto,
    title: "food website",
    logo: resLogo,
    liveURL: "https://mg97-2022.github.io/RESTO/",
    githubURL: "https://github.com/mg97-2022/RESTO",
  },
  {
    img: coffee,
    title: "coffee website",
    logo: coffLogo,
    liveURL: "https://mg97-2022.github.io/Coffee-Shop/",
    githubURL: "https://github.com/mg97-2022/Coffee-Shop",
  },
  {
    img: mg,
    title: "MG97",
    logo: mgLogo,
    liveURL: "https://mg97-2022.github.io/MG97/",
    githubURL: "https://github.com/mg97-2022/MG97",
  },
];

const ProjectsContent = () => {
  return (
    <div className="section">
      <SectionHeading>
        <h2>
          my <span>projects</span>
        </h2>
      </SectionHeading>
      <div className={classes.projects}>
        {projects.map((project, index) => {
          return <Project key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsContent;
