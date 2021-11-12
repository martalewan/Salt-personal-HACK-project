import { Link } from 'react-router-dom';
import Button from './Button';
import './Main.css';
import './Buttons.css';

const Main = () => {

  return (
    <div className="App">
      <main className='main-wrapper'> 
        <section className="button-wrapper">
          <h1 className="button-wrapper__title">How would you like to boost your energy?</h1>
          <Link to='/motivation?selection=tips' >
              <Button nameOfClass={'button-wrapper__button'} text={'Teach me something'} />
          </Link>
          <Link to='/motivation?selection=joke' >
              <Button nameOfClass={'button-wrapper__button'} text={'Make me laugh'} />
          </Link>
          <Link to='/motivation?selection=art' >
              <Button nameOfClass={'button-wrapper__button'} text={'Please my eyes'} />
          </Link>
        </section>
      </main>
    </div>
  );

}

export default Main;


