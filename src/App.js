import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import * as CardAPI from './CardAPI';

class App extends Component {
  constructor(props) {
    super(props);
    this.shuffledCards = this.shuffledCards.bind(this);
    this.shuffleReload = this.shuffleReload.bind(this);
    this.openCard = this.openCard.bind(this);
    this.updateCardShelf = this.updateCardShelf.bind(this);
    this.stackOrSpreadCards = this.stackOrSpreadCards.bind(this);
    this.showOrCloseAllCards = this.showOrCloseAllCards.bind(this);
    this.handleOptionisFullArcano = this.handleOptionisFullArcano.bind(this);
}
showOrCloseAllCards(isShowCards, deck){
  let newDeck = []; 
  let name_button_all_cards = this.state.name_button_all_cards;
  Array.prototype.forEach.call(deck, function(card) {
    if(isShowCards){
      card.open = true;
      newDeck.push(card);
      name_button_all_cards = "Close All Cards";
    }
    else{
      card.open = false;
      newDeck.push(card);
      name_button_all_cards = "Reveal All Cards";
    }
  },  this);
  this.setState({deck: newDeck, show_cards: isShowCards, name_button_all_cards: name_button_all_cards });
}

stackOrSpreadCards(isSpread, deck){
  let elem = document.getElementsByClassName('card-grid');
  Array.prototype.forEach.call(elem, function(card) {
    if(isSpread){
      card.classList.add("spread");
      
    }
    else{
      card.classList.remove("spread");
      
    }
  });

  if(isSpread){
    this.setState({spread: isSpread, name_button_spread: "Stack Cards"});
  }else{
    this.setState({spread: isSpread, name_button_spread: "Spread Cards"});
  }
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
  if(cards !== undefined && cards !== null){
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
  }
  return cards;
}
shuffleReload(cards){
  if(!this.state.show_cards && cards !== undefined && cards !== null){
    for (let i = cards.length - 1 ; i >= 0; i--) {
      cards[i].open = false;
    }
  }
  this.setState({deck: this.shuffledCards(cards)});
}
handleOptionisFullArcano(isFull){ 
  let deck;
  if(isFull){
      deck = this.state.fulldeck;
      this.setState({
        deck : deck,
        isFull: true 
      });
  }else{
    deck = this.state.fulldeck.filter(card => card.arcana === "major")
    this.setState({deck : deck, isFull:false});
  }
  this.showOrCloseAllCards(false, deck);
  this.stackOrSpreadCards(false, deck);
}
updateCardShelf(value){

}

componentDidMount = () => {
  CardAPI.getAll().then((cardList) => {
          let deck = this.shuffledCards(cardList);
          this.setState({
            fulldeck : deck,
            deck : deck
          });
        });
}

  state={
    isFull:true,
    name_button_all_cards:"Reveal All Cards",
    show_cards: false,
    spread : false,
    name_button_spread : "Spread Cards",
    img_name: "back_card-10pc",
    deck:[{}],
    fulldeck:[{}]         
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
            <div><button onClick={() => this.stackOrSpreadCards(!this.state.spread, this.state.deck)}>
              {this.state.name_button_spread}
              </button>
            </div>
            <div><button onClick={() => this.showOrCloseAllCards(!this.state.show_cards, this.state.deck)}>
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
            {this.state.deck!= null && this.state.deck.map((card, index) => (
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
