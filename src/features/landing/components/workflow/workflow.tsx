import React from 'react';
import { useTranslation } from 'react-i18next';
import './workflow.sass'

export interface WorkflowProps {
  
}
 
const Workflow: React.FC<WorkflowProps> = (props) => {

  const { t } = useTranslation();

  const allWorkflow = () => {
    return [1,1,1,1,1,1,1,1].map((s, i) =>
      <li key={`workflow-${i}`}>
        <div className="item">
          <div className="circle">
            <span className="number">1</span>
          </div>
          <div className="texts">
            <h6 className="name">Your brief</h6>
            <p className="description">I always  professional Workflow and provide</p>
          </div>
        </div>
      </li>
    );
  }

  return (
    <section id="workflow" className="my-workflow">
      <header className="my-workflow-header">
        <h2 className="title">{t('landing.workflow.title')}</h2>
        <p className="subtitle">{t('landing.workflow.description')}</p>
      </header>
      <div className="workflow">
        <ul className="items">
          {allWorkflow()}
        </ul>
      </div>
    </section>
  );
}
 
export default React.memo(Workflow);