'use client';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.stats}>
        <div><b>7,000,000</b><br />In potential savings</div>
        <span className={styles.separator}></span>
        <div><img src="/badge.png" alt="Platform Logo" className={styles.badge} /></div>
        <span className={styles.separator}></span>
        <div>
          <b>15 Minutes</b><br />To apply online
        </div>
         <span className={styles.separator}></span>
        <div>
          <b>Best Banks</b><br />In The Philippines
        </div>
      </div>
                  </header>
 
  );
}
