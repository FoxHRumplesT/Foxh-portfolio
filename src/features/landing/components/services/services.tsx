import React from 'react';
import { useTranslation } from 'react-i18next';
import './services.sass'
import serviceWebsiteImage from '../../../../assets/img/services-website.svg';
import serviceBackImage from '../../../../assets/img/services-back.svg';
import servicePhoneImage from '../../../../assets/img/services-phone.svg';
import serviceDomainImage from '../../../../assets/img/services-domain.svg';

export interface ServicesProps {
  
}
 
const Services: React.FC<ServicesProps> = (props) => {

  const { t } = useTranslation();

  const servicesList: {
    name: string,
    description: string,
  }[] = [
    {
      name: 'landing.services.frontend.title',
      description: 'landing.services.frontend.description'
    },
    {
      name: 'landing.services.backend.title',
      description: 'landing.services.backend.description'
    },
    {
      name: 'landing.services.mobile.title',
      description: 'landing.services.mobile.description'
    },
    {
      name: 'landing.services.infra.title',
      description: 'landing.services.infra.description'
    },
    {
      name: 'landing.services.think.title',
      description: 'landing.services.think.description'
    },
    {
      name: 'landing.services.think.title',
      description: 'landing.services.think.description'
    },
  ];

  const allServices = () => {
    return servicesList.map((s, i) =>
      <li key={`service-${i}`}>
        <div className="service">
          <figure>
            <img src={serviceImage(s.name)} alt="Website" className="icon" />
          </figure>
          <h3 className="title">{ t(s.name) }</h3>
          <p className="description">{ t(s.description) }</p>
        </div>
      </li>
    );
  }

  const serviceImage = (serviceName: string): string => {
    switch (serviceName) {
      case 'landing.services.frontend.title':
        return serviceWebsiteImage;
      case 'landing.services.backend.title':
        return serviceBackImage;
      case 'landing.services.mobile.title':
        return servicePhoneImage;
      case 'landing.services.infra.title':
        return serviceDomainImage;
      case 'landing.services.think.title':
        return serviceDomainImage;
      default:
        return serviceDomainImage;
    }
  }

  return (
    <section className="services">
      <header className="services-header">
        <h2 className="title">{t('landing.services.title')}</h2>
        <p className="subtitle">{t('landing.services.subtitle')}</p>
      </header>
      <ul className="items">
        {allServices()}
      </ul>
    </section>
  );
}
 
export default React.memo(Services);