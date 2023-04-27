import styles from '../styles/Footer.module.css';
// SVG imports
import Logo from '../../public/kookoo-logo-svg.svg';
import { FaFacebook, FaInstagram, FaGoogle, FaPhoneAlt } from 'react-icons/fa';
import Image from 'next/image';

import EmailSubscribeForm from './EmailSubscribeForm';

const Footer = () => {
  return (
    <>
      <footer className={styles['footer']}>
        <div className={styles['container']}>
          <div className={styles['even-columns']}>
            <div>
              <div className={styles['logo-container']}>
                <Image priority src={Logo} alt="Koo Koo Chicken Logo" />
              </div>
              <ul
                className={styles['social-media']}
                role="list"
                area-label="social media links"
              >
                <li>
                  <a href="instagram.com">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="instagram.com">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="google.com">
                    <FaGoogle />
                  </a>
                </li>
                <li>
                  <a href="tel:718-827-1698">
                    <FaPhoneAlt />
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles['footer-nav-wrapper']}>
              <nav className={styles['primary-footer-nav']}>
                <ul className={styles['flow']} aria-label="Footer" role="list">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/catering">Catering</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/privacy-policy">Privacy Policy</a>
                  </li>
                </ul>
              </nav>
            </div>
            <EmailSubscribeForm location="footer" />
            {/* <div className={styles['primary-footer-form']}>
              <form>
                <p>Subscribe to our newsletter</p>
                <input className={styles['email-input']} type="email"></input>
                <button className={styles['button']}>Go</button>
              </form>
            </div> */}
          </div>
        </div>
        <div className={styles['legal']}>
          <p>Copyright 2023. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
