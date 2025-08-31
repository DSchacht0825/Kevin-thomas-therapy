import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Approach: React.FC = () => {
  const principlesRef = useScrollAnimation('animate-fade-scale', { once: true });
  const philosophyRef = useScrollAnimation('animate-slide-right', { once: true });
  
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main 
      className="parallax-bg"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(44, 62, 80, 0.45) 0%, rgba(52, 73, 94, 0.44) 100%), url('https://images.unsplash.com/photo-1426170042593-200f250dfdaf?q=80&w=2000')`,
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
      {/* Hero Section */}
      <section style={{
        padding: '5rem 2rem 3rem',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          color: '#ffffff',
          marginBottom: '2rem',
          fontWeight: '400',
          textShadow: '2px 2px 10px rgba(0,0,0,0.3)',
          animation: 'fadeInUp 0.8s ease-out'
        }}>My Approach to Therapy</h1>
        
        <p style={{ 
          fontSize: '1.3rem', 
          color: '#e8f4f8',
          lineHeight: '1.8',
          maxWidth: '700px', 
          margin: '0 auto 3rem auto',
          textShadow: '1px 1px 4px rgba(0,0,0,0.2)',
          fontWeight: '300',
          animation: 'fadeInUp 1s ease-out'
        }}>
          I believe therapy is a partnership where we work together toward your growth and healing.
        </p>
      </section>

      {/* Two Column Section with Image and Principles */}
      <section 
        ref={principlesRef}
        className="animate-on-scroll"
        style={{
          maxWidth: '1200px',
          margin: '2rem auto 4rem auto',
          padding: '0 2rem'
        }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '350px 1fr',
          gap: '3rem',
          alignItems: 'center',
          animation: 'fadeInUp 1.2s ease-out'
        }}>
          {/* Left Column - Kevin's Photo */}
          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '100%',
              maxWidth: '320px',
              height: '400px',
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.35)',
              border: '5px solid rgba(255,255,255,0.95)',
              animation: 'fadeInUp 0.6s ease-out'
            }}>
              <img 
                src="/images/image-2.jpg" 
                alt="Kevin Schacht"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div style={{
            textAlign: 'left'
          }}>
            <p style={{
              fontSize: '1.2rem',
              color: '#e8f4f8',
              lineHeight: '1.9',
              fontWeight: '300',
              textShadow: '1px 1px 4px rgba(0,0,0,0.2)',
              marginBottom: '1.8rem'
            }}>
              I offer a judgment-free environment to explore your concerns, troubles, dreams, and questions. 
              We will be on this journey together: I particularly like working with anxiety, stress, and career challenges. 
              I also enjoy processing through spiritual questions and angst.
            </p>
            
            <p style={{
              fontSize: '1.2rem',
              color: '#e8f4f8',
              lineHeight: '1.9',
              fontWeight: '300',
              textShadow: '1px 1px 4px rgba(0,0,0,0.2)',
              marginBottom: '1.8rem'
            }}>
              Together, we will identify, clarify, and process emotions and ideas that are causing you discomfort. 
              Just as importantly, we'll set goals together so you can effectively understand the progress you've made.
            </p>
            
            <p style={{
              fontSize: '1.2rem',
              color: '#e8f4f8',
              lineHeight: '1.9',
              fontWeight: '300',
              textShadow: '1px 1px 4px rgba(0,0,0,0.2)',
              marginBottom: '1.8rem'
            }}>
              In our sessions you'll get the aid of an unbiased and professional perspective to gain new insight 
              into your life, circumstances, and relationships. Our work will always utilize genuine compassion, 
              transparent honesty, and authentic empathy.
            </p>
            
            <p style={{
              fontSize: '1.2rem',
              color: '#e8f4f8',
              lineHeight: '1.9',
              fontWeight: '300',
              textShadow: '1px 1px 4px rgba(0,0,0,0.2)'
            }}>
              I look forward to hearing your story, discovering your strengths, and navigating our way through 
              the path you find yourself on.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section 
        ref={philosophyRef}
        className="animate-on-scroll"
        style={{
          maxWidth: '1200px',
          margin: '3rem auto 5rem',
          padding: '0 2rem'
        }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          padding: '3rem 4rem',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '2.5rem',
            color: '#2c3e50',
            marginBottom: '2.5rem',
            fontWeight: '400'
          }}>How I Work</h2>
          
          <p style={{
            fontSize: '1.25rem',
            color: '#34495e',
            marginBottom: '2.5rem',
            lineHeight: '1.8',
            fontWeight: '300'
          }}>
            I believe true healing happens when we address the whole person—mind, heart, and spirit. 
            My approach honors your unique experience while providing practical tools for lasting change.
          </p>
          
          <div style={{
            borderTop: '1px solid #e0e6ed',
            paddingTop: '2.5rem',
            marginTop: '2.5rem'
          }}>
            <p style={{
              fontSize: '1.15rem',
              color: '#5a6c7d',
              lineHeight: '1.7',
              marginBottom: '2rem'
            }}>
              I draw from <strong>CBT</strong>, <strong>mindfulness practices</strong>, 
              <strong>spiritual integration</strong>, and <strong>solution-focused therapy</strong> to tailor 
              each session to your specific needs and goals.
            </p>
            
            <p style={{
              fontSize: '1.15rem',
              color: '#5a6c7d',
              lineHeight: '1.7',
              fontStyle: 'italic',
              marginBottom: '2.5rem'
            }}>
              I believe you have inherent worth and the capacity for growth, no matter what you're facing. 
              I'm here to provide a safe space where you can explore your concerns without fear of judgment.
            </p>

            <Link 
              to="/faqs"
              style={{
                background: 'linear-gradient(145deg, #6b8e9e 0%, #8ba399 100%)',
                color: '#ffffff',
                fontSize: '1.1rem',
                fontWeight: '500',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(107, 142, 158, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
};

export default Approach;