'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NewsletterPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState('');

  const handleNewsletterSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult('Subscribing...');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setResult('Successfully subscribed to our newsletter!');
        setEmail('');
        setTimeout(() => setResult(''), 5000);
      } else {
        setResult(data.message || 'Error subscribing to newsletter');
      }
    } catch (error) {
      setResult('Error: Unable to subscribe');
      console.error('Newsletter subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <StyledWrapper>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='form'
      >
        <p className="title centertxt">
          Subscribe to Our Newsletter
        </p>
        <p className="message centertxt">
          Stay updated with the latest tips, insights, and updates from Arrow Smart Solutions.
          Get exclusive content delivered to your inbox regularly.
        </p>

        <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
          <label htmlFor='newsletter-email'>
            <input
              id='newsletter-email'
              required
              placeholder=""
              name='email'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              disabled={isSubmitting}
            />
            <span>Your Email Address</span>
          </label>

          <button 
            aria-label="Subscribe to Newsletter" 
            type='submit' 
            className="submit" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>

          {result && (
            <p className="signin" style={{ color: result.includes('Success') ? '#28a745' : '#ed801c' }}>
              {result}
            </p>
          )}

          <p className="signin">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </motion.div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  padding: 6rem 1rem 2rem 1rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;

  @media (min-width: 640px) {
    padding: 7rem 1rem 2rem 1rem;
  }

  @media (min-width: 768px) {
    padding: 8rem 1.5rem 2rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 9rem 2rem 2rem 2rem;
  }

  @media (min-width: 1280px) {
    padding: 10rem 2rem 2rem 2rem;
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
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

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

  .title::before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    border-radius: 50%;
    left: 0px;
    background-color: #ed801c;
  }

  .title::after {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    border-radius: 50%;
    left: 0px;
    background-color: #ed801c;
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
    color: #ed801c;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .signin a:hover {
    color: #d63d2a;
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
      border-color: #ed801c;
      box-shadow: 0 0 0 3px rgba(237, 128, 28, 0.1);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
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

  .submit {
    border: none;
    outline: none;
    background-color: #ed801c;
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
      background-color: #d63d2a;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(237, 128, 28, 0.3);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  .newsletter-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .ml-block-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .ml-embedded {
    width: 100%;
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

export default NewsletterPage;
