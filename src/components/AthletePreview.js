import React from 'react';
import { Link } from 'react-router';

export default class AthletePreview extends React.Component {
  render() {
    return (
      <Link to={`/athlete/${this.props.id}`}>
        <div className="athlete-preview">
          <img src={`img/${this.props.image}`}/>
          <h2 className="name">{this.props.name}</h2>
        </div>
      </Link>
    );
  }
}
