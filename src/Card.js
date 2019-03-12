import React, {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.showCard = this.showCard.bind(this);
    }

    showCard(card) {
        if(this.props.card.open==="false"){
            this.props.openCard(this.props.card, "true");
        }
        else if(this.props.card.open==="true"){
            this.props.openCard(this.props.card, "false");
        }
        
    }

    render = () => {
       
        return <div className="card-grid">
            <div onClick={ () => this.showCard(this.props.card) }>
                <img alt={this.props.card.name} className="card" src={require(`./img/${this.props.card.open==="false"?this.props.card.back:this.props.card.name}.png`)} />
            </div>
        </div>
    }

}

export default Card;