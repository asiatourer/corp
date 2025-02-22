import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-bottom">
                <div className="footer-container">
                    <p className="copyright">&copy; {new Date().getFullYear()} Asia Tourer. All rights reserved.</p>
                    <ul className="footer-links">
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/terms">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;