import React from 'react';
import styled from 'styled-components';
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {
  return (
    <StyledWrapper>
      <form 
      action='https://formspree.io/f/xbllbebq'
      method='POST'
      class="form">
    <p class="title centertxt">
      Contact Us
    </p>
    <p class="message centertxt">
      We’d love to hear from you! Please complete the form below with accurate details, and we’ll respond within 24–48 hours. 
    <br/>
    For urgent inquiries, contact us on WhatsApp or Email. Your privacy is important to us. </p>
        <label htmlFor='firstname'>
            <input 
            required 
            name='firstname'
            placeholder="" 
            type="text"
            autocomplete='off' 
            class="input" />
            <span>Firstname</span>
        </label>

        <label htmlFor='lastname'>
            <input 
            name='lastname' 
            required 
            placeholder=""
            autocomplete='off'
            type="text" 
            class="input" />
            <span>Lastname</span>
        </label>
            
    <label htmlFor='email'>
        <input 
          required
          placeholder=""
          name='email'
          type="email"
          class="input" />
        <span>Email</span>
    </label> 
    
    <label>
        <input
        name='enquiry' 
        required
        placeholder="" 
        type="text" 
        autocomplete='off'
        class="input" />
        <span>Type Enquiry Here</span>
    </label> 
    
        
    <button aria-label="Submit Cotact Form" type='submit' class="submit">Submit</button>
    <p class="signin">By clicking on submit indicates that you agree with Arrow Smart Solutions' <a href="/terms-conditions">Terms and Conditions</a> of service. </p>
</form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
    max-width: 70vw;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    position: relative;
  }

  .title {
    font-size: 36px;
    color: #333333;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }

  .title::before,.title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: royalblue;
  }

  .title::before {
    width: 18px;
    height: 18px;
    background-color: royalblue;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .message, .signin {
    color: rgba(88, 87, 87, 0.822);
    font-size: 18px;
  }

  .signin {
    text-align: center;
  }

  .centertxt {
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 0 auto;
  }

  .signin a {
    color: royalblue;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }

  .form label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 1em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 1em;
  }

  .form label .input:focus + span,.form label .input:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .form label .input:valid + span {
    color: #ed801c;
  }

  .submit {
    border: none;
    outline: none;
    background-color: #1e438a;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 18px;
    transform: .3s ease;
  }

  .submit:hover {
    background-color: rgb(56, 90, 194);
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
  }`;

export default Form;
