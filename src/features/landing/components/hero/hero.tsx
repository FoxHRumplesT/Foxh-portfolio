import React from 'react';
import { useTranslation } from 'react-i18next';
import './hero.sass'
import photoImage from '../../../../assets/img/mayuri-kurotsuchi.png';

export interface HeroProps {
  
}
 
const Hero: React.FC<HeroProps> = (props) => {

  const { t } = useTranslation();
  return (
    <section className="hero-page">
      <div className="content">
        <div className="texts">
          <h3>{t('landing.hero.hi')}</h3>
          <h1>{t('landing.hero.position')}</h1>
          <a href="/" className="hire-me">{t('landing.hero.contact')}</a>
        </div>
        <figure>
          <img src={photoImage} alt="Julian" className="photo" />
        </figure>
      </div>
    </section>
  );
}
 
export default React.memo(Hero);