'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './LendersCarousel.module.css';

const lenders = [
  { name: 'BPI', logo: '/bpi.png' },
  { name: 'BDO', logo: '/bdo.png' },
  { name: 'Chinabank', logo: '/chinabank.png' },
  { name: 'Security Bank', logo: '/securitybank.png' },
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
          {visibleLenders.map(({ name, logo }) => (
            <div key={name} className={styles.logoWrapper}>
              <Image
                src={logo}
                alt={`${name} logo`}
                fill
                className={styles.logo}
                sizes="(max-width: 768px) 25vw, (max-width: 1024px) 20vw, 15vw"
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
