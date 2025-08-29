import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home: React.FC = () => {
  const overviewRef = useScrollAnimation('animate-fade-up', { once: true });

  return (
    <main 
      className="parallax-bg"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(26, 41, 56, 0.425) 0%, rgba(44, 62, 80, 0.45) 100%), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000')`,
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Hero Section */}
      <section className="hero" style={{ 
        background: 'transparent',
        backdropFilter: 'blur(3px)',
        position: 'relative',
        zIndex: 1,
        padding: '0.5rem 2rem 1rem 2rem',
        margin: '0 auto',
        maxWidth: '1200px'
      }}>
        <h2 style={{
          color: '#ffffff',
          textShadow: '2px 2px 8px rgba(0,0,0,0.4)',
          fontWeight: '300',
          letterSpacing: '1px',
          marginBottom: '0.5rem',
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)'
        }}>Therapy for Adults Seeking Clarity, Peace, and Lasting Change</h2>
        <Link to="/contact" className="cta-button">
          Start Your Journey
        </Link>
        
        <div className="hero-info" style={{
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.2)',
          marginTop: '0.8rem',
          padding: '1.5rem',
          borderRadius: '1rem'
        }}>
          <h3 style={{ marginBottom: '0.8rem', fontSize: '1.4rem' }}>Who I Work With</h3>
          <p style={{ marginBottom: '1.2rem', fontSize: '1rem', lineHeight: '1.5' }}>
            High-functioning adults in their 20s to 50s who are thoughtful, driven, and committed to growth. 
            Many carry faith or spirituality yet feel weighed down by old patterns or uncertainty about their next chapter.
          </p>
          
          <h3 style={{ marginBottom: '0.8rem', fontSize: '1.4rem' }}>My Approach</h3>
          <p style={{ marginBottom: '0.8rem', fontSize: '1rem', lineHeight: '1.5' }}>
            Warm. Collaborative. Practical. Together, we'll explore what holds you back, strengthen your sense of self, and move toward clarity, peace, and purpose.
          </p>
          
        </div>
      </section>

      <div className="container">
        {/* Overview Section */}
        <section 
          ref={overviewRef}
          className="animate-on-scroll"
          style={{ 
            padding: '5rem 2rem',
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#ffffff',
            marginBottom: '2rem',
            fontWeight: '400',
            textShadow: '2px 2px 10px rgba(0,0,0,0.3)',
            animation: 'fadeInUp 1s ease-out'
          }}>Your Path to Healing and Growth</h2>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#e8f4f8',
            lineHeight: '1.8',
            maxWidth: '900px', 
            margin: '0 auto 4rem auto',
            textShadow: '1px 1px 4px rgba(0,0,0,0.2)',
            fontWeight: '300',
            animation: 'fadeInUp 1.2s ease-out'
          }}>
            Therapy is a collaborative journey toward understanding yourself more deeply, healing from past wounds, 
            and developing the tools you need to create lasting positive change in your life.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Home;