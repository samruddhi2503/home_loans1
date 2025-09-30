'use client';
import { useState } from 'react';
import styles from './LendersCarousel.module.css';

const lenders = [
  { name: 'BPI', logo: '/bpi.svg' },
  { name: 'BDO', logo: '/logos/bdo.svg' },
  { name: 'Chinabank', logo: '/chinabank.png' },
  { name: 'Security Bank', logo: '/securitybank.png' },
];

export default function LendersCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const showCount = 4;  // Show all logos

  const prev = () => {
    setStartIndex(prev => (prev <= 0 ? lenders.length - 1 : prev - 1));
  };

  const next = () => {
    setStartIndex(prev => (prev >= lenders.length - 1 ? 0 : prev + 1));
  };

  // For simplicity, showing all logos here without slicing

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Our Range Of Partnered Lenders</h2>
      <div className={styles.logosRow}>
        {lenders.map(({ name, logo }, i) => (
          <div key={name} className={styles.logoWithArrow}>
            {name === 'BPI' && (
              <button onClick={prev} className={styles.arrowLeft}>
                &#8249;
              </button>
            )}
            <div className={styles.logoWrapper}>
              <img src={logo} alt={`${name} logo`} className={styles.logo} />
            </div>
            {name === 'Security Bank' && (
              <button onClick={next} className={styles.arrowRight}>
                &#8250;
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
