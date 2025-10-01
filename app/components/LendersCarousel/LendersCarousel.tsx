'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './LendersCarousel.module.css';

const lenders = [
  { name: 'BPI', logo: '/bpi.png', width: 100, height: 50 },
  { name: 'BDO', logo: '/bdo.png', width: 100, height: 50 },
  { name: 'Chinabank', logo: '/chinabank.png', width: 100, height: 50 },
  { name: 'Security Bank', logo: '/securitybank.png', width: 400, height: 400 },
];

export default function LendersCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((prev) => (prev <= 0 ? lenders.length - 1 : prev - 1));
  };

  const next = () => {
    setStartIndex((prev) => (prev >= lenders.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Our Range Of Partnered Lenders</h2>
      <div className={styles.logosRow}>
        {lenders.map(({ name, logo, width, height }) => (
          <div key={name} className={styles.logoWithArrow}>
            {name === 'BPI' && (
              <button onClick={prev} className={styles.arrowLeft}>
                &#8249;
              </button>
            )}
            <div className={styles.logoWrapper}>
              <Image
                src={logo}
                alt={`${name} logo`}
                width={width}
                height={height}
                className={styles.logo}
              />
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
