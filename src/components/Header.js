import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import './Header.css';

const Header = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-left">
                    <Link to="/" className="logo">
                        <img src="https://asiatourer.com/wp-content/uploads/2025/02/Untitled-design-1.png" alt="Asia Tourer Logo" />
                        <div className="logo-text">
                            <span>Asia Tourers</span>
                            <span>From Dreams To Memories</span>
                        </div>
                    </Link>
                </div>

                <div className="header-center">
                    <a href="tel:+918087025555" className="contact-link">
                        <FiPhone className="icon" />
                        +91 808 702 5555
                    </a>
                    <span className="divider">|</span>
                    <a href="mailto:info@asiatourer.com" className="contact-link">
                        <FiMail className="icon" />
                        info@asiatourer.com
                    </a>
                </div>

                <div className="header-right">
                    <span className="travel-guide-link">Follow Us</span>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="social-icon" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="social-icon" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                        </a>
                    </div>
                    <div className="language-switcher">
                    <select onChange={(e) => changeLanguage(e.target.value)} className="language-dropdown">
                        <option value="en">English</option>
                        <option value="hi">हिन्दी</option>
                        <option value="mr">मराठी</option>
                    </select>
                </div>
                </div>
               
            </div>

        </header>
    );
};

export default Header;