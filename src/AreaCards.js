import React, {Component} from 'react';

class AreaCards extends Component {

    render = () => {
        return <div className="areaCards">
        <div>
        {this.props.openCards.map((card, index) => (
                <div key={index}>
                
                </div>
              ))}
        </div>
        </div>
    }
}

export default AreaCards;