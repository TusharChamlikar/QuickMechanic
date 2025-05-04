import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import LandingPage from './components/LandingPage';
import Services from './components/services';
import Contact from './components/contact';
import Login1 from './springcomponents/Login';
import About from './components/about';
import Display from './components/display';
import Footer from './components/footer';
import BookMechanic from './components/BookMechanic';
import Cost from './components/CostEstimation';
import Review from './components/Review';
import Map from './components/Map';
import Authentication from './backendrelated/Authentication';
import Profile from './components/Profile';
import Signup from './components/signup';
import ImageUpload from './components/ImageUpload';
import MusicAnalyticsLanding from './components/MusicAnalyticsData';

function Layout() {
  const location = useLocation();
  const isSignupPage = location.pathname === "/signup"; // Check if the current route is /signup
  
  return (
    <>
      {/* Hide Navbar only on Signup page */}
     <Navbar/>
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book-mechanic" element={<BookMechanic />} />
        <Route path="/cost-estimation" element={<Cost />} />
        <Route path="/reviews" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Authentication />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ai" element={<ImageUpload></ImageUpload>}/>
      </Routes>

      {/* Hide Map, Display, About, and Footer only on Signup page */}
      {!isSignupPage && <Map />}
      {!isSignupPage  && <Display />}
      {!isSignupPage  && <About />}
      {!isSignupPage  && <Footer />}

    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
