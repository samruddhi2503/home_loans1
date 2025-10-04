import styles from './BottomFooter.module.css';

export default function BottomFooter() {
  return (
    <div className={styles.bottomFooter}>
      <span className={styles.copyrightText}>© 2025 Estra Finance. All rights reserved.</span>
      <div className={styles.footerLinks}>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookies</a>
      </div>
    </div>
  );
}
