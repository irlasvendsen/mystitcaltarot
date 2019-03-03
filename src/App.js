import React, { Component } from 'react';
import './App.css';
import Card from './Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.shuffledCards = this.shuffledCards.bind(this);
}
shuffledCards(cards) {
  let i = cards.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
  return cards;
}

componentDidMount = () => {
  this.setState({deck : this.shuffledCards(this.state.deck)});
}
  state={
    deck:[{name:"00-The_Fool-10pc", open:"false", number:"00", src:"./img/00-The_Fool-10pc.png", back:"back_card-10pc"},
          {name:"01-The_Magician-10pc",open:"false", number:"0", src:"./img/01-The_Magician-10pc.png", back:"back_card-10pc"},
          {name:"02-The_High_Priestess-10pc",open:"false", number:"0", src:"./img/02-The_High_Priestess-10pc.png", back:"back_card-10pc"},
          {name:"03-The_Empress-10pc", open:"false", number:"03", src:"./img/03-The_Empress-10pc.png", back:"back_card-10pc"},
          {name:"04-The_Emperor-10pc", open:"false",number:"04", src:"./img/04-The_Emperor-10pc.png", back:"back_card-10pc"},
          {name:"05-The_Hierophant-10pc",open:"false", number:"05", src:"./img/05-The_Hierophant-10pc.png", back:"back_card-10pc"},
          {name:"06-The_Lovers-10pc",open:"false", number:"06", src:"./img/06-The_Lovers-10pc.png", back:"back_card-10pc"},
          {name:"07-The_Chariot-10pc",open:"false", number:"06", src:"./img/07-The_Chariot-10pc.png", back:"back_card-10pc"},
          {name:"08-Strength-10pc",open:"false", number:"0", src:"./img/08-Strength-10pc.png", back:"back_card-10pc"},
          {name:"09-The_Hermit-10pc",open:"false", number:"0", src:"./img/09-The_Hermit-10pc.png", back:"back_card-10pc"},
          {name:"10-Wheel_of_Fortune-10pc", open:"false",number:"10", src:"./img/10-Wheel_of_Fortune-10pc.png", back:"back_card-10pc"},
          {name:"11-Justice-10pc", open:"false",number:"11", src:"./img/11-Justice-10pc.png", back:"back_card-10pc"},
          {name:"12-The_Hanged_man-10pc", open:"false",number:"13", src:"./img/12-The_Hanged_man-10pc.png", back:"back_card-10pc"},
          {name:"13-Death-10pc", open:"false",number:"13", src:"./img/13-Death-10pc.png", back:"back_card-10pc"},
          {name:"14-Temperance-10pc",open:"false", number:"14", src:"./img/14-Temperance-10pc.png", back:"back_card-10pc"},
          {name:"15-The_Devil-10pc",open:"false", number:"15", src:"./img/15-The_Devil-10pc.png", back:"back_card-10pc"},
          {name:"16-The_Tower-10pc",open:"false", number:"16", src:"./img/16-The_Tower-10pc.png", back:"back_card-10pc"},
          {name:"17-The_Star-10pc",open:"false", number:"17", src:"./img/17-The_Star-10pc.png", back:"back_card-10pc"},
          {name:"18-The_Moon-10pc",open:"false", number:"18", src:"./img/18-The_Moon-10pc.png", back:"back_card-10pc"},
          {name:"19-The_Sun-10pc",open:"false", number:"19", src:"./img/19-The_Sun-10pc.png", back:"back_card-10pc"},
          {name:"20-Judgement-10pc",open:"false", number:"20", src:"./img/20-Judgement-10pc.png", back:"back_card-10pc"},
          {name:"21-The_World-10pc",open:"false", number:"21", src:"./img/21-The_World-10pc.png", back:"back_card-10pc"}]           
  }
  render() {
    return (
      <div className="App">
        <header className="App-header"> 
        <div className="deck">
            <ul className="deck-grid">
            {this.state.deck.map((card, index) => (
                <li key={index}>
                <Card name={card.name} src={card.src} card={card}/>
                </li>
              ))}
            </ul>
          </div>
          </header>
      </div>
      
    );
  }
}
export default App;
