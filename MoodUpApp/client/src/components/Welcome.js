import './Buttons.css';
import './Welcome.css';
import Button from './Button';
import { Link } from 'react-router-dom'

const Welcome = () => {

  return (
    <section className="welcome-wrapper">
    <h3 className="welcome-wrapper_logo logo">Mood App</h3>
    <h3 className="welcome-wrapper_description">HELLO DEAR</h3>
    <h3 className="welcome-wrapper_description">Would you like to boost your mood?</h3>
    <Link to='/Main' >
        <Button nameOfClass={'welcome-wrapper__button button'} text={'Show me'} />
    </Link>
    </section>
  )
}

export default Welcome;