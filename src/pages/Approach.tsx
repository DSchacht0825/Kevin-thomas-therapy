import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Approach: React.FC = () => {
  const principlesRef = useScrollAnimation('animate-fade-scale', { once: true });
  const philosophyRef = useScrollAnimation('animate-slide-right', { once: true });

  return (
    <main 
      className="parallax-bg"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(44, 62, 80, 0.9) 0%, rgba(52, 73, 94, 0.88) 100%), url('https://images.unsplash.com/photo-1426170042593-200f250dfdaf?q=80&w=2000')`,
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
      {/* Hero Section */}
      <section style={{
        padding: '5rem 2rem',
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
        }}>A Collaborative Journey</h1>
        
        <p style={{ 
          fontSize: '1.3rem', 
          color: '#e8f4f8',
          lineHeight: '1.8',
          maxWidth: '700px', 
          margin: '0 auto 4rem auto',
          textShadow: '1px 1px 4px rgba(0,0,0,0.2)',
          fontWeight: '300',
          animation: 'fadeInUp 1s ease-out'
        }}>
          Therapy is a partnership built on trust, understanding, and a shared commitment to your growth and healing.
        </p>
      </section>

      {/* Core Principles - Natural Flow */}
      <section 
        ref={principlesRef}
        className="animate-on-scroll"
        style={{
          maxWidth: '1000px',
          margin: '4rem auto 8rem auto',
          padding: '0 2rem',
          textAlign: 'left'
        }}>
        <div style={{
          lineHeight: '2',
          animation: 'fadeInUp 1.2s ease-out'
        }}>
          <p style={{
            fontSize: '1.4rem',
            color: '#e8f4f8',
            marginBottom: '3rem',
            fontWeight: '300',
            textShadow: '1px 1px 4px rgba(0,0,0,0.2)',
            textAlign: 'center',
            fontStyle: 'italic'
          }}>
            Our therapeutic approach is built on four foundational principles that guide every session:
          </p>
          
          <div style={{ marginBottom: '4rem' }}>
            <p style={{
              fontSize: '1.3rem',
              color: '#e8f4f8',
              lineHeight: '2.2',
              fontWeight: '300',
              textShadow: '1px 1px 4px rgba(0,0,0,0.2)'
            }}>
              Creating a <strong style={{ 
                color: '#ffffff', 
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.4rem',
                fontWeight: '500'
              }}>warm and safe</strong> space is fundamental—a judgment-free environment where you feel 
              heard, understood, and accepted exactly as you are. This foundation of safety allows for genuine 
              exploration and meaningful growth to unfold naturally.
            </p>
          </div>
          
          <div style={{ marginBottom: '4rem' }}>
            <p style={{
              fontSize: '1.3rem',
              color: '#e8f4f8',
              lineHeight: '2.2',
              fontWeight: '300',
              textShadow: '1px 1px 4px rgba(0,0,0,0.2)'
            }}>
              The work is deeply <strong style={{ 
                color: '#ffffff', 
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.4rem',
                fontWeight: '500'
              }}>collaborative</strong>—we work together as partners in your healing journey, 
              honoring your expertise on your own life while providing professional guidance and support. 
              Your insights, experiences, and intuition are valued and integrated into our therapeutic process.
            </p>
          </div>
          
          <div style={{ marginBottom: '4rem' }}>
            <p style={{
              fontSize: '1.3rem',
              color: '#e8f4f8',
              lineHeight: '2.2',
              fontWeight: '300',
              textShadow: '1px 1px 4px rgba(0,0,0,0.2)'
            }}>
              Every session focuses on the <strong style={{ 
                color: '#ffffff', 
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.4rem',
                fontWeight: '500'
              }}>practical</strong>—actionable strategies and real-world tools 
              you can use to create lasting change in your daily life. Therapy that stays in the office isn't 
              truly helpful; our work together translates into meaningful progress in your relationships, 
              work, and personal well-being.
            </p>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <p style={{
              fontSize: '1.3rem',
              color: '#e8f4f8',
              lineHeight: '2.2',
              fontWeight: '300',
              textShadow: '1px 1px 4px rgba(0,0,0,0.2)'
            }}>
              The approach is <strong style={{ 
                color: '#ffffff', 
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.4rem',
                fontWeight: '500'
              }}>holistic</strong>—addressing emotional, relational, and spiritual 
              dimensions of healing and growth. True wellness encompasses all aspects of your being and experience, 
              recognizing that lasting change happens when we tend to the whole person, not just isolated symptoms.
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
          margin: '5rem auto',
          padding: '0 2rem'
        }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          padding: '4rem 5rem',
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
          }}>Philosophy & Methods</h2>
          
          <p style={{
            fontSize: '1.25rem',
            color: '#34495e',
            marginBottom: '2.5rem',
            lineHeight: '1.8',
            fontWeight: '300'
          }}>
            True healing happens when we address the whole person—mind, heart, and spirit. 
            This approach honors the complexity of human experience while providing practical tools for lasting change.
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
              Drawing from <strong>Cognitive-Behavioral Therapy</strong>, <strong>mindfulness-based interventions</strong>, 
              <strong>spiritual integration</strong>, and <strong>solution-focused approaches</strong>, each session is tailored 
              to your unique needs, goals, and values.
            </p>
            
            <p style={{
              fontSize: '1.15rem',
              color: '#5a6c7d',
              lineHeight: '1.7',
              fontStyle: 'italic',
              marginBottom: '2.5rem'
            }}>
              Every person has inherent worth and the capacity for growth, regardless of their current struggles. 
              Together, we'll create a safe space to explore your deepest concerns without fear of judgment.
            </p>

            <Link 
              to="/contact"
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