import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">snthz</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about"
                           className='footer__link'>About</a>

                    </li>
                    <li>
                        <a href="#skills"
                           className='footer__link'>Skills</a>

                    </li>
                    <li>
                        <a href="#qualification"
                           className='footer__link'>Qualification</a>

                    </li>
                    <li>
                        <a href="#contact"
                           className='footer__link'>Contact</a>

                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.instagram.com/axlsntz/" className="home__social-icon" target="_blank">
                        <i className="bx bxl-instagram footer__social-link"></i>
                    </a>
                    <a href="https://www.facebook.com/fallenxl.hn" className="home__social-icon" target="_blank">
                        <i className="bx bxl-facebook footer__social-link"></i>
                    </a>
                    <a href="https://twitter.com/axlsnthz" className="home__social-icon" target="_blank">
                        <i className="bx bxl-twitter footer__social-link"></i>
                    </a>
                    <a href="https://github.com/snthz?tab=repositories" className="home__social-icon" target="_blank">
                        <i className="ui uil-github-alt footer__social-link"></i>
                    </a>
                </div>
                <span className="footer__copy">Fallen. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer