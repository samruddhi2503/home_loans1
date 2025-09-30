'use client';
import { useState } from 'react';
import styles from './LoanCalculator.module.css';

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(10000000);

  const totalInterestSaved = loanAmount * 0.2; // 20% assumed saved interest
  const monthlySavings = 5000;

  const handleLoanAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (!isNaN(val)) {
      setLoanAmount(val);
    }
  };

  return (
    <>
      <h2 className={styles.header}>Desired Loan Amount</h2>

      <div className={styles.inputGroup}>
        <span className={styles.currencySymbol}>₱</span>
        <input
          type="number"
          value={loanAmount}
          onChange={handleLoanAmountChange}
          className={styles.input}
        />
      </div>

      <div className={styles.savingsPanel}>
        <div className={styles.savingsItem}>
          <div className={styles.icon}>✔</div>
          <div>
            <span className={styles.amount}>₱{totalInterestSaved.toLocaleString()}</span>
            <p>Total interest</p>
          </div>
        </div>

        <div className={styles.verticalDivider}></div>

        <div className={styles.savingsItem}>
          <div className={styles.icon}>✔</div>
          <div>
            <span className={styles.amount}>₱{monthlySavings.toLocaleString()}</span>
            <p>Per Month</p>
          </div>
        </div>
      </div>
    </>
  );
}
