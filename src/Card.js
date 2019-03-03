import React, {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.showCard = this.showCard.bind(this);
       
    }
    state = {
        img_name: this.props.card.back,
        open: this.props.card.open
    }

    showCard(card) {
        if(this.state.open==="false"){
            this.setState({ img_name: this.props.card.name, open: "true"});
        }
        if(this.state.open==="true"){
            this.setState({ img_name: this.props.card.back, open:"false"});
        }
    }

    render = () => {
       
        return <div className="card-grid">
        <a href="#" onClick={ () => this.showCard(this.props.card) }>
            <img alt={this.state.card.name} className="card" src={require(`./img/${this.state.img_name}.png`)} /></a>
        </div>
    }

}

export default Card;