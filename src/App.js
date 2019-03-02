import React, { Component } from 'react';
import back_card from './img/back_card-10pc.png';
import './App.css';
import Card from './Card';

class App extends Component {
  state={
    deck:[{name:"00-The_Fool-10pc", number:"00", src:"./img/00-The_Fool-10pc.png"},
          {name:"01-The_Magician-10pc", number:"0", src:"./img/01-The_Magician-10pc.png"},
          {name:"02-The_High_Priestess-10pc", number:"0", src:"./img/02-The_High_Priestess-10pc.png"},
          {name:"03-The_Empress-10pc", number:"03", src:"./img/03-The_Empress-10pc.png"},
          {name:"04-The_Emperor-10pc", number:"04", src:"./img/04-The_Emperor-10pc.png"},
          {name:"05-The_Hierophant-10pc", number:"05", src:"./img/05-The_Hierophant-10pc.png"},
          {name:"06-The_Lovers-10pc", number:"06", src:"./img/06-The_Lovers-10pc.png"},
          {name:"07-The_Chariot-10pc", number:"06", src:"./img/07-The_Chariot-10pc.png"},
          {name:"08-Strength-10pc", number:"0", src:"./img/08-Strength-10pc.png "},
          {name:"09-The_Hermit-10pc", number:"0", src:"./img/09-The_Hermit-10pc.png "},
          {name:"10-Wheel_of_Fortune-10pc", number:"10", src:"./img/10-Wheel_of_Fortune-10pc.png"},
          {name:"11-Justice-10pc", number:"11", src:"./img/11-Justice-10pc.png "},
          {name:"12-The_Hanged_man-10pc", number:"13", src:"./img/12-The_Hanged_man-10pc.png "},
          {name:"13-Death-10pc", number:"13", src:"./img/13-Death-10pc.png "},
          {name:"14-Temperance-10pc", number:"14", src:"./img/14-Temperance-10pc.png "},
          {name:"15-The_Devil-10pc", number:"15", src:"./img/15-The_Devil-10pc.png"},
          {name:"16-The_Tower-10pc", number:"16", src:"./img/16-The_Tower-10pc.png"},
          {name:"17-The_Star-10pc", number:"17", src:"./img/17-The_Star-10pc.png"},
          {name:"18-The_Moon-10pc", number:"18", src:"./img/18-The_Moon-10pc.png"},
          {name:"19-The_Sun-10pc", number:"19", src:"./img/19-The_Sun-10pc.png"},
          {name:"20-Judgement-10pc", number:"20", src:"./img/20-Judgement-10pc.png"},
          {name:"21-The_World-10pc", number:"21", src:"./img/21-The_World-10pc.png"},]           
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={back_card} className="Card-back" alt="back_card" />
          <p>
            Mystical Tarot
          </p>
          <a
            className="Draw_card"
            href="#"
            target="_blank"
            rel="deck"
          >
            Draw a Card
          </a>
        </header>
        <div className="deck">
            <ul className="deck-grid">
            {this.state.deck.map((card, index) => (
                <li key={index}>
                <Card name={card.name} src={card.src}/>
                </li>
              ))}
            </ul>
          </div>
      </div>
    );
  }
  click_image(){
    
  }
}

export default App;
