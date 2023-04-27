import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import styles from './page.module.css';

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <div className={styles['container']}>
        <div className={styles['sections']}>
          <h1>About Us</h1>
          <p>Coming Soon</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
