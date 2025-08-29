import React from 'react';
import ScreeningForm from '../components/ScreeningForm';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const contactInfoRef = useScrollAnimation('animate-slide-left', { once: true });
  const screeningFormRef = useScrollAnimation('animate-slide-right', { once: true });
  const faqRef = useScrollAnimation('animate-fade-up', { once: true });

  return (
    <main 
      className="parallax-bg"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(52, 73, 94, 0.92) 0%, rgba(44, 62, 80, 0.88) 100%), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000')`,
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
      {/* Hero Section */}
      <section style={{
        padding: '5rem 2rem 3rem 2rem',
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          color: '#ffffff',
          marginBottom: '2rem',
          fontWeight: '400',
          textShadow: '2px 2px 10px rgba(0,0,0,0.3)',
          animation: 'fadeInUp 0.8s ease-out'
        }}>Ready to Begin?</h1>
        
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#e8f4f8',
          lineHeight: '1.8',
          maxWidth: '600px', 
          margin: '0 auto 3rem auto',
          textShadow: '1px 1px 4px rgba(0,0,0,0.2)',
          fontWeight: '300',
          animation: 'fadeInUp 1s ease-out'
        }}>
          Taking the first step toward healing and growth can feel vulnerable, but you don't have to do it alone.
        </p>
      </section>

      {/* Screening Form */}
      <section 
        ref={screeningFormRef}
        className="animate-on-scroll"
        style={{
          maxWidth: '900px',
          margin: '0 auto 4rem auto',
          padding: '0 2rem'
        }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.1)',
          animation: 'fadeInUp 1.2s ease-out'
        }}>
          <ScreeningForm />
        </div>
      </section>

      {/* Contact Info */}
      <section 
        ref={contactInfoRef}
        className="animate-on-scroll"
        style={{
          maxWidth: '1200px',
          margin: '2rem auto',
          padding: '0 2rem',
          textAlign: 'center'
        }}>
        <h2 style={{ 
          fontFamily: 'Playfair Display, serif',
          fontSize: '2.5rem',
          color: '#ffffff',
          marginBottom: '3rem',
          textShadow: '2px 2px 10px rgba(0,0,0,0.3)',
          animation: 'fadeInUp 1.4s ease-out'
        }}>Get in Touch</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '5rem',
          marginBottom: '4rem',
          animation: 'fadeInUp 1.6s ease-out'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ 
              fontFamily: 'Playfair Display, serif',
              color: '#ffffff', 
              fontSize: '1.5rem',
              marginBottom: '1rem',
              textShadow: '1px 1px 6px rgba(0,0,0,0.3)'
            }}>Email</h3>
            <p style={{ 
              color: '#d1e7f0',
              fontSize: '1.15rem',
              fontWeight: '300'
            }}>kevin@therapypractice.com</p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ 
              fontFamily: 'Playfair Display, serif',
              color: '#ffffff', 
              fontSize: '1.5rem',
              marginBottom: '1rem',
              textShadow: '1px 1px 6px rgba(0,0,0,0.3)'
            }}>Phone</h3>
            <p style={{ 
              color: '#d1e7f0',
              fontSize: '1.15rem',
              fontWeight: '300'
            }}>(555) 123-4567</p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ 
              fontFamily: 'Playfair Display, serif',
              color: '#ffffff', 
              fontSize: '1.5rem',
              marginBottom: '1rem',
              textShadow: '1px 1px 6px rgba(0,0,0,0.3)'
            }}>Location</h3>
            <p style={{ 
              color: '#d1e7f0',
              fontSize: '1.15rem',
              fontWeight: '300'
            }}>San Diego, California</p>
          </div>
        </div>
        
        <p style={{
          fontSize: '1.1rem',
          color: '#b8d4e3',
          fontStyle: 'italic',
          fontWeight: '300',
          lineHeight: '1.6'
        }}>
          In-person sessions in a comfortable, private setting<br/>
          Private pay practice with superbills for insurance reimbursement<br/>
          Flexible scheduling including evening appointments
        </p>
      </section>

      {/* FAQ */}
      <section 
        ref={faqRef}
        className="animate-on-scroll"
        style={{
          maxWidth: '1200px',
          margin: '5rem auto 3rem auto',
          padding: '0 2rem'
        }}>
        <h2 style={{ 
          fontFamily: 'Playfair Display, serif',
          fontSize: '2.5rem',
          color: '#ffffff',
          textAlign: 'center',
          marginBottom: '4rem',
          textShadow: '2px 2px 10px rgba(0,0,0,0.3)',
          animation: 'fadeInUp 1.8s ease-out'
        }}>Common Questions</h2>
        
        <div style={{
          textAlign: 'left',
          lineHeight: '1.8',
          animation: 'fadeInUp 2s ease-out'
        }}>

          <div style={{ 
            marginBottom: '3rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h3 style={{ 
              fontFamily: 'Playfair Display, serif',
              color: '#ffffff', 
              marginBottom: '1rem',
              fontSize: '1.5rem',
              fontWeight: '500',
              textShadow: '1px 1px 6px rgba(0,0,0,0.3)'
            }}>What happens in the first session?</h3>
            <p style={{ 
              color: '#d1e7f0', 
              fontSize: '1.1rem',
              fontWeight: '300'
            }}>
              We'll start by getting to know you—your background, current challenges, goals for therapy, and what brought you to seek support. 
              This helps create a personalized approach that feels meaningful and relevant to your life.
            </p>
          </div>

          <div style={{ 
            marginBottom: '3rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h3 style={{ 
              fontFamily: 'Playfair Display, serif',
              color: '#ffffff', 
              marginBottom: '1rem',
              fontSize: '1.5rem',
              fontWeight: '500',
              textShadow: '1px 1px 6px rgba(0,0,0,0.3)'
            }}>How long does therapy typically take?</h3>
            <p style={{ 
              color: '#d1e7f0', 
              fontSize: '1.1rem',
              fontWeight: '300'
            }}>
              The length varies depending on your goals and personal pace. Some find significant benefit in a few months, 
              while others prefer longer-term support. Progress and goals are regularly reviewed together.
            </p>
          </div>

        </div>
      </section>
      </div>
    </main>
  );
};

export default Contact;