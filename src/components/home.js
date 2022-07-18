import React from 'react';
import homeimg from '../img/home.jpg';
import Packages from './packages';
import Projects from './projects';
import Book from './book';

const About = (props) => {
  return <div> All there is to know about me </div>;
};

const Home = () => {
  return (
    <div id="home" className="home-container">
      <div className="section-wrapper">
        <div id="home-wrapper">
          <img src={homeimg} className="home-img" alt="kitchen" />
          <div className="home_description">
            <h3> FEATURED PROJECT</h3>
            <div>
              <p> OCEANSIDE</p>
              <p> 2020</p>
              <p> interior and exterior</p>
            </div>
            <span> SEE PROJECT DETAILS </span>
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
