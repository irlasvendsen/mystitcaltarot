import React, {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.showCard = this.showCard.bind(this);
    }

    showCard(card) {
        if(this.props.card.open===false){
            this.props.openCard(this.props.card, true);
        }
        else if(this.props.card.open===true){
            this.props.openCard(this.props.card, false);
        }
        
    }

    render = () => {
       
        return <div className="card-grid">
            <div onClick={ () => this.showCard(this.props.card) }>
                {console.log("card in cardjs: ")}
                {console.log(this.props.card.open)}
                {console.log(this.props.card.src)}
                {console.log(this.props.card.back)}
                <img alt={this.props.card.name} className="card" src={require(`${this.props.card.open?(this.props.card.open?this.props.card.src:this.props.card.back):"./img_small/back-card.jpg"}`)}   /> 
            </div>
        </div>
    }

}

export default Card;