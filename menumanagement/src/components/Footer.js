import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <>
      <footer className={styles['container']}>
        <div className={styles['footer-links-1']}>
          <h2>Koo Koo Chicken</h2>
          {/* <ul>
            <li>Home</li>
            <li>Menu</li>
          </ul> */}
        </div>
        <div className={styles['footer-links-2']}>
          Malaysian Restaurant in Brooklyn NY
        </div>
        <div className={styles['footer-links-3']}>some short description</div>
        <p>&copy; 2021 legal</p>
      </footer>
    </>
  );
};

export default Footer;
