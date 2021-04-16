import $ from 'jquery';
import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <div className="test">All the REACT are belong to us!</div>;

ReactDOM.render(<App />, document.getElementById('main'));

let sec = 0;

setInterval(() => {
  sec += 1;
  $('#main').html(`You have been on this page for ${sec} seconds.`);
}, 1000);
