'use client'
import React, { useState } from 'react';
import styled from 'styled-components';

const Form = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [enquiry, setEnquiry] = useState("");
  const maxEnquiryChars = 500;

  const countNonSpaceChars = (value) => value.replace(/\s/g, "").length;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formData = {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      email: event.target.email.value,
      enquiry: event.target.enquiry.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        setEnquiry("");
        setTimeout(() => setResult(""), 5000);
      } else {
        setResult(data.message || "Error submitting form");
      }
    } catch (error) {
      setResult("Error: Unable to submit form");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <StyledWrapper>
      <form 
      onSubmit={handleSubmit}
      className="form">
    <p className="title centertxt">
      Contact Us
    </p>
    <p className="message centertxt">
      We'd love to hear from you! Please complete the form below with accurate details, and we’ll respond within 24–48 hours. 
    <br/>
    For urgent inquiries, contact us on WhatsApp or Email. Your privacy is important to us. </p>
        <label htmlFor='firstname'>
            <input 
            required 
            name='firstname'
            placeholder="" 
            type="text"
            autoComplete='off' 
            className="input" />
            <span>Firstname</span>
        </label>

        <label htmlFor='lastname'>
            <input 
            name='lastname' 
            required 
            placeholder=""
            autoComplete='off'
            type="text" 
            className="input" />
            <span>Lastname</span>
        </label>
            
    <label htmlFor='email'>
        <input 
          required
          placeholder=""
          name='email'
          type="email"
          className="input" />
        <span>Email</span>
    </label> 
    
    <label>
        <textarea
        name='enquiry' 
        required
        placeholder="" 
        autoComplete='off'
        rows={4}
        value={enquiry}
        onChange={(event) => {
          const nextValue = event.target.value;
          if (countNonSpaceChars(nextValue) > maxEnquiryChars) return;
          setEnquiry(nextValue);
        }}
        className="input input--textarea" />
        <span
          className={maxEnquiryChars - countNonSpaceChars(enquiry) <= 50 ? "counter-warning" : ""}
        >
          {enquiry.length > 0
            ? `${countNonSpaceChars(enquiry)}/${maxEnquiryChars}`
            : "Type Enquiry Here"}
        </span>
    </label> 
    
        
    <button aria-label="Submit Contact Form" type='submit' className="submit" disabled={isSubmitting}>
      {isSubmitting ? "Submitting..." : "Submit"}
    </button>
    <p className="signin">{result ? result : "By clicking on submit indicates that you agree with Arrow Smart Solution's"} {!result && <a href="/terms-conditions">Terms and Conditions</a>} {!result && "of service."}</p>
</form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 0 auto;
    max-width: 100%;
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 20px;
    position: relative;

    @media (min-width: 640px) {
      max-width: 85%;
      padding: 2rem;
    }

    @media (min-width: 768px) {
      max-width: 70%;
      padding: 2.5rem;
    }

    @media (min-width: 1024px) {
      max-width: 60%;
      padding: 3rem;
    }

    @media (min-width: 1280px) {
      max-width: 50%;
    }
  }

  .title {
    font-size: 1.75rem;
    color: #333333;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
    margin-bottom: 0.5rem;

    @media (min-width: 768px) {
      font-size: 2rem;
    }

    @media (min-width: 1024px) {
      font-size: 2.25rem;
    }
  }

  .title::before,.title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: #1e438a;
  }

  .title::before {
    width: 18px;
    height: 18px;
    background-color: #1e438a;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .message, .signin {
    color: rgba(88, 87, 87, 0.822);
    font-size: 1rem;
    line-height: 1.6;

    @media (min-width: 768px) {
      font-size: 1.125rem;
    }
  }

  .message {
    margin-bottom: 1rem;
  }

  .signin {
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1rem;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }

  .centertxt {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .signin a {
    color: #1e438a;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .signin a:hover {
    color: #ed801c;
    text-decoration: underline;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    width: 100%;
    padding: 12px 12px 24px 12px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
    font-size: 1rem;
    transition: all 0.3s ease;

    @media (min-width: 768px) {
      padding: 14px 14px 26px 14px;
      font-size: 1.05rem;
    }

    &:focus {
      border-color: #1e438a;
      box-shadow: 0 0 0 3px rgba(30, 67, 138, 0.1);
    }
  }

  .form label .input.input--textarea {
    min-height: 140px;
    resize: vertical;
    line-height: 1.5;
  }

  .form label .input + span {
    position: absolute;
    left: 12px;
    top: 16px;
    color: grey;
    font-size: 1em;
    cursor: text;
    transition: all 0.3s ease;

    @media (min-width: 768px) {
      left: 14px;
      top: 18px;
    }
  }

  .form label .input:placeholder-shown + span {
    top: 16px;
    font-size: 1em;

    @media (min-width: 768px) {
      top: 18px;
    }
  }

  .form label .input:focus + span,
  .form label .input:valid + span {
    top: 32px;
    font-size: 0.8em;
    font-weight: 600;

    @media (min-width: 768px) {
      top: 36px;
      font-size: 0.85em;
    }
  }

  .form label .input:valid + span {
    color: #ed801c;
  }

  .form label .input + span.counter-warning {
    color: #ed801c;
  }

  .form label .input--textarea:focus + span,
  .form label .input--textarea:valid + span {
    top: auto;
    bottom: 12px;
  }

  .submit {
    border: none;
    outline: none;
    background-color: #1e438a;
    padding: 12px 20px;
    border-radius: 10px;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 0.5rem;

    @media (min-width: 768px) {
      padding: 14px 24px;
      font-size: 1.125rem;
    }

    @media (min-width: 1024px) {
      padding: 16px 28px;
      font-size: 1.25rem;
    }

    &:hover:not(:disabled) {
      background-color: #2d5bb5;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(30, 67, 138, 0.3);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
`;

export default Form;
