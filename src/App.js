import React, { Component } from 'react';
import './App.css';
import Card from './Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.shuffledCards = this.shuffledCards.bind(this);
    this.shuffleReload = this.shuffleReload.bind(this);
    this.openCard = this.openCard.bind(this);
    this.updateCardShelf = this.updateCardShelf.bind(this);
    this.spreadCards = this.spreadCards.bind(this);
    this.stackCards = this.stackCards.bind(this);
    this.showAllCards = this.showAllCards.bind(this);
    this.handleOptionisFullArcano = this.handleOptionisFullArcano.bind(this);
}
showAllCards(){
 
    let newDeck = [];
    let show_all = this.state.show_cards;
    let name_button_all_cards = this.state.name_button_all_cards;
    Array.prototype.forEach.call(this.state.deck, function(card) {
      if(!this.state.show_cards){
        card.open = true;
        newDeck.push(card);
        show_all = true;
        name_button_all_cards = "Close All Cards";
      }
      else{
        card.open = false;
        newDeck.push(card);
        show_all = false;
        name_button_all_cards = "Reveal All Cards";
      }
    },  this);
    this.setState({deck: newDeck, show_cards: show_all, name_button_all_cards: name_button_all_cards });
  
}
spreadCards(){
  if(this.state.spread)
  {
    this.stackCards();
  }
  else{
    let elem = document.getElementsByClassName('card-grid');
    Array.prototype.forEach.call(elem, function(card) {
      card.classList.add("spread");
    });
    this.setState({spread: true, name_button_spread: "Stack Cards"});
  }
}
stackCards(){
  let elem = document.getElementsByClassName('card-grid');
  Array.prototype.forEach.call(elem, function(card) {
    card.classList.remove("spread");
  });
  
  this.setState({spread: false, name_button_spread: "Spread Cards"});
}
openCard(card, isOpened){
  console.log("Open card"+card.name+" open="+isOpened);
  let selectedCard = this.state.deck.filter((c)=> c.name === card.name);
  console.log("selectcard"+selectedCard[0]);
  if( selectedCard && selectedCard.length > 0){
    selectedCard[0].open = isOpened;
    console.log("card: "+selectedCard[0].name+" isOpen? "+isOpened);
  }
  let newDeck = this.state.deck;
  this.setState({deck:   newDeck})
}
shuffledCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
  return cards;
}
shuffleReload(cards){
  if(!this.state.show_cards){
    for (let i = cards.length - 1 ; i >= 0; i--) {
      cards[i].open = false;
    }
  }
  this.setState({deck: this.shuffledCards(cards)});
}
handleOptionisFullArcano(isFull){ 
  if(isFull){
    
    let fullDeck = [];
    fullDeck = fullDeck.concat(this.state.major).concat(this.state.minor);
    
    this.setState({deck : fullDeck, isFull:true });
  }else{
    this.setState({deck : this.state.major, isFull:false});
  }
}
updateCardShelf(value){

}
componentWillMount = () => {
  let fullDeck = this.state.major.concat(this.state.minor);
  this.setState({deck : this.shuffledCards(fullDeck)});

}
  state={
    isFull:true,
    name_button_all_cards:"Reveal All Cards",
    show_cards: false,
    spread : false,
    name_button_spread : "Spread Cards",
    img_name: "back_card-10pc",
    major:[{name:"00-The_Fool-10pc", open:false, number:"00", src:"./img/00-The_Fool-10pc.png", back:"back_card-10pc"},
          {name:"01-The_Magician-10pc",open:false, number:"0", src:"./img/01-The_Magician-10pc.png", back:"back_card-10pc"},
          {name:"02-The_High_Priestess-10pc",open:false, number:"0", src:"./img/02-The_High_Priestess-10pc.png", back:"back_card-10pc"},
          {name:"03-The_Empress-10pc", open:false, number:"03", src:"./img/03-The_Empress-10pc.png", back:"back_card-10pc"},
          {name:"04-The_Emperor-10pc", open:false,number:"04", src:"./img/04-The_Emperor-10pc.png", back:"back_card-10pc"},
          {name:"05-The_Hierophant-10pc",open:false, number:"05", src:"./img/05-The_Hierophant-10pc.png", back:"back_card-10pc"},
          {name:"06-The_Lovers-10pc",open:false, number:"06", src:"./img/06-The_Lovers-10pc.png", back:"back_card-10pc"},
          {name:"07-The_Chariot-10pc",open:false, number:"06", src:"./img/07-The_Chariot-10pc.png", back:"back_card-10pc"},
          {name:"08-Strength-10pc",open:false, number:"0", src:"./img/08-Strength-10pc.png", back:"back_card-10pc"},
          {name:"09-The_Hermit-10pc",open:false, number:"0", src:"./img/09-The_Hermit-10pc.png", back:"back_card-10pc"},
          {name:"10-Wheel_of_Fortune-10pc", open:false,number:"10", src:"./img/10-Wheel_of_Fortune-10pc.png", back:"back_card-10pc"},
          {name:"11-Justice-10pc", open:false,number:"11", src:"./img/11-Justice-10pc.png", back:"back_card-10pc"},
          {name:"12-The_Hanged_man-10pc", open:false,number:"13", src:"./img/12-The_Hanged_man-10pc.png", back:"back_card-10pc"},
          {name:"13-Death-10pc", open:false,number:"13", src:"./img/13-Death-10pc.png", back:"back_card-10pc"},
          {name:"14-Temperance-10pc",open:false, number:"14", src:"./img/14-Temperance-10pc.png", back:"back_card-10pc"},
          {name:"15-The_Devil-10pc",open:false, number:"15", src:"./img/15-The_Devil-10pc.png", back:"back_card-10pc"},
          {name:"16-The_Tower-10pc",open:false, number:"16", src:"./img/16-The_Tower-10pc.png", back:"back_card-10pc"},
          {name:"17-The_Star-10pc",open:false, number:"17", src:"./img/17-The_Star-10pc.png", back:"back_card-10pc"},
          {name:"18-The_Moon-10pc",open:false, number:"18", src:"./img/18-The_Moon-10pc.png", back:"back_card-10pc"},
          {name:"19-The_Sun-10pc",open:false, number:"19", src:"./img/19-The_Sun-10pc.png", back:"back_card-10pc"},
          {name:"20-Judgement-10pc",open:false, number:"20", src:"./img/20-Judgement-10pc.png", back:"back_card-10pc"},
          {name:"21-The_World-10pc",open:false, number:"21", src:"./img/21-The_World-10pc.png", back:"back_card-10pc"},
        
        ],
        minor:{name:"21-The_World-10pc", open:false, number:"21", src:"./img/21-The_World-10pc.png", back:"back_card-10pc"},
        deck:[{}]          
  }
  render() {
    return (
      <div className="App">
        <header className="App-header"> 
          <section className="menu-panel">
            <div><button onClick={() => this.shuffleReload(this.state.deck)}>
              <i className="fas fa-redo-alt"></i>
              </button>
            </div>
            <div><button onClick={() => this.spreadCards()}>
              {this.state.name_button_spread}
              </button>
            </div>
            <div><button onClick={() => this.showAllCards()}>
              {this.state.name_button_all_cards}
              </button>
            </div>
            <div><label htmlFor="fulldeck">
              <input onChange={() => this.handleOptionisFullArcano(true)} checked={this.state.isFull} type="radio"  id="fulldeck" value="fulldeck" />
               Major and Minor Arcano</label>
            </div>
            <div><label htmlFor="MajorArcano">
              <input onChange={() => this.handleOptionisFullArcano(false)} checked={!this.state.isFull} type="radio" id="MajorArcano" value="MajorArcano" /> 
              Major Arcano</label>
            </div>
            <div>
              <select onChange={(e) => this.updateCardShelf(e.target.value)}>
              <option>Celtic Cross</option>
              <option>Spiritual Guidance</option>
              <option>Career Path</option>
              <option>Three Card</option></select>
            </div>
            
          </section>
  
        </header>
          <div className="deck">
            <ul className="deck-grid">
            {this.state.deck.map((card, index) => (
                <li key={index}>
                <Card openCard={this.openCard} img_name={this.state.img_name} name={card.name} src={card.src} card={card}/>
                </li>
              ))}
            </ul>
          </div>
      </div>
      
    );
  }
}
export default App;
