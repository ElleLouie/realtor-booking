import React from 'react';
import homeimg from '../img/home.jpg';

const Home = () => {
  return (
    <div id="home">
      <img src={homeimg} alt="kitchen" />
      <div className="home_description">
        <h1> FEATURED PROJECT</h1>
        <p> OCEANSIDE</p>
        <p> 2020</p>
        <p> interior and exterior</p>
        <span> SEE PACKAGE DETAILS </span>
      </div>
    </div>
  );
};

export default Home;
