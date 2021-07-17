import React, { useState } from "react";
import "./projects.sass";

import {
  projectImage1,
  projectImage2,
  projectImage3,
  projectImage4,
  projectImage5,
  projectImage6,
  projectImage7,
  projectImage8,
  projectImage9,
  projectImage10,
} from "../../../../assets/img/";

export interface ProjectsProps {}
type ProjectType = "all" | "mobile" | "web-app" | "web-page";

const Projects: React.FC<ProjectsProps> = (props) => {
  const [filter, setFilter] = useState<ProjectType>("all");
  const [isFiltering, setIsFiltering] = useState<boolean>(false);

  const projects: {
    name: string;
    image: string;
    type: "mobile" | "web-app" | "web-page";
  }[] = [
    {
      name: "Booking hotel",
      image: projectImage1,
      type: "web-app",
    },
    {
      name: "Growth projects",
      image: projectImage2,
      type: "web-app",
    },
    {
      name: "Ideas make real",
      image: projectImage3,
      type: "web-app",
    },
    {
      name: "Social media marketing",
      image: projectImage4,
      type: "web-page",
    },
    {
      name: "Design agency",
      image: projectImage5,
      type: "web-page",
    },
    {
      name: "Cookbook",
      image: projectImage6,
      type: "web-app",
    },
    {
      name: "Doctors",
      image: projectImage7,
      type: "mobile",
    },
    {
      name: "Pet shop",
      image: projectImage8,
      type: "mobile",
    },
    {
      name: "Fitness",
      image: projectImage9,
      type: "mobile",
    },
    {
      name: "Explore the world",
      image: projectImage10,
      type: "mobile",
    },
  ];

  const handleTabFilter = (type: ProjectType): void => {
    if (type === filter) return;
    setIsFiltering(true);
    setTimeout(() => {
      setIsFiltering(false);
      setFilter(type);
    }, 400);
  };
  const isActiveFilter = (type: ProjectType): boolean => filter === type;
  const projectsToShow = () => {
    return projects
      .filter((p) => (filter === "all" ? true : p.type === filter))
      .map((p, i) => (
        <li key={`projects-${i}`}>
          <div className="item">
            <figure>
              <img src={p.image} alt={p.name} />
            </figure>
            <div className="overlay">
              <div className="name">{p.name}</div>
            </div>
          </div>
        </li>
      ));
  };

  return (
    <section className="projects">
      <header className="projects-header">
        <h2 className="title">Tengo un gran portafolio, miralo.</h2>
        <p className="subtitle">
          Proyectos propios o trabajados para clientes de diferentes tipos y
          gran variedad de diseños implementados.
          {/* I always follow professional
          Workflow and provide you best service with resealable costs. */}
        </p>
      </header>
      <div className="all-projects">
        <div className="tabs">
          <span
            className={`tab ${isActiveFilter("all") ? "active" : ""}`}
            onClick={() => handleTabFilter("all")}
          >
            Todos
          </span>
          <span
            className={`tab ${isActiveFilter("mobile") ? "active" : ""}`}
            onClick={() => handleTabFilter("mobile")}
          >
            Aplicación mobile
          </span>
          <span
            className={`tab ${isActiveFilter("web-page") ? "active" : ""}`}
            onClick={() => handleTabFilter("web-page")}
          >
            Página web
          </span>
          <span
            className={`tab ${isActiveFilter("web-app") ? "active" : ""}`}
            onClick={() => handleTabFilter("web-app")}
          >
            Aplicacion web
          </span>
        </div>
        <ul className={`items ${isFiltering ? "filtering" : ""}`}>
          {projectsToShow()}
        </ul>
      </div>
    </section>
  );
};

export default React.memo(Projects);
