import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home: React.FC = () => {
  const overviewRef = useScrollAnimation('animate-fade-up', { once: true });
  const exploreRef = useScrollAnimation('animate-slide-left', { once: true });
  const understandRef = useScrollAnimation('animate-fade-scale', { once: true });
  const connectRef = useScrollAnimation('animate-slide-right', { once: true });

  return (
    <main 
      className="parallax-bg"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(26, 41, 56, 0.85) 0%, rgba(44, 62, 80, 0.9) 100%), url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000')`,
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
        zIndex: 1
      }}>
        <h2 style={{
          color: '#ffffff',
          textShadow: '2px 2px 8px rgba(0,0,0,0.4)',
          fontWeight: '300',
          letterSpacing: '1px'
        }}>Therapy for Adults Seeking Clarity, Peace, and Lasting Change</h2>
        <p className="hero-subtext" style={{
          color: '#e8f4f8',
          textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
          fontWeight: '300'
        }}>
          You may look successful on the outside, but inside you feel stuck—emotionally, relationally, or spiritually. 
          Whether you're wrestling with anxiety, burnout, or questions of identity and purpose, you don't have to navigate it alone.
        </p>
        <Link to="/contact" className="cta-button">
          Start Your Journey
        </Link>
        
        <div className="hero-info" style={{
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.2)'
        }}>
          <h3>Who I Work With</h3>
          <p>
            I work with high-functioning adults in their 20s to 50s who are thoughtful, driven, and deeply committed to growth. 
            Many carry a foundation of faith or spirituality yet feel weighed down by old patterns, relational wounds, or uncertainty about their next chapter.
          </p>
          
          <h3>My Approach</h3>
          <p>
            Warm. Collaborative. Practical. Together, we'll explore what holds you back, strengthen your sense of self, and move toward clarity, peace, and purpose.
          </p>
          
          <Link to="/about" className="learn-more-link">
            Learn More About Me →
          </Link>
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
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            marginTop: '4rem',
            padding: '0 1rem'
          }}>
            <div ref={exploreRef} className="animate-on-scroll" style={{ textAlign: 'left' }}>
              <h3 style={{ 
                fontFamily: 'Playfair Display, serif',
                color: '#ffffff', 
                fontSize: '1.8rem',
                marginBottom: '1rem',
                textShadow: '1px 1px 6px rgba(0,0,0,0.3)'
              }}>Explore</h3>
              <p style={{ 
                color: '#d1e7f0',
                fontSize: '1.1rem',
                lineHeight: '1.7',
                marginBottom: '1.5rem'
              }}>
                Discover what you can expect from therapy and how it can support your unique journey through life's challenges.
              </p>
              <Link to="/expectations" style={{
                color: '#4a9bd4',
                fontSize: '1.05rem',
                textDecoration: 'none',
                borderBottom: '2px solid transparent',
                transition: 'all 0.3s',
                fontWeight: '500'
              }} 
              onMouseEnter={(e) => {
                e.currentTarget.style.borderBottom = '2px solid #4a9bd4';
                e.currentTarget.style.color = '#6bb3e0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderBottom = '2px solid transparent';
                e.currentTarget.style.color = '#4a9bd4';
              }}>
                Learn what to expect →
              </Link>
            </div>
            
            <div ref={understandRef} className="animate-on-scroll" style={{ textAlign: 'left' }}>
              <h3 style={{ 
                fontFamily: 'Playfair Display, serif',
                color: '#ffffff', 
                fontSize: '1.8rem',
                marginBottom: '1rem',
                textShadow: '1px 1px 6px rgba(0,0,0,0.3)'
              }}>Understand</h3>
              <p style={{ 
                color: '#d1e7f0',
                fontSize: '1.1rem',
                lineHeight: '1.7',
                marginBottom: '1.5rem'
              }}>
                Learn about the therapeutic approach and evidence-based methods used to support your personal growth.
              </p>
              <Link to="/approach" style={{
                color: '#4a9bd4',
                fontSize: '1.05rem',
                textDecoration: 'none',
                borderBottom: '2px solid transparent',
                transition: 'all 0.3s',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderBottom = '2px solid #4a9bd4';
                e.currentTarget.style.color = '#6bb3e0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderBottom = '2px solid transparent';
                e.currentTarget.style.color = '#4a9bd4';
              }}>
                Explore the approach →
              </Link>
            </div>
            
            <div ref={connectRef} className="animate-on-scroll" style={{ textAlign: 'left' }}>
              <h3 style={{ 
                fontFamily: 'Playfair Display, serif',
                color: '#ffffff', 
                fontSize: '1.8rem',
                marginBottom: '1rem',
                textShadow: '1px 1px 6px rgba(0,0,0,0.3)'
              }}>Connect</h3>
              <p style={{ 
                color: '#d1e7f0',
                fontSize: '1.1rem',
                lineHeight: '1.7',
                marginBottom: '1.5rem'
              }}>
                Take the first step toward healing with a confidential consultation tailored to your needs.
              </p>
              <Link to="/contact" style={{
                color: '#4a9bd4',
                fontSize: '1.05rem',
                textDecoration: 'none',
                borderBottom: '2px solid transparent',
                transition: 'all 0.3s',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderBottom = '2px solid #4a9bd4';
                e.currentTarget.style.color = '#6bb3e0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderBottom = '2px solid transparent';
                e.currentTarget.style.color = '#4a9bd4';
              }}>
                Begin your journey →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;