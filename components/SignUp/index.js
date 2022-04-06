import React, { useRef, useState } from 'react';
import styles from './SignUp.module.css'
import useWindowSize from "react-use/lib/useWindowSize"
import Confetti from "react-confetti"

const SignUp = () => {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('')
  const { width, height } = useWindowSize()

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Success! 🎉 You are now subscribed to the newsletter.');
  };

  const isSuccess = () => {
    return message === 'Success! 🎉 You are now subscribed to the newsletter.'
  }

  return (
    <div className={styles.signup}>
      <div className={styles.content}>
        <h2 className="title">Subscribe To Our Newsletter!</h2>
        <p>Sign up below to be the first to hear details of upcoming TEDxUCL events, to receive ticket on-sale notifications and become a part of the TEDxUCL story.</p>
        <p className={styles.message}>
          {message}
        </p>
        {!isSuccess() && (
        <form onSubmit={subscribe} className={styles.form}>
          <input
          className={styles.input}
          id="email-input"
          name="email"
          placeholder="email"
          ref={inputEl}
          required
          type="email"
          />
          <button className={styles.submitButton} type="submit">{'Subscribe'}</button>
        </form>
        )}
      </div>
      {isSuccess() && <Confetti width={width} height='600px' className={styles.confetti} />}
    </div>
  );
}
 
export default SignUp;