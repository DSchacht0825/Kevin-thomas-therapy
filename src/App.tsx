import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileMenu from './MobileMenu';
import Home from './pages/Home';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f3f0' }}>
      <MobileMenu />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;