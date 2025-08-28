import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const profileRef = useScrollAnimation('animate-slide-left', { once: true });
  const contentRef = useScrollAnimation('animate-slide-right', { once: true });
  const philosophyRef = useScrollAnimation('animate-fade-scale', { once: true });
  const missionRef = useScrollAnimation('animate-fade-up', { once: true });

  return (
    <main 
      className="parallax-bg"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(44, 62, 80, 0.88) 0%, rgba(52, 73, 94, 0.85) 100%), url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000')`,
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
      {/* Hero Section */}
      <section style={{
        padding: '5rem 2rem 4rem 2rem',
        maxWidth: '1400px',
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
        }}>About Kevin</h1>
        
        <p style={{ 
          fontSize: '1.3rem', 
          color: '#e8f4f8',
          lineHeight: '1.8',
          maxWidth: '800px', 
          margin: '0 auto 3rem auto',
          textShadow: '1px 1px 4px rgba(0,0,0,0.2)',
          fontWeight: '300',
          animation: 'fadeInUp 1s ease-out'
        }}>
          A licensed therapist dedicated to helping adults navigate life's complexities with clarity, peace, and purpose.
        </p>
      </section>

      {/* Main Content with Image */}
      <section style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem 4rem 2rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '350px 1fr',
          gap: '5rem',
          alignItems: 'start',
          marginBottom: '6rem'
        }}
        className="about-main-grid">
          {/* Profile Image */}
          <div 
            ref={profileRef}
            className="animate-on-scroll"
            style={{
              width: '350px',
              height: '400px',
              borderRadius: '20px',
              backgroundImage: `url('/images/image2.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.2)',
              position: 'sticky',
              top: '2rem'
            }}
          />
          
          {/* Flowing Text Content */}
          <div 
            ref={contentRef}
            className="animate-on-scroll"
            style={{
              paddingTop: '1rem'
            }}>
            <div style={{
              marginBottom: '3rem',
              animation: 'fadeInUp 1.4s ease-out'
            }}>
              <p style={{
                fontSize: '1.3rem',
                color: '#e8f4f8',
                lineHeight: '1.8',
                marginBottom: '2rem',
                fontWeight: '300',
                textShadow: '1px 1px 4px rgba(0,0,0,0.2)'
              }}>
                With a warm, collaborative approach, Kevin creates a safe space where clients can explore their deepest 
                concerns while honoring both their personal story and spiritual foundation.
              </p>
              
              <p style={{
                fontSize: '1.3rem',
                color: '#e8f4f8',
                lineHeight: '1.8',
                marginBottom: '2rem',
                fontWeight: '300',
                textShadow: '1px 1px 4px rgba(0,0,0,0.2)'
              }}>
                Kevin understands the unique challenges faced by high-functioning adults who may appear successful 
                outwardly but struggle internally with anxiety, burnout, relational wounds, and questions of identity 
                and purpose.
              </p>
            </div>
            
            <div style={{
              borderLeft: '4px solid rgba(255, 255, 255, 0.3)',
              paddingLeft: '2.5rem',
              margin: '3rem 0',
              animation: 'fadeInUp 1.6s ease-out'
            }}>
              <p style={{
                fontSize: '1.4rem',
                color: '#ffffff',
                fontStyle: 'italic',
                lineHeight: '1.7',
                fontWeight: '300',
                textShadow: '2px 2px 8px rgba(0,0,0,0.3)'
              }}>
                "Kevin brings years of experience in helping individuals navigate complex emotional and spiritual challenges. 
                His educational background and professional training have equipped him with a deep understanding of both 
                psychological principles and spiritual growth."
              </p>
            </div>
          </div>
        </div>
        
        {/* Philosophy Section */}
        <div 
          ref={philosophyRef}
          className="animate-on-scroll"
          style={{
            textAlign: 'center',
            marginBottom: '5rem'
          }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            color: '#ffffff',
            marginBottom: '3rem',
            fontWeight: '400',
            textShadow: '2px 2px 10px rgba(0,0,0,0.3)'
          }}>Philosophy & Values</h2>
          
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            textAlign: 'left'
          }}
          className="philosophy-grid">
            <div>
              <p style={{
                fontSize: '1.25rem',
                color: '#d1e7f0',
                lineHeight: '1.8',
                marginBottom: '2rem',
                fontWeight: '300'
              }}>
                Kevin believes that true healing happens when we address the whole person—mind, heart, and spirit. 
                His approach honors the complexity of human experience while providing practical tools for lasting change.
              </p>
              
              <p style={{
                fontSize: '1.25rem',
                color: '#d1e7f0',
                lineHeight: '1.8',
                fontWeight: '300'
              }}>
                Central to Kevin's practice is the belief that every person has inherent worth and the capacity for growth, 
                regardless of their current struggles.
              </p>
            </div>
            
            <div>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                color: '#ffffff',
                fontSize: '1.6rem',
                marginBottom: '1.5rem',
                fontWeight: '500',
                textShadow: '1px 1px 6px rgba(0,0,0,0.3)'
              }}>Therapeutic Methods</h3>
              
              <p style={{
                fontSize: '1.1rem',
                color: '#b8d4e3',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                fontWeight: '300'
              }}>
                Drawing from <strong>Cognitive-Behavioral Therapy</strong>, <strong>mindfulness-based interventions</strong>, 
                <strong>spiritual integration</strong>, and <strong>solution-focused approaches</strong>.
              </p>
              
              <p style={{
                fontSize: '1.1rem',
                color: '#b8d4e3',
                lineHeight: '1.7',
                fontWeight: '300'
              }}>
                Each session is tailored to your unique needs, goals, and values, ensuring that therapy feels 
                meaningful and relevant to your life.
              </p>
            </div>
          </div>
        </div>
        
        {/* Mission Section */}
        <div 
          ref={missionRef}
          className="animate-on-scroll"
          style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '25px',
            padding: '4rem 5rem',
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '2.5rem',
              color: '#2c3e50',
              marginBottom: '2.5rem',
              fontWeight: '400'
            }}>Personal Mission</h2>
            
            <p style={{
              fontSize: '1.3rem',
              color: '#34495e',
              lineHeight: '1.8',
              marginBottom: '2.5rem',
              fontWeight: '300'
            }}>
              Kevin's mission is to walk alongside clients as they discover their path toward clarity, peace, 
              and authentic purpose. He understands that seeking therapy can feel vulnerable, especially for those 
              who are used to being the ones others turn to for strength.
            </p>
            
            <p style={{
              fontSize: '1.2rem',
              color: '#5a6c7d',
              lineHeight: '1.8',
              marginBottom: '3rem',
              fontStyle: 'italic'
            }}>
              Whether you're navigating a specific crisis or seeking deeper understanding of yourself, Kevin provides 
              the support, tools, and insights needed to move forward with confidence and peace.
            </p>
            
            <Link 
              to="/contact"
              style={{
                background: 'linear-gradient(145deg, #6b8e9e 0%, #8ba399 100%)',
                color: '#ffffff',
                fontSize: '1.1rem',
                fontWeight: '500',
                padding: '1.2rem 3rem',
                borderRadius: '50px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: '0 10px 30px rgba(107, 142, 158, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(107, 142, 158, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(107, 142, 158, 0.3)';
              }}
            >
              Begin Your Journey
            </Link>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
};

export default About;