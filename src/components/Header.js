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
        <header className="navbar bg-base-100 shadow-md">
            {/* Navbar Start: Logo/Title */}
            <div className="navbar-start">
                <Link to="/" className="logo">
                    <img src="https://asiatourer.com/wp-content/uploads/2025/02/Untitled-design-1.png" alt="Asia Tourer Logo" />
                    <div className="logo-text">
                        <span>Asia Tourers</span>
                        <span>From Dreams To Memories</span>
                    </div>
                </Link>
                <div className="dropdown">
                    {/* Hamburger Menu for Mobile */}
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </label>
                    {/* Dropdown Menu for Mobile */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li><a href="#home">{t("nav.home")}</a></li>
                        <li><a href="#services">{t("nav.services")}</a></li>
                        <li><a href="#about">{t("nav.about")}</a></li>
                        <li><a href="#contact">{t("nav.contact")}</a></li>
                    </ul>
                </div>
            </div>

            {/* Navbar Center: Navigation (Hidden on Mobile) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="tel:+918087025555" className="contact-link">
                        <FiPhone className="icon" />
                        +91 808 702 5555
                    </a></li>
                    <li><span className="divider">|</span></li>
                    <li><a href="mailto:info@asiatourer.com" className="contact-link">
                        <FiMail className="icon" />
                        info@asiatourer.com
                    </a></li>
                    <li></li>
                </ul>

            </div>
            <div className="navbar-right hidden lg:flex">
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


    {/*
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
    */}
};

export default Header;