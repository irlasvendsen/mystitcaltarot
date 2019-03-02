import React, {Component} from 'react';

class Card extends Component {
  
    render = () => {
        let img_name = this.props.name;
        return <div className="card">
        <div className="card">
            <img src={require(`./img/${img_name}.png`)} />
        </div>
        
        </div>
    }
}

export default Card;