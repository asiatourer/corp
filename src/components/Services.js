import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Services.css';

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="services-section">
      <div className="services-overlay"></div>
      <div className="services-container">
        <div className="services-content">
          <h1 className="services-title">{t('services.title')}</h1>
          <div className="services-buttons">
            <Link to="/group-tours" className="tour-button group-tour">
              <span className="button-text">{t('services.groupTour')}</span>
            </Link>
            <Link to="/private-tours" className="tour-button private-tour">
              <span className="button-text">{t('services.privateTour')}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;