import React from 'react';
import './projects.sass'

export interface ProjectsProps {
  
}
 
const Projects: React.FC<ProjectsProps> = (props) => {
  return (
    <section className="projects">
      <header className="projects-header">
        <h2 className="title">Tengo un gran portafolio, miralo.</h2>
        <p className="subtitle">I always follow professional Workflow and provide you best service with resealable costs.</p>
      </header>
      <div className="all-projects">
        <div className="tabs">
          <span className="tab active">Todos</span>
          <span className="tab">Aplicación mobil</span>
          <span className="tab">Página web</span>
          <span className="tab">Aplicacion web</span>
        </div>
        <ul className="items">
          <li>
            <div className="item">

            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
 
export default React.memo(Projects);