import React, { useState } from 'react';

interface ScreeningFormData {
  suicidalThoughts: boolean | null;
  recentHospitalization: boolean | null;
  psychoticSymptoms: boolean | null;
  maniaSymptoms: boolean | null;
  substanceWithdrawal: boolean | null;
  eatingDisorder: boolean | null;
  impactLevel: number | null;
  helpText: string;
}

const ScreeningForm: React.FC = () => {
  const [formData, setFormData] = useState<ScreeningFormData>({
    suicidalThoughts: null,
    recentHospitalization: null,
    psychoticSymptoms: null,
    maniaSymptoms: null,
    substanceWithdrawal: null,
    eatingDisorder: null,
    impactLevel: null,
    helpText: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [showCrisisMessage, setShowCrisisMessage] = useState(false);

  const handleYesNoChange = (field: keyof ScreeningFormData, value: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImpactChange = (value: number) => {
    setFormData(prev => ({
      ...prev,
      impactLevel: value
    }));
  };

  const handleTextChange = (value: string) => {
    if (value.length <= 250) {
      setFormData(prev => ({
        ...prev,
        helpText: value
      }));
    }
  };

  const checkForCrisisIndicators = () => {
    return formData.suicidalThoughts === true || 
           formData.recentHospitalization === true ||
           formData.psychoticSymptoms === true ||
           formData.maniaSymptoms === true ||
           formData.substanceWithdrawal === true ||
           formData.eatingDisorder === true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const hasRequiredAnswers = 
      formData.suicidalThoughts !== null &&
      formData.recentHospitalization !== null &&
      formData.psychoticSymptoms !== null &&
      formData.maniaSymptoms !== null &&
      formData.substanceWithdrawal !== null &&
      formData.eatingDisorder !== null &&
      formData.impactLevel !== null;

    if (!hasRequiredAnswers) {
      alert('Please answer all required questions.');
      return;
    }

    if (checkForCrisisIndicators()) {
      setShowCrisisMessage(true);
      return;
    }

    // Form is safe to proceed
    setSubmitted(true);
    // Here you would typically send the data to your backend
    console.log('Screening form submitted:', formData);
  };

  if (showCrisisMessage) {
    return (
      <div className="screening-form">
        <div className="crisis-message">
          <h3>Immediate Support Needed</h3>
          <p>
            Based on your responses, we recommend connecting with immediate crisis support or intensive care services that can provide the level of support you need right now.
          </p>
          <div className="crisis-resources">
            <h4>Crisis Resources:</h4>
            <ul>
              <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
              <li><strong>National Suicide Prevention Lifeline:</strong> Call or text 988</li>
              <li><strong>Emergency Services:</strong> Call 911 or go to your nearest ER</li>
            </ul>
          </div>
          <p>
            If you'd like to connect with ongoing therapy services after addressing immediate safety concerns, please feel free to reach out again.
          </p>
          <button 
            onClick={() => setShowCrisisMessage(false)}
            className="cta-button"
          >
            Back to Form
          </button>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="screening-form">
        <div className="success-message">
          <h3>Thank you for completing the screening</h3>
          <p>
            Based on your responses, individual therapy appears to be a good fit for your needs. 
            Kevin will review your information and reach out within 1-2 business days to schedule a consultation.
          </p>
          <p>
            <strong>Next Steps:</strong>
          </p>
          <ul>
            <li>Kevin will contact you to schedule a brief phone consultation</li>
            <li>We'll discuss your goals and answer any questions about therapy</li>
            <li>If it's a good fit, we'll schedule your first session</li>
          </ul>
          <p className="contact-info">
            <strong>Questions?</strong> Feel free to reach out at kevin@therapypractice.com or (555) 123-4567
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="screening-form">
      <div className="form-intro">
        <h3>Quick Safety Check</h3>
        <p className="disclaimer">
          This quick check helps us match you with the safest, most helpful care. It is not a diagnosis. 
          <strong> If you are in crisis (thinking about harming yourself or others, or can't keep yourself safe), 
          please call or text 988 now or go to the nearest ER.</strong>
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Question 1 */}
        <div className="form-question">
          <p className="question-text">
            Are you experiencing thoughts of suicide with a plan or intent in the past 30 days?
          </p>
          <div className="yes-no-buttons">
            <button
              type="button"
              className={`option-button ${formData.suicidalThoughts === true ? 'selected' : ''}`}
              onClick={() => handleYesNoChange('suicidalThoughts', true)}
            >
              Yes
            </button>
            <button
              type="button"
              className={`option-button ${formData.suicidalThoughts === false ? 'selected' : ''}`}
              onClick={() => handleYesNoChange('suicidalThoughts', false)}
            >
              No
            </button>
          </div>
        </div>

        {/* Question 2 */}
        <div className="form-question">
          <p className="question-text">
            Have you had suicide attempt or psychiatric hospitalization in the past 60 days?
          </p>
          <div className="yes-no-buttons">
            <button
              type="button"
              className={`option-button ${formData.recentHospitalization === true ? 'selected' : ''}`}
              onClick={() => handleYesNoChange('recentHospitalization', true)}
            >
              Yes
            </button>
            <button
              type="button"
              className={`option-button ${formData.recentHospitalization === false ? 'selected' : ''}`}
              onClick={() => handleYesNoChange('recentHospitalization', false)}
            >
              No
            </button>
          </div>
        </div>

        {/* Question 3 */}
        <div className="form-question">
          <p className="question-text">
            Are you having experiences like hearing/seeing things others don't or strong beliefs that others say aren't real?
          </p>
          <div className="yes-no-buttons">
            <button
              type="button"
              className={`option-button ${formData.psychoticSymptoms === true ? 'selected' : ''}`}
              onClick={() => handleYesNoChange('psychoticSymptoms', true)}
            >
              Yes
            </button>
            <button
              type="button"
              className={`option-button ${formData.psychoticSymptoms === false ? 'selected' : ''}`}
              onClick={() => handleYesNoChange('psychoticSymptoms', false)}
            >
              No
            </button>
          </div>
        </div>

        {/* Question 4 */}
        <div className="form-question">
          <p className="question-text">
            Have you had a period of no sleep for 2+ days with very high energy, risky behavior, or feeling invincible in the past 30 days?
          </p>
          <div className="yes-no-buttons">
            <button
              type="button"
              className={`option-button ${formData.maniaSymptoms === true ? 'selected' : ''}`}
              onClick={() => handleYesNoChange('maniaSymptoms', true)}
            >
              Yes
            </button>
            <button
              type="button"
              className={`option-button ${formData.maniaSymptoms === false ? 'selected' : ''}`}
              onClick={() => handleYesNoChange('maniaSymptoms', false)}
            >
              No
            </button>
          </div>
        </div>

        {/* Question 5 */}
        <div className="form-question">
          <p className="question-text">
            Is alcohol or drug use causing you withdrawal, blackouts, or daily use you can't stop?
          </p>
          <div className="yes-no-buttons">
            <button
              type="button"
              className={`option-button ${formData.substanceWithdrawal === true ? 'selected' : ''}`}
              onClick={() => handleYesNoChange('substanceWithdrawal', true)}
            >
              Yes
            </button>
            <button
              type="button"
              className={`option-button ${formData.substanceWithdrawal === false ? 'selected' : ''}`}
              onClick={() => handleYesNoChange('substanceWithdrawal', false)}
            >
              No
            </button>
          </div>
        </div>

        {/* Question 6 */}
        <div className="form-question">
          <p className="question-text">
            Do you have an eating disorder with fainting, rapid weight loss, purging multiple times per day, or medical instability?
          </p>
          <div className="yes-no-buttons">
            <button
              type="button"
              className={`option-button ${formData.eatingDisorder === true ? 'selected' : ''}`}
              onClick={() => handleYesNoChange('eatingDisorder', true)}
            >
              Yes
            </button>
            <button
              type="button"
              className={`option-button ${formData.eatingDisorder === false ? 'selected' : ''}`}
              onClick={() => handleYesNoChange('eatingDisorder', false)}
            >
              No
            </button>
          </div>
        </div>

        {/* Question 7 - Impact Level */}
        <div className="form-question">
          <p className="question-text">
            How much do symptoms impact daily life (work/school/home)?
          </p>
          <div className="impact-buttons">
            <button
              type="button"
              className={`impact-button ${formData.impactLevel === 0 ? 'selected' : ''}`}
              onClick={() => handleImpactChange(0)}
            >
              0 - None
            </button>
            <button
              type="button"
              className={`impact-button ${formData.impactLevel === 1 ? 'selected' : ''}`}
              onClick={() => handleImpactChange(1)}
            >
              1 - Mild
            </button>
            <button
              type="button"
              className={`impact-button ${formData.impactLevel === 2 ? 'selected' : ''}`}
              onClick={() => handleImpactChange(2)}
            >
              2 - Moderate
            </button>
            <button
              type="button"
              className={`impact-button ${formData.impactLevel === 3 ? 'selected' : ''}`}
              onClick={() => handleImpactChange(3)}
            >
              3 - Severe
            </button>
          </div>
        </div>

        {/* Optional Text Field */}
        <div className="form-question">
          <label className="question-text">
            What would you like help with? (Optional, max 250 characters)
          </label>
          <textarea
            className="help-textarea"
            value={formData.helpText}
            onChange={(e) => handleTextChange(e.target.value)}
            placeholder="Share what you'd like to work on in therapy..."
            rows={4}
          />
          <div className="character-count">
            {formData.helpText.length}/250 characters
          </div>
        </div>

        <button type="button" className="cta-button submit-button">
          Submit Screening
        </button>
      </form>
    </div>
  );
};

export default ScreeningForm;