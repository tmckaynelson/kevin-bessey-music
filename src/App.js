import React from 'react';

import Nav from './components/Nav'
import Tour from './components/Tour'

import banner from './images/ThePatientBanner.jpg'

import './reset.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="banner-img"> 
        {/* <img src={ banner } alt="The Patient banner" /> */}
      </div>
      <div className="iframe">
        {<iframe src="https://open.spotify.com/embed/track/0N1DnRp0d5PdOqFvAxLgTB" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>}
      </div>
      <Tour />
    </div>
  );
}

export default App;
