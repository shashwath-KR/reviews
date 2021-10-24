import React from 'react';
import './App.css';
import Review from './review';

function App(props) {
  return (
    <section className= 'container'>
      <h1 className= 'f1 ttu tc pt4 ma2'>Our Reviews</h1>
      <hr className= 'hr'></hr>
      <div>
          <Review  />
      </div>
    </section>
  )
}

export default App;
