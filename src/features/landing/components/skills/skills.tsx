import React from "react";
import { useTranslation } from "react-i18next";
import "./skills.sass";
import photoImage from "../../../../assets/img/mayuri-kurotsuchi.png";
import checkIcon from "../../../../assets/img/skills-check.svg";

export interface SkillsProps {}

const Skills: React.FC<SkillsProps> = (props) => {
  const { t } = useTranslation();

  const skillsList: {
    name: string;
    percentage: number;
  }[] = [
    {
      name: "React",
      percentage: 90,
    },
    {
      name: "Angular",
      percentage: 90,
    },
    {
      name: "SEO",
      percentage: 50,
    },
    {
      name: "Node",
      percentage: 80,
    },
    {
      name: "Java",
      percentage: 50,
    },
    {
      name: "AWS",
      percentage: 80,
    },
  ];

  const allSkills = () => {
    return skillsList.map((s, i) => (
      <li key={`skills-${i}`}>
        <div className="item">
          <img src={checkIcon} alt="Check" />
          <p className="name">{s.name}</p>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: s.percentage + "%" }}
            ></div>
          </div>
          <p className="percentage">{s.percentage}%</p>
        </div>
      </li>
    ));
  };

  return (
    <section id="about" className="my-skills">
      <figure>
        <img src={photoImage} alt="" className="photo" />
      </figure>
      <div className="content">
        <h3 className="title">{t("landing.about.title1")}</h3>
        <ul className="skills">{allSkills()}</ul>
        <h3 className="title">{t("landing.about.title2")}</h3>
        <p className="about-me">{t("landing.about.description")}</p>
      </div>
    </section>
  );
};

export default React.memo(Skills);
