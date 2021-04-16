import $ from 'jquery';
import './style.scss';

let sec = 0;

setInterval(() => {
  sec += 1;
  $('#main').html(`You have been on this page for ${sec} seconds.`);
}, 1000);
