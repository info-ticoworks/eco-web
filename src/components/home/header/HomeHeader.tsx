import HomeHeaderContent from './HomeHeaderContent';
import HomeHeaderSwiper from './HomeHeaderSwiper';
import './home-header.css';

export default function HomeHeader() {
  return (
    <header className='overflow-hidden bg-eco-blue--dark' id='header'>
      <div className="relative w-full mx-auto">
        <HomeHeaderSwiper />
        <HomeHeaderContent />
      </div>
    </header>
  );
}