import { useState } from 'react';
import './Buttons.css';
import { Link } from 'react-router-dom';
import Form from './Form';

const Buttons = (props) => {

const [toggleClass, setToggleClass] = useState(false);

const showForm = () => {
  setToggleClass(!toggleClass)
};
console.log(toggleClass)

  return (
    <section className="buttons-wrapper">
    <div className="buttons-wrapper__box">
      <Link to='/main' >
        <button className="buttons-wrapper__button--small">Go back</button>
      </Link>
      <button className="buttons-wrapper__button--small" onClick={showForm} >Share it</button>
      <button className="buttons-wrapper__button--small" onClick={props.fetchNewData}>Show next</button>
      </div>
      <Form toggleClass={toggleClass} motivation={props.motivation}/>
    </section>
  )
}

export default Buttons;
