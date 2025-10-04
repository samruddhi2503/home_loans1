'use client';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    
    <section className={styles.hero}>
      <div className={styles.text}>
        <p className={styles.smallTxt}>SAVE BIG WITH THE</p>
        <h1 className={styles.title}>Perfect Home Loan <br></br>Made Just For You</h1>
        <p className={styles.subtitle}>Don't Overpay On Your Home Loan!</p>
      </div>
      <div className={styles.imageWrapper}>
        <img src="happycouple1.png" alt="Happy couple with money" className={styles.image} />
      </div>
    </section>
  );
}
