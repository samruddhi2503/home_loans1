'use client';
import { useState } from 'react';
import styles from './LoanCalculator.module.css';

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(10000000);

  const totalInterestSaved = 2000000;
  const monthlySavings = 5000;

  const handleLoanAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (!isNaN(val)) setLoanAmount(val);
  };

  return (
    <div className={styles.loanCalculator}>
      <h2 className={styles.header}>Desired Loan Amount</h2>
      <div className={styles.inputGroup}>
        <span className={styles.currencySymbol}>₱</span>
        <input
          type="number"
          value={loanAmount}
          onChange={handleLoanAmountChange}
          className={styles.input}
          min={0}
        />
      </div>
      <div className={styles.savingsPanel}>
        <div className={styles.savingsHeader}>You Could Save</div>
          <div className={styles.horizontalLine}></div> {/* New horizontal line here */}
        <div className={styles.savingsBottomRow}>
          <div className={styles.savingsItem}>
            <span className={styles.icon}>✔</span>
            <div>
              <span className={styles.amount}>₱{totalInterestSaved.toLocaleString()}</span>
              <p>Total interest</p>
            </div>
          </div>
          <div className={styles.verticalDivider}></div>
          <div className={styles.savingsItem}>
            <span className={styles.icon}>✔</span>
            <div>
              <span className={styles.amount}>₱{monthlySavings.toLocaleString()}</span>
              <p>Per Month</p>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.applyButton}>Apply Now</button>
    </div>
  );
}
