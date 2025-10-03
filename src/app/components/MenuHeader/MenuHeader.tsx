'use client';
import React from 'react';
import Image from 'next/image';
import styles from './MenuHeader.module.css';

interface MenuHeaderProps {
  visible: boolean;
}

const MenuHeader: React.FC<MenuHeaderProps> = ({ visible }) => {
  if (!visible) return null;
  return (
    <header className={styles.menuHeader}>
      <div className={styles.logoSection}>
        {/* Two images side by side */}
        <div className={styles.imageWrapper}>
          <Image src="/estra.png" alt="Logo 1" width={40} height={35} />
          <Image src="/estrafinance.png" alt="Logo 2" width={190} height={35} />
        </div>
      </div>
      <nav className={styles.navSection}>
        <a href="/" className={styles.active}>HOME</a>
        <a href="/loan-applications" className={styles.active1}>LOAN APPLICATIONS</a>
        <a href="/features" className={styles.active2}>FEATURES</a>
        <a href="/ai-home-loan-expert" className={styles.active3}>AI HOME LOAN EXPERT</a>
      </nav>
      <div className={styles.rightSection}>
        <div className={styles.notification}>
          <span className={styles.bellIcon} />
     
        </div>
        <span className={styles.divider} />
        <a href="/apply" className={styles.applyNow}>APPLY NOW</a>
        <span className={styles.divider} />
        <a href="/login" className={styles.login}>LOGIN</a>
        <span className={styles.divider} />
      </div>
    </header>
  );
};

export default MenuHeader;
