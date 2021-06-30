import React from 'react';
import './services.sass'
import serviceWebsiteImage from '../../../../assets/img/services-website.svg';
import serviceBackImage from '../../../../assets/img/services-back.svg';
import servicePhoneImage from '../../../../assets/img/services-phone.svg';
import serviceDomainImage from '../../../../assets/img/services-domain.svg';

export interface ServicesProps {
  
}
 
const Services: React.FC<ServicesProps> = (props) => {

  const servicesList: {
    name: string,
    description: string,
  }[] = [
    {
      name: 'Front end',
      description: 'Creacion de sitios web y aplicaciones SPA con tu diseño.'
    },
    {
      name: 'Back end',
      description: 'Automatización a medida para tu negocio y mejorar la productividad y reportes.'
    },
    {
      name: 'Mobile',
      description: 'Diseño y desarrollo de aplicaciones IOS y Android de acuerdo a tu necesidad.'
    },
    {
      name: 'Infraestructura',
      description: 'Asesoramiento en la mejor opción para el montaje, despliegue de tu desarrollo.'
    },
    {
      name: 'Pensar',
      description: 'Asesoramiento en la mejor opción para el montaje, despliegue de tu desarrollo.'
    },
    {
      name: 'Pensar',
      description: 'Asesoramiento en la mejor opción para el montaje, despliegue de tu desarrollo.'
    },
  ];

  const allServices = () => {
    return servicesList.map((s, i) =>
      <li>
        <div className="service">
          <figure>
            <img src={serviceImage(s.name)} alt="Website" className="icon" />
          </figure>
          <h3 className="title">{ s.name }</h3>
          <p className="description">{ s.description }</p>
        </div>
      </li>
    );
  }

  const serviceImage = (serviceName: string): string => {
    switch (serviceName) {
      case 'Front end':
        return serviceWebsiteImage;
      case 'Back end':
        return serviceBackImage;
      case 'Mobile':
        return servicePhoneImage;
      case 'Infraestructura':
        return serviceDomainImage;
      case 'Pensar':
        return serviceDomainImage;
      case 'Pensar':
        return serviceDomainImage;
      default:
        return serviceDomainImage;
    }
  }

  return (
    <section className="services">
      <header className="services-header">
        <h2 className="title">Te ofresco el mejor servicio de desarrollo.</h2>
        <p className="subtitle">Sigo siempre el mejor camino de trabajo, para ofrecerte profesionalismo al menor costo posible.</p>
      </header>
      <ul className="items">
        {allServices()}
      </ul>
    </section>
  );
}
 
export default React.memo(Services);