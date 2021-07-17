import React from 'react';
import './skills.sass'
import photoImage from '../../../../assets/img/mayuri-kurotsuchi.png';
import checkIcon from '../../../../assets/img/skills-check.svg';

export interface SkillsProps {
  
}
 
const Skills: React.FC<SkillsProps> = (props) => {

  const skillsList: {
    name: string,
    percentage: number,
  }[] = [
    {
      name: 'React',
      percentage: 90,
    },
    {
      name: 'Angular',
      percentage: 90,
    },
    {
      name: 'SEO',
      percentage: 50,
    },
    {
      name: 'Node',
      percentage: 80,
    },
    {
      name: 'Java',
      percentage: 50,
    },
    {
      name: 'AWS',
      percentage: 80,
    },
  ];

  const allSkills = () => {
    return skillsList.map((s, i) =>
      <li key={`skills-${i}`}>
        <div className="item">
          <img src={checkIcon} alt="Check" />
          <p className="name">{ s.name }</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: s.percentage + '%' }}></div>
          </div>
          <p className="percentage">{ s.percentage }%</p>
        </div>
      </li>
    );
  }

  return (
    <section className="my-skills">
      <figure>
        <img src={photoImage} alt="" className="photo" />
      </figure>
      <div className="content">
        <h3 className="title">Mis habilidades</h3>
        <ul className="skills">
          {allSkills()}
        </ul>
        <h3 className="title">Sobre mí</h3>
        <p className="about-me">What’s an outsourced marketing un-agency, you say? Well, we’re the antithesis to your run-of-the-mill agency that oversells and underdelivers.

          Lately, it’s been about closing the biggest contracts. But what about making the biggest impact for clients? Our goal is to get RESULTS that will make clients HAPPY without overpricing.
          
          Feeling skeptical? Work with us, and see the difference between getting marketing partners invested in your growth, versus salesmen invested in milking you dry!</p>
      </div>
    </section>
  );
}
 
export default React.memo(Skills);