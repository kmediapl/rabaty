import React, { Component } from 'react';
import logo from './logo.svg';
import Obrazek from './Components/Obrazek';
import './App.css';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import firebase from './firebase.js';

class App extends Component {
  render() {
    const funkcja = (x) => {
      return x * x;
    }
const test = {
  dupa: '123',
  tes: 'Tekst jeden drugi',
  imieinazwisko: 'Łukasz Kwiatkowski'
}

// const imie = (imieinazwisko) =>{
//   if (imieinazwisko) {
//     return imieinazwisko.split(' ')[1]
//   }
// }

const imie = (imieinazwisko) => imieinazwisko.split(' ')[0];

const ileLiter = (imieinazwisko) => imieinazwisko.length;
const test2 = test.tes.split(' ')[2];
const razem = () => test.tes.concat(test.imieinazwisko);


const nnn = {
  numbers: ['32','53','29'],
  przez: 4,
  numeryPrzez() {
    return nnn.numbers.map((ne) => {

      return ne * this.przez;
    });
  }
}
let licznik = 0;
const dodaj = () => {
  licznik++;
  pokaz();
}
const dasdas = {
  
}
const odejmij = () => {
  licznik--;
  console.log('odejmij');
}
const reset = () => {
  licznik = 0;
  console.log('reset');
}
const pokaz = () => {
const mmm = (
  <div>
    <h1>Licznik : {licznik}</h1>
    <button onClick={dodaj}>+1</button>
<button onClick={odejmij}>-1</button>
<button onClick={reset}>reset</button>
  </div>

)
}


    return (

      <div className="App">
          <h1>{test.dupa}</h1>
          <h2>{test2}</h2>
          {test.tes.split(' ')[2]}
          {console.log(funkcja(12))}
{imie('Łukasz Kwiatkowski')}
{ileLiter('Łukasz Kwiatkowski')}
{razem()}
{mmm}
      </div>
    );
  }
}

export default App;
