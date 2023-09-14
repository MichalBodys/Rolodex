import { Component } from 'react';
import './card.styles.css'

class Card extends Component {
  render() {
    const { name, email, id } = this.props.robot;
    return (
          <div className="card-container" key={id}>
            <img
              src={`https://robohash.org/${id}&size=180x180`}
              alt={`robot ${name}`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>

      )}


  }


export default Card