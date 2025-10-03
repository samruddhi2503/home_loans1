'use client';
import styles from './WhyChooseUs.module.css';
import Image from 'next/image';

interface Card {
  title: string;
  desc: string;
  imgSrc?: string;
  imgAlt?: string;
}

const leftCards: Card[] = [
  {
    title: 'See Your Best Loan Choices in Seconds',
    desc: 'Pick the loan that fits you best—fast! Our app shows you simple choices from the top banks.',
  },
  {
    title: '24/7 Loan Expert Ready to Help You Save',
    desc: 'With our AI expert, get the right answers day or night to make the best choices.',
  },
  {
    title: 'Home Loans Built For Property Investors',
    desc: 'Helps buy your first and future houses easily with our app.',
  },
  {
    title: 'Compare & Save',
    desc: 'Compare loan choices side by side with easy summaries to spot the best deals.',
  },
  {
    title: 'Money Saving Decisions Made Easy',
    desc: 'You get all the details you need, fast. See the good and bad of each loan in one place.',
  },
];

const rightCards: Card[] = [
  {
    title: 'Keep # of Results + Updated Regularly + Share',
    desc: 'Get fast responses and help anytime with our AI-powered loan expert.',
    imgSrc: '/bot.png',
    imgAlt: 'AI Home Loan Expert Chat',
  },
  {
    title: 'Help',
    desc: 'Hey Dantes! How can I help you with your loan today ?',
    imgSrc: '/bot.png',
    imgAlt: 'Loan comparison popup',
  },
  {
    title: 'Bank Comparison Table',
    desc: 'View side-by-side bank options and pick the best loan fit for you.',
    imgSrc: '/bdo.png',
    imgAlt: 'Bank comparison table',
  },
  {
    title: 'In-depth Home Loan Detail',
    desc: 'Detailed breakdown of interest rates, terms, and savings shown clearly.',
    imgSrc: '/bpi.png',
    imgAlt: 'Home loan details',
  },
  {
    title: 'Money Saving Decisions Made Easy',
    desc: 'You get all the details you need, fast. See the good and bad of each loan in one place.',
    imgSrc: '/yes.jpg',
    imgAlt: 'Money saving decisions',
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.fullSectionBackground}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Choose Us?</h2>
        <div className={styles.cardsContainer}>
          <div className={`${styles.cardsColumn} ${styles.left}`}>
            {leftCards.map(({ title, desc }, i) => (
              <div key={i} className={styles.card}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div className={`${styles.cardsColumn} ${styles.right}`}>
            {rightCards.map(({ title, desc, imgSrc, imgAlt }, i) => (
              <div key={i} className={styles.card}>
                {imgSrc && (
                  <Image
                    src={imgSrc}
                    alt={imgAlt ?? ''}
                    width={70} // Adjust image dimensions as needed
                    height={70}
                    className={styles.cardImage}
                    priority
                  />
                )}
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

