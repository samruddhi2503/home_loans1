'use client';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.stats}>
        <div><strong><b>7,000,000</b></strong><br />In potential savings</div>
        <span className={styles.separator}>|</span>
        <div><img src="/logo.png" alt="Platform Logo" className={styles.logo} /></div>
        <span className={styles.separator}>|</span>
        <div>
          <strong><b>15 Minutes</b></strong><br />To apply online
        </div>
         <span className={styles.separator}>|</span>
        <div>
          <strong><b>Best Banks</b></strong><br />In The Philippines
        </div>
      </div>
                  </header>
 
  );
}
