import React, {Component} from 'react';

class AreaCards extends Component {

    render = () => {
        return <div className="areaCards">
        <div>
        {this.props.openCards.map((card, index) => (
                <div key={index}>
                <Card openCard={this.openCard} img_name={this.state.img_name} name={card.name} src={card.src} card={card}/>
                </div>
              ))}
        </div>
        </div>
    }
}

export default AreaCards;