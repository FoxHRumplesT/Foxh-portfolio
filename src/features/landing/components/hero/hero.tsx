import React from 'react';
import './hero.sass'
// import photoImage from ';

export interface HeroProps {
  
}
 
const Hero: React.FC<HeroProps> = (props) => {
  return (
    <section className="hero-page">
      <div className="content">
        <div className="texts">
          <h3>Hola, soy Julian Rojas</h3>
          <h1>Full stack developer</h1>
          <a href="#" className="hire-me">Contáctame</a>
        </div>
        <figure>
          <img src={`assets/img/mayuri-kurotsuchi.png`} alt="Julian photo" className="photo" />
        </figure>
      </div>
    </section>
  );
}
 
export default React.memo(Hero);