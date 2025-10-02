'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './LendersCarousel.module.css';

const lenders = [
  { name: 'BPI', logo: '/bpi.png', width: 100, height: 50 },
  { name: 'BDO', logo: '/bdo.png', width: 100, height: 50 },
  { name: 'Chinabank', logo: '/chinabank.png', width: 100, height: 50 },
  { name: 'Security Bank', logo: '/securitybank.png', width: 100, height: 50 },
];

export default function LendersCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4; // number of logos visible at once
  const lendersCount = lenders.length;

  const prev = () => {
    // Move startIndex left, wrap around
    setStartIndex((prev) => (prev - 1 + lendersCount) % lendersCount);
  };

  const next = () => {
    // Move startIndex right, wrap around
    setStartIndex((prev) => (prev + 1) % lendersCount);
  };

  // Compute the logos to display in the current "window"
  const visibleLenders = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleLenders.push(lenders[(startIndex + i) % lendersCount]);
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Our Range Of Partnered Lenders</h2>
      <div className={styles.carouselWrapper}>
        <button onClick={prev} className={styles.arrowLeft} aria-label="Previous lenders">
          &#8249;
        </button>
        <div className={styles.logosRow}>
          {visibleLenders.map(({ name, logo, width, height }) => (
            <div key={name} className={styles.logoWrapper}>
              <Image
                src={logo}
                alt={`${name} logo`}
                width={width}
                height={height}
                className={styles.logo}
              />
            </div>
          ))}
        </div>
        <button onClick={next} className={styles.arrowRight} aria-label="Next lenders">
          &#8250;
        </button>
      </div>
    </section>
  );
}
