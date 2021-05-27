import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mnqldpqw");

  if (state.succeeded) return <p>Thanks for joining!</p>;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Adress</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix='Email' field='email' errors={state.errors}/>
      <textarea
      id='message' name='message'/>
      <ValidationError prefix='Message'
      field='message'
      errors={state.errors}/>

      <button type='submit' disabled={state.submitting}>
          Submit
      </button>
    </form>
  );
}