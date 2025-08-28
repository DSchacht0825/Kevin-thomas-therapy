import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Expectations: React.FC = () => {
  const safeSpaceRef = useScrollAnimation('animate-slide-left', { once: true });
  const areasRef = useScrollAnimation('animate-fade-scale', { once: true });
  const journeyRef = useScrollAnimation('animate-slide-right', { once: true });
  const ctaRef = useScrollAnimation('animate-fade-up', { once: true });

  return (
    <main 
      className="parallax-bg"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(44, 62, 80, 0.9) 0%, rgba(52, 73, 94, 0.88) 100%), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000')`,
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
        }}>What to Expect</h1>
        
        <p style={{ 
          fontSize: '1.3rem', 
          color: '#e8f4f8',
          lineHeight: '1.8',
          maxWidth: '800px', 
          margin: '0 auto 4rem auto',
          textShadow: '1px 1px 4px rgba(0,0,0,0.2)',
          fontWeight: '300',
          animation: 'fadeInUp 1s ease-out'
        }}>
          Therapy is a collaborative journey toward understanding yourself more deeply and creating lasting positive change.
        </p>
      </section>

      {/* Main Content - Flowing Design */}
      <section style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 2rem 4rem 2rem'
      }}>
        {/* What You Can Expect */}
        <div 
          ref={safeSpaceRef}
          className="animate-on-scroll"
          style={{
            marginBottom: '6rem'
          }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            color: '#ffffff',
            marginBottom: '3rem',
            textAlign: 'center',
            fontWeight: '400',
            textShadow: '2px 2px 10px rgba(0,0,0,0.3)'
          }}>A Safe Space for Growth</h2>
          
          <div style={{
            lineHeight: '2.2',
            textAlign: 'left'
          }}>
            <p style={{
              fontSize: '1.3rem',
              color: '#e8f4f8',
              marginBottom: '3rem',
              fontWeight: '300',
              textShadow: '1px 1px 4px rgba(0,0,0,0.2)'
            }}>
              You can expect <strong style={{ 
                color: '#ffffff', 
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.4rem',
                fontWeight: '500'
              }}>a safe, grounded space to be fully honest</strong>—no judgment, no pressure to be "fixed," 
              just a place where you can explore what's really going on beneath the surface. This foundation 
              of trust allows for authentic exploration and meaningful breakthroughs.
            </p>
            
            <p style={{
              fontSize: '1.3rem',
              color: '#e8f4f8',
              marginBottom: '3rem',
              fontWeight: '300',
              textShadow: '1px 1px 4px rgba(0,0,0,0.2)'
            }}>
              Our work together will <strong style={{ 
                color: '#ffffff', 
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.4rem',
                fontWeight: '500'
              }}>honor both your personal story and your spiritual foundation</strong>. 
              Whether faith is central to your life or you're exploring questions of meaning and purpose, 
              your beliefs and values are respected and integrated into our therapeutic process.
            </p>
            
            <p style={{
              fontSize: '1.3rem',
              color: '#e8f4f8',
              marginBottom: '3rem',
              fontWeight: '300',
              textShadow: '1px 1px 4px rgba(0,0,0,0.2)'
            }}>
              Every session focuses on <strong style={{ 
                color: '#ffffff', 
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.4rem',
                fontWeight: '500'
              }}>practical steps for lasting change</strong> in the areas that matter most to you. 
              Together, we'll identify concrete strategies and tools that you can apply in your daily life, 
              relationships, and personal growth journey.
            </p>
          </div>
        </div>

        {/* Areas of Focus - Flowing Text */}
        <div 
          ref={areasRef}
          className="animate-on-scroll"
          style={{
            marginBottom: '6rem'
          }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            color: '#ffffff',
            marginBottom: '3rem',
            textAlign: 'center',
            fontWeight: '400',
            textShadow: '2px 2px 10px rgba(0,0,0,0.3)'
          }}>Areas We Often Explore Together</h2>
          
          <p style={{
            fontSize: '1.25rem',
            color: '#e8f4f8',
            lineHeight: '2.2',
            fontWeight: '300',
            textShadow: '1px 1px 4px rgba(0,0,0,0.2)',
            textAlign: 'left'
          }}>
            Many clients find support working through <strong style={{ color: '#ffffff' }}>anxiety and stress management</strong>, 
            navigating <strong style={{ color: '#ffffff' }}>burnout and career transitions</strong>, addressing 
            <strong style={{ color: '#ffffff' }}>relationship challenges</strong>, exploring questions of 
            <strong style={{ color: '#ffffff' }}>identity and purpose</strong>, deepening 
            <strong style={{ color: '#ffffff' }}>faith and spiritual growth</strong>, and finding stability through 
            <strong style={{ color: '#ffffff' }}>major life transitions</strong>. Every person's journey is unique, 
            and we'll tailor our approach to your specific needs, goals, and circumstances.
          </p>
        </div>

        {/* Therapy Process - Flowing Narrative */}
        <div 
          ref={journeyRef}
          className="animate-on-scroll"
          style={{
            marginBottom: '6rem'
          }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            color: '#ffffff',
            marginBottom: '3rem',
            textAlign: 'center',
            fontWeight: '400',
            textShadow: '2px 2px 10px rgba(0,0,0,0.3)'
          }}>The Journey Forward</h2>
          
          <div style={{
            lineHeight: '2.2',
            textAlign: 'left'
          }}>
            <p style={{
              fontSize: '1.25rem',
              color: '#e8f4f8',
              marginBottom: '2.5rem',
              fontWeight: '300',
              textShadow: '1px 1px 4px rgba(0,0,0,0.2)'
            }}>
              We begin with an <strong style={{ color: '#ffffff' }}>initial consultation</strong> where we'll discuss 
              your goals, answer any questions, and determine if we're a good fit for working together. This conversation 
              helps ensure that therapy feels right for you from the start.
            </p>
            
            <p style={{
              fontSize: '1.25rem',
              color: '#e8f4f8',
              marginBottom: '2.5rem',
              fontWeight: '300',
              textShadow: '1px 1px 4px rgba(0,0,0,0.2)'
            }}>
              Our early sessions focus on <strong style={{ color: '#ffffff' }}>assessment and planning</strong>—exploring 
              your history, understanding current challenges, and creating a personalized treatment plan that aligns 
              with your values and aspirations.
            </p>
            
            <p style={{
              fontSize: '1.25rem',
              color: '#e8f4f8',
              marginBottom: '2.5rem',
              fontWeight: '300',
              textShadow: '1px 1px 4px rgba(0,0,0,0.2)'
            }}>
              In <strong style={{ color: '#ffffff' }}>active therapy</strong>, we work together using evidence-based 
              techniques tailored specifically to your needs and goals. Sessions are collaborative, with regular 
              check-ins to ensure you're experiencing meaningful progress and that our approach continues to serve you well.
            </p>
          </div>
        </div>

        {/* Session Details - Subtle Information */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem',
          animation: 'fadeInUp 1.8s ease-out'
        }}>
          <p style={{
            fontSize: '1.1rem',
            color: '#b8d4e3',
            fontStyle: 'italic',
            fontWeight: '300',
            lineHeight: '1.8'
          }}>
            Sessions are typically 50 minutes, meeting weekly and adjusted based on your needs.<br/>
            Both in-person and secure video sessions are available for your convenience.
          </p>
        </div>

        {/* Call to Action */}
        <div 
          ref={ctaRef}
          className="animate-on-scroll"
          style={{
            textAlign: 'center'
          }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '25px',
            padding: '4rem 5rem',
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '2.5rem',
              color: '#2c3e50',
              marginBottom: '2rem',
              fontWeight: '400'
            }}>Ready to Take the Next Step?</h2>
            
            <p style={{
              fontSize: '1.2rem',
              color: '#5a6c7d',
              lineHeight: '1.8',
              marginBottom: '3rem',
              fontWeight: '300'
            }}>
              Start your journey toward healing and growth with a confidential consultation 
              where we can explore how therapy might support your unique path forward.
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
              Schedule Your Consultation
            </Link>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
};

export default Expectations;