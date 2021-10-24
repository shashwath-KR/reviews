import React, {useState} from 'react';
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa';
import { Developers } from './data';

const Review = () => {
    const[index, setIndex] = useState(0);
    const{img, name, profession, About} = Developers[index]

    const chechNumber = (number) => {
         if(number > Developers.length -1) {
             return 0;
         }
         if(number < 0) {
           return  Developers.length - 1;
         }
            return number; 
    }

    const Next = () => {
        let newIndex = index + 1;
        setIndex(chechNumber(newIndex));
    }

    const Prev = () => {
        let newIndex = index - 1;
        setIndex(chechNumber(newIndex));
    }

    const Random = () => {
        let Profile= Math.floor(Math.random() * Developers.length)
        if (Profile === index) {
            Profile = index + 1
        } 
        setIndex(chechNumber(Profile))
    }

    return (
        <header className= 'tab tc pt4 pb5 bg-light-yellow mb3 mt5 shadow-1'>
          <img className= 'br-100 pb2' src= {img} alt= 'person' width= '180px' height= '180px'></img>
          <h2 className= 'pb1'>{name}</h2>
          <h4>{profession}</h4>
          <p className= 'pt3 ph4'>{About}</p>
           <div>
           <button onClick= {() => Prev()} style = {{color: 'blue'}} className= 'f4 pa1 ma3 b--dark-green bn '><FaChevronCircleLeft /></button>
           <button onClick= {() => Next()} style = {{color: 'blue'}} className= 'f4 pa1 ma3 b--dark-green bn '><FaChevronCircleRight /></button>
           </div>
           <button onClick = {() => Random()} className= 'f5 ph3 pv1 bg-lightest-blue bn br4'>surprice me</button>
         </header>
    )
}

export default Review;