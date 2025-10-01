'use client';
import { useState } from 'react';
import styles from './Footer.module.css';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleApplyNowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/apply-now');
  };

  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/login');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setSuccessMessage('');
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setSuccessMessage('Successfully joined');
      setEmail('');
      // Add API call here if needed
    } else {
      setSuccessMessage('Please enter a valid email');
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContentWrapper}>
        <div className={styles.leftSection}>
          <div className={styles.about}>
            <img
              src="/estra.png"
              alt="Estra Finance"
              className={styles.estra}
            />
            
    <img
      src="/estrafinance.png"  // replace with your 2nd image path
      alt="Second Logo"
      className={styles.estrafinance}
    />
            <div className={styles.horizontalLine}></div>
            <h4 className={styles.subHeading}>About Our App</h4>
            <div className={styles.linkColumns}>
              <ul className={styles.leftLinks}>
                <li>
                  <a href="#">How To Save</a>
                </li>
                <li>
                  <a href="#">How To Invest</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Navigation</a>
                </li>
              </ul>
              <ul className={styles.rightLinks}>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Loan Applications</a>
                </li>
                <li>
                  <a href="#">AI Home Loan Expert</a>
                </li>
              </ul>
            </div>
            <div className={styles.actions}>
              <span className={styles.separator}>|</span>
              <a href="#" onClick={handleApplyNowClick} className={styles.actionLink}>
                Apply Now
              </a>
              <span className={styles.separator}>|</span>
              <a href="#" onClick={handleLoginClick} className={styles.actionLink}>
                Login
              </a>
              <span className={styles.separator}>|</span>
            </div>
          </div>
          <div className={styles.legal}>
            © 2025 Estra Finance. All rights reserved.
            <div>
              <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a> |{' '}
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.newsletter}>
            <h3>Join our <span>Newsletter</span></h3>
            <form onSubmit={handleSubmit} className={styles.emailInputWrapper}>
              <input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={handleEmailChange}
                required
              />
              <button type="submit" className={styles.submitButton}>
                <b>→</b>
              </button>
              
            </form>
            {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
          </div>

          {/* New image container positioned at bottom right */}
          <div className={styles.footerImagesContainer}>
            <img src="/objects.png" alt="Image 1" className={styles.footerImage} />
            <img src="/guy2.png" alt="Image 2" className={styles.footerImage2} />
            <img src="/guy3.png" alt="Image 3" className={styles.footerImage3} />
            
          </div>
        </div>
      </div>
    </footer>
  );
}
