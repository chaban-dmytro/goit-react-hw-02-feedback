// import PropTypes from 'prop-types';
// import css from './FriendList.module.css';

import { Component } from 'react';

export class Feedbacks extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  counter = ( event ) => {
    this.setState( ( {good, neutral, bad} ) => {
      if ( event.target.textContent === "good" ) {
        return {
          good: good + 1
        }
      } else if ( event.target.textContent === "neutral" ) {
        return {
          neutral: neutral + 1
        }
      } else if ( event.target.textContent === "bad" ) {
        return {
          bad: bad + 1
        }
      }
    })
  }

  render() {
  return (
      <div className="wrapper">
        <p className="title">Please leave feedback</p>
        <ul className="items">
          <li className="item">
            <button className="button" type="button" onClick={this.counter}>good</button>
          </li>
          <li className="item">
            <button className="button" type="button" onClick={this.counter}>neutral</button>
          </li>
          <li className="item">
            <button className="button" type="button" onClick={this.counter}>bad</button>
          </li>
      </ul>
      <p className="title">Statistic</p>
      <ul className="items">
        <li className="item">Good: {this.state.good}</li>
        <li className="item">Netural: {this.state.neutral}</li>
        <li className="item">Bad: {this.state.bad}</li>
      </ul>
      </div>
    )
  }
}


// function counter(event) {
//   console.log( 'click' );
//   console.log(event.children);
// }

// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
// }



// FriendsList.propTypes = {
//   avatar: PropTypes.string,
//   name: PropTypes.string,
//   isOnline: PropTypes.bool,
//   id: PropTypes.number,
//   children: PropTypes.element,
// }