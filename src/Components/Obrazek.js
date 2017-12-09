import React from 'react';
import Wartoscpromocji from './Wartoscpromocji'
import Kategorie from './Kategorie'
import ReactStars from 'react-stars'
import { Router, Route, Switch } from 'react-router'

const style={
  backgroundColor: '#ff0000',
  minHeight: "200px"
}

const ratingChanged = (newRating) => {
  console.log(newRating)
}

const Obrazek = (props) => (
  <div>
  <div className="obrazek" style={style}>
    <Kategorie />
    <Wartoscpromocji />
    <p>Nazwa promocji</p>
  </div>
<div>
  <p>Kto to robi: {props.nazwaRabatu}</p>
  <ReactStars onChange={ratingChanged} count="6" />
</div>
<button>Zobacz więcej</button>

  </div>
);

export default Obrazek;
