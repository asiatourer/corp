import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-overlay"></div>
      <div className="services-container">
        <div className="services-content">
          <h1 className="services-title">What kind of tour do you want to book?</h1>
          <div className="services-buttons">
            <Link to="/group-tours" className="tour-button group-tour">
              <span className="button-text">Group Tour</span>
            </Link>
            <Link to="/private-tours" className="tour-button private-tour">
              <span className="button-text">Private Tour</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;