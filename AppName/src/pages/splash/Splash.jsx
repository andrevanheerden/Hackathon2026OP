import './Splash.css';
import Header from './components/Header/Header';
import DecorativeLine from './components/DecorativeLine/DecorativeLine';
import Logo from './components/Logo/Logo';
import RomanNumerals from './components/RomanNumerals/RomanNumerals';
import Subtitle from './components/Subtitle/Subtitle';
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';

function Splash() {
  return (
    <div className="splash-container">
      <Header />
      <div className="splash-content">
        <DecorativeLine />
        <Logo />
        <RomanNumerals />
        <Subtitle />
        <Button />
        <Footer />
        <DecorativeLine />
      </div>
    </div>
  );
}

export default Splash;
