import { getMotivationalData } from "../../api";
import './Motivation.css';
import Buttons from '../Buttons/Buttons';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Motivation = () => {

  let [
    searchParams,
  ] = useSearchParams()

  const selection = searchParams.get('selection');

  const [motivation, setMotivation] = useState(undefined);
  const [loadingMotivation, setLoadingMotivation] = useState(false);

  useEffect(() => {fetchNewData()}, []);

  const fetchNewData = () => {
    setLoadingMotivation(true);
    getMotivationalData().then(data => {
      setMotivation(data);
    }).finally(() => {
      setLoadingMotivation(false);
    })
  }

function renderMotivation() {
    if (loadingMotivation) {
      return (
        <section className="loading">
          Loading...
        </section>
      )
    } else if (motivation) {
      return (
        <>
          {
          selection === "tips"  ?
          <div className="motivation-wrapper__quote-page">
            <h2 className='text-motivation__title'>The tip for you is</h2>
            <section className='text-motivation__wrapper'>
              <h4 className='text-motivation__text'>" {motivation.quote.text} "</h4>
              <span className='text-motivation__by'>by {motivation.quote.from}</span>
            </section>
            <Buttons fetchNewData={fetchNewData} motivation={motivation.quote.text}/>
          </div>
            :
            null
          }
          {
            selection === "joke"  ?
              <div className="motivation-wrapper__joke-page">
                <h2 className='text-motivation__title'>The joke for you is</h2>
                <section className='text-motivation__wrapper'>
                  <p className='text-motivation__text'>{motivation.joke.joke}</p>
                </section>
                <Buttons fetchNewData={fetchNewData} motivation={motivation.joke.joke}/>
              </div> : null
          }
          {
            selection === "art" ?
              <div className="motivation-wrapper__art-page">
                <h2 className='text-motivation__title'>Art pieces to inpire you</h2>
                <section className='art__wrapper'>
                  <img alt="Picture of an art piece" src={motivation.art.url} />
                  {motivation.art.artist ? <h2 className='text-motivation__by'>by {motivation.art.artist} ({motivation.art.year})</h2>: null}
                  {motivation.art.title ? <h2 className='text-motivation__by'>{motivation.art.title}</h2>: null}
                </section>
                <Buttons fetchNewData={fetchNewData} motivation={motivation.art.url} />
              </div>
              :
              null
          }
        </>
      )
    }
    return null;
  }

return (
  <>
      {renderMotivation()}
  </>
)
}


export default Motivation;

 
 
 
 