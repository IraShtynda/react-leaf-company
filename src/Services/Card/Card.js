import React from "react";
import('./Card.css')

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <img className="card-image" src={this.props.image} />
                <h3 className="card-title">{this.props.title}</h3>
                <p className="card-description">{this.props.description}</p>
            </div >
        );
    }

}

export default Card;