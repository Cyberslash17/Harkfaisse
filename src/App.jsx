import { useState } from 'react';
import { CyberEl14 } from 'react-cyber-elements'
import './App.css';
import { Alert } from './Alert';


function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);

    setTimeout(() => setIsVisible(false), 2000);
  }

  return (
    <div className='mycontainer'>
      <main className="mymain">
        <h1 className="mytitle">
        Please guess a number
        </h1>
        <CyberEl14
          id="cyberEl-Master"
          style={{
            width: '150%',
            height: '150%'
          }} />

        <div className="mycontainer-sections">
          <div className='container'>
            <div className='row'>
              <div class="input-group mb-3">
                <input type="number" class="form-control" placeholder="Guess a number" aria-label="Guess a number" aria-describedby="button-addon2" />
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleClick}>Guess!</button>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
              {isVisible ? <Alert/> : <></>}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
