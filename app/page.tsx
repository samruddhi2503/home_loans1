import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import LoanCalculator from './components/LoanCalculator/LoanCalculator';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import LendersCarousel from './components/LendersCarousel/LendersCarousel';
import Footer from './components/Footer/Footer';
import styles from './page.module.css'; // Adjust path and file name per your setup

export default function Home() {
  return (
    <>
      <Header />
  
      <Hero />
            <div className={styles.calculatorFloating}>
        <LoanCalculator />
      </div>
      <WhyChooseUs />
      <LendersCarousel />
      <Footer />
    </>
  );
}
