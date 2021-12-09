import { useState } from 'react';
import './Form.css';
import '../Buttons/Buttons.css';
const baseUrl = "http://localhost:3001";

const Form = (props) => {

  const [emailSent, setEmailSent] = useState(false);

  const [email, setEmail] = useState({
    email: {
      recipient: '',
      subject: '',
      text: props.motivation,
    }
  }
)

  const renderEmailSent = () => {
    if (emailSent) {
      return (
        <h3>Your email was successfully sent.</h3>
      )
    } 
    setTimeout(() => setEmailSent(false), 5000);
  }

  const renderEmailForm = () => {
    if (!emailSent) {
      return (
        <>
          <h2 > Send Email </h2>
          <label className='form__label'> Recipient </label>
          <input value={email.recipient} required
            onChange={e => setEmail({ email: { ...email, recipient: e.target.value } })} />
          <label className='form__label'> Sender </label>
          <input value={email.sender} required
            onChange={e => setEmail({ email: { ...email, sender: e.target.value } })} />
          <label className='form__label'> Subject </label>
          <input value={email.subject} required
            onChange={e => setEmail({ email: { ...email, subject: e.target.value } })} />
          <label className='form__label text-title'> Send this motivation to your friends </label>
          <p className='text-title'>" {props.motivation} "</p>
          <button className='button-wrapper__button sendEmail' onClick={sendEmail}> Send Email </button>
        </>
       
      )
    } return null;
  }

  const sendEmail = e => {
    e.preventDefault();
    setEmailSent(!emailSent);
    // fetch(`${baseUrl}/send-email?recipient=${email.recipient}&topic=${email.subject}&text=${email.text}`)
    //   .catch(err => console.error(err))
  }

  console.log(emailSent)

  return (
      <form className= {props.toggleClass ? "form-wrapper__show" : "form-wrapper__hidden"}>
          {renderEmailSent()}
          {renderEmailForm()}

      </form>
    );
}

export default Form;
