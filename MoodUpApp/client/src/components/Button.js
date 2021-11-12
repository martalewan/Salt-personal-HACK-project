import './Buttons.css';

const Button = (props) => {
 
    return (
        <button id={props.id} className={props.nameOfClass} onClick={props.func}>{props.text}</button>
    )
  }
  
  export default Button;