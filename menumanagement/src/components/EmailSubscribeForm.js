'use client';
import { useState, useEffect } from 'react';
import { useForm, controller } from 'react-hook-form';
import { sendWelcomeEmailSignUp } from '../lib/api';

// styling
import styles from '../styles/EmailSubscribeForm.module.css';

// currently we only have two locations, settings for mobile just make it so that the form can have margin inline for smaller screensizes and have the button stay next to each other instead of stacking ( we may want to do another version that stacks;.)
const EmailSubscribeForm = ({ location }) => {
  const [emailSignupSuccess, setEmailSignupSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, reset },
  } = useForm({
    defaultValues: {
      email: '',
    },
  });

  // submit data
  const onSubmit = async (data, e) => {
    e.preventDefault();
    console.log({
      data,
      e,
    });
    // once complete set email signup success to true;
    const response = await sendWelcomeEmailSignUp(data);

    console.log('response', response, 'can i access ok', response.ok);

    if (response.ok === false || response.error) {
      setErrorMessage(
        // `Something went wrong, please try again later.${response.error}}`,
        'Something Went Wrong',
      );
    } else {
      setEmailSignupSuccess(true);
    }
  };

  // handles error handle submit will not swallow errors that occur inside our onSubmit call back do we should try and catch inside async requests and handle those errors gracefully
  const onError = (errors, e) => {
    e.preventDefault();
    console.log({
      errors,
      e,
    });
    setErrorMessage('Something went wrong, please try again later.');
    return;
  };

  return (
    <div className={styles[`primary-${location}-form`]}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <p>Subscribe to our newsletter</p>
        {emailSignupSuccess ? (
          <div className={styles['error-message']}>
            {errors.email && <span role="alert">{errors.email.message}</span>}
            {emailSignupSuccess && <span>Thank you for subscribing!</span>}
          </div>
        ) : null}
        <input
          className={styles['email-input']}
          id="email"
          type="email"
          {...register('email', {
            required: 'required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          })}
        />
        <button
          className={styles['email-button']}
          type="submit"
          // onClick={e => {
          //   e.preventDefault();
          //   handleSubmit(onSubmit);
          // }}
        >
          GO
        </button>
      </form>
    </div>
  );
};

export default EmailSubscribeForm;
