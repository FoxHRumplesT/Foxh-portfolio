import React from 'react';
import './workflow.sass'

export interface WorkflowProps {
  
}
 
const Workflow: React.FC<WorkflowProps> = (props) => {

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
    <section className="my-workflow">
      <header className="my-workflow-header">
        <h2 className="title">Mi flujo de trabajo.</h2>
        <p className="subtitle">Te proveo un flujo de trabajo profesional, escuchando tus requerimientos y minimizando los gastos al maximo.</p>
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