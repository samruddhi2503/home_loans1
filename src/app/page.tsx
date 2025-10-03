import MenuHeader from './components/MenuHeader/MenuHeader'; // New top menu
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import LoanCalculator from './components/LoanCalculator/LoanCalculator';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import LendersCarousel from './components/LendersCarousel/LendersCarousel';
import Footer from './components/Footer/Footer';
import styles from './page.module.css';

const isLoggedIn = false; // Use auth context/hook here

export default function Home() {
  // For menu header: true if not logged in, or logged in and on home page
  const showMenuHeader = !isLoggedIn || (isLoggedIn && typeof window !== "undefined" && window.location.pathname === "/");

  return (
    <>
  <MenuHeader visible={showMenuHeader} />
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
