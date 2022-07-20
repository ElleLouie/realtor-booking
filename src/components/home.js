import React from 'react';
import homeimg from '../img/home.jpg';
import Packages from './packages';
import Projects from './projects';
import Book from './book';
import About from './about';

const Home = () => {
  return (
    <div className="home-container">
      <div className="section-wrapper">
        <div id="home-wrapper">
          <img src={homeimg} className="home-img" alt="kitchen" />
          <div className="home-description">
            <h3>FEATURED PROJECT</h3>
            <div className="home-description-wrapper">
              <div className="home-description-title">
                <h1>Classic & Modern</h1>
              </div>
              <div className="home-description-detail">
                <p> OCEANSIDE</p>
                <p> 2020</p>
                <p> interior and exterior</p>
                <span> SEE PROJECT DETAILS </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="section-wrapper"><About /></div>
      <div id="packages" className="section-wrapper"><Packages /></div>
      <div id="projects" className="section-wrapper"><Projects /></div>
      <div id="book" className="section-wrapper"><Book /></div>
    </div>
  );
};

export default Home;
