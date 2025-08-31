import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQs: React.FC = () => {
  const faqRef = useScrollAnimation('animate-fade-up', { once: true });
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter(i => i !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  const faqs: FAQItem[] = [
    {
      question: "What happens in the first session?",
      answer: "We'll start by getting to know you—your background, current challenges, goals for therapy, and what brought you to seek support. This helps create a personalized approach that feels meaningful and relevant to your life."
    },
    {
      question: "How long does therapy typically take?",
      answer: "The length varies depending on your goals and personal pace. Some find significant benefit in a few months, while others prefer longer-term support. Progress and goals are regularly reviewed together."
    },
    {
      question: "What kinds of concerns do you work with?",
      answer: "I primarily work with clients who are navigating challenges such as anxiety, stress, life transitions, relationship struggles, identity questions, and feelings of being \"stuck.\" My approach is focused on helping thoughtful, motivated adults explore growth, healing, and deeper clarity in their lives."
    },
    {
      question: "Do you work with severe or crisis-level mental health concerns?",
      answer: "My practice is not designed for individuals who are currently experiencing severe mental health conditions that require intensive or specialized care (such as active psychosis, unmanaged bipolar disorder, or ongoing suicidal crisis). If you are in immediate distress or need crisis support, please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room."
    },
    {
      question: "How do I know if I'm a good fit?",
      answer: "If you are generally stable in your day-to-day functioning but feel weighed down by patterns, emotions, or experiences you'd like to better understand and work through, you may be a great fit. If you're looking for support with severe or complex psychiatric conditions, a higher level of care may serve you best. I'm happy to provide referrals if you're unsure."
    }
  ];

  return (
    <main 
      className="parallax-bg"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(52, 73, 94, 0.46) 0%, rgba(44, 62, 80, 0.44) 100%), url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2000')`,
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
          }}>Frequently Asked Questions</h1>
          
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
            Find answers to common questions about therapy and my practice.
          </p>
        </section>

        {/* FAQ Section */}
        <section 
          ref={faqRef}
          className="animate-on-scroll"
          style={{
            maxWidth: '900px',
            margin: '0 auto 5rem auto',
            padding: '0 2rem'
          }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '3rem',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {faqs.map((faq, index) => (
              <div 
                key={index}
                style={{
                  marginBottom: index === faqs.length - 1 ? 0 : '1.5rem',
                  borderBottom: index === faqs.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                  paddingBottom: index === faqs.length - 1 ? 0 : '1.5rem'
                }}
              >
                <button
                  onClick={() => toggleExpand(index)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    padding: '0.75rem',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: '8px',
                    transition: 'background 0.3s ease',
                    marginBottom: expandedItems.includes(index) ? '1rem' : 0
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'none';
                  }}
                >
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    color: '#ffffff',
                    fontSize: '1.3rem',
                    fontWeight: '400',
                    margin: 0,
                    flex: 1
                  }}>
                    {faq.question}
                  </h3>
                  <span style={{
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    transition: 'transform 0.3s ease',
                    transform: expandedItems.includes(index) ? 'rotate(180deg)' : 'rotate(0deg)',
                    display: 'inline-block',
                    width: '30px',
                    textAlign: 'center'
                  }}>
                    ⌄
                  </span>
                </button>
                
                <div style={{
                  maxHeight: expandedItems.includes(index) ? '500px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease-in-out',
                  paddingLeft: '0.75rem',
                  paddingRight: '0.75rem'
                }}>
                  <p style={{
                    color: '#d1e7f0',
                    fontSize: '1.05rem',
                    lineHeight: '1.7',
                    fontWeight: '300',
                    margin: 0
                  }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default FAQs;