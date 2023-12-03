import logo from './logo.svg';
import CardSection from './pages/CardSection';
import Courses from './pages/Courses';
import Footer from './pages/Footer';
import Hero from './pages/Hero';
import Navbar from './pages/Navbar';
import Statistics from './pages/Statistics';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <CardSection/>
      <Statistics/>
      <Courses/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
