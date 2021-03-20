import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styled from "@emotion/styled"
import { useTheme  } from '@emotion/react'

export const StyledEmailList = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
    height: 100%;
    text-decoration: none;
    font-size: 1.45rem;

    h4 {
      width: 80%;
      font-weight: 600;
    }
    div {
      display: flex;
      flex-direction: column;
      input {
        border: 1px solid #aaa;
        padding: .25rem;
        font-size: 1.15rem;
       margin: 1rem 0;
      }

      button{
        border: none;
        margin: auto;
        border-radius: 2px;
        
        box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.25);
        background-color: ${({ theme }) => theme.COLOR.LIGHT.hex};
        color: ${({ theme }) => theme.COLOR.DARK.hex};
        font-size: 1.35rem;
      }
    }
`

const EmailListForm = () => {

  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addToMailchimp(email)
      .then((data) => {
          console.log(data.result);
          setResult(data.result)     
      })
      .catch((error) => {
        // Errors in here are client side
        // Mailchimp always returns a 200
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };

  
  return (

    <StyledEmailList onSubmit={handleSubmit} theme={theme}>
      <h4>Anmäl dig till vårt nyhetsbrev och var först med att ta del av våra härliga erbjudanden!</h4>
      <div>
          <input
              placeholder="E-post"
              name="email"
              type="text"
              onChange={handleEmailChange
              }
            />   

          <button type="submit">Skicka</button>

      </div>
    
      {result === "success" && <p>Tack!</p>} 
      {result === "error" && <p>Nånting gick fel</p> }
   
    </StyledEmailList>
  );
};

export default EmailListForm;