import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {/* <p>Malaysian Comfort Foods</p> */}
      </div>

      <div className={styles.center}>
        <div>
          <h2> Koo Koo Chicken </h2>
        </div>
        <div>茨廠街</div>
        <div>
          <p>Malaysian Comfort Foods</p>
        </div>
      </div>

      <div className={styles.grid}>
        <a href="/menu" className={styles.card}>
          <h2 className={inter.className}>
            Menu <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Check out our takeout menu</p>
        </a>

        <a href="" className={styles.card} target="_blank">
          <h2 className={inter.className}>
            We're located at <span>-&gt;</span>
          </h2>
          <p className={inter.className}>1698 86th St, Brooklyn NY 11214</p>
        </a>

        <a href="" className={styles.card}>
          <h2 className={inter.className}>
            About Us <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Learn More About Us</p>
        </a>
      </div>
    </main>
  );
}
