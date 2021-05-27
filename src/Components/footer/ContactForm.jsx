import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import './contact.css'

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mnqldpqw");

  if (state.succeeded) return <p>Thanks for contacting me!</p>;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Contact me</label>

      <input id="email" type="email" name="email" placeholder='Your email'/>
      <ValidationError prefix='Email' field='email' errors={state.errors}/>

      <textarea
      id='message' name='message' placeholder='Your message'/>
      <ValidationError prefix='Message'
      field='message'
      errors={state.errors}/>

      <button type='submit' disabled={state.submitting}>
          Submit
      </button>
    </form>
  );
}
