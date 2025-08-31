import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home: React.FC = () => {

  return (
    <main 
      className="parallax-bg"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(26, 41, 56, 0.425) 0%, rgba(44, 62, 80, 0.45) 100%), url('/images/homepage.jpg')`,
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
          marginBottom: '1.5rem',
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)'
        }}>Therapy for Adults Seeking Clarity, Peace, and Lasting Change</h2>
        
        <div style={{
          background: 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '15px',
          padding: '2rem 2.5rem',
          maxWidth: '750px',
          margin: '0 auto 2.5rem auto',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
        }}>
          <p style={{
            color: '#f0f7fa',
            fontSize: '1.05rem',
            lineHeight: '1.75',
            textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
            fontWeight: '300',
            fontStyle: 'italic',
            margin: 0,
            textAlign: 'center'
          }}>
            <span style={{ 
              fontSize: '1.3rem', 
              fontWeight: '400',
              fontFamily: 'Playfair Display, serif',
              color: '#ffffff'
            }}>Tshepo</span> means hope in the Southern Sotho tongue of South Africa, a land where I once sojourned for a year. 
            Hope is not a trifle, nor mere wishful fancy, but a grounding in the profound reality that there is a path to healing, 
            that changes, that restores us to peace with ourselves and to fellowship with others. Properly tended to, this hope 
            can grow into a sustaining wellspring of life. My desire for Tshepo is that it might serve as a place where hope 
            is remembered, nurtured, and at last carried forward into the life one deeply desires.
          </p>
        </div>
        
        <button 
          onClick={() => {
            document.querySelector('footer')?.scrollIntoView({ 
              behavior: 'smooth' 
            });
          }}
          className="cta-button"
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            font: 'inherit',
            cursor: 'pointer'
          }}
        >
          Start Your Journey
        </button>
      </section>
    </main>
  );
};

export default Home;