import { useState, useEffect } from 'react';
import './Form.css';
import './Buttons.css';

const Form = (props) => {

  const [email, setEmail] = useState({
    email: {
          to: '',
          from: '',
          subject: '',
          text: props.motivation,
        }
  }
)

//   const sendEmail = () => {
//     const { email } = email;
//     fetch(`baseUrl/send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`)
//       .catch(err => console.error(err))
//   }

// const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.target);

//     fetch('/api/form-submit-url', {
//       method: 'POST',
//       body: data,
//     });
//   }

  return (
      <div className= {props.toggleClass ? "form-wrapper__show" : "form-wrapper__hidden"}>
          <h2 > Send Email </h2>
          <label className='form__label'> Recipient </label>
          <input value={email.recipient}
            onChange={e => setEmail({ email: { ...email, recipient: e.target.value } })} />
          <label className='form__label'> Sender </label>
          <input value={email.sender}
            onChange={e => setEmail({ email: { ...email, sender: e.target.value } })} />
          <label className='form__label'> Subject </label>
          <input value={email.subject}
            onChange={e => setEmail({ email: { ...email, subject: e.target.value } })} />
          <label className='form__label'> Send this motivation to your friends </label>
          <p>{props.motivation}</p>
          <button className='button-wrapper__button sendEmail'> Send Email </button>
      </div>
    );
}

export default Form;
