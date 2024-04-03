import React from 'react';
import {ButtonComponent} from '../../components/Button/ButtonComponent';



export const HomeView = () => {

  const clickMeRed = () => { 
    console.log("red");
  }
  
  const clickMeBlue = () => {
    console.log("blue");
  }



  return (
    <div>
      <h1>Pizza</h1>
      <ButtonComponent onClick={clickMeRed} className="button-red">Click</ButtonComponent>
      <ButtonComponent onClick={clickMeBlue} className="button-blue">Click</ButtonComponent>
    </div>
  )
}