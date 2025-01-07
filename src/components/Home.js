import React from 'react';
import myPhoto from '../images/home.JPG';

function Home({ showCarat }) {
  return (
    <div className="page home">
      <header>Hey there! I'm Karen •ᴗ•</header>
      <div className="content">
        <div className="container">
        <img src={myPhoto} alt="Karen Huang" className="photo" />
          <ul>
            <li className="bullet-school">⟡ Computer science student @ <a href="https://cs.uwaterloo.ca/" target="_blank" rel="noopener noreferrer">UWaterloo</a>.</li>
            <li className="bullet-city">⟡ Based in Toronto, Canada.</li>
            <li className="bullet-work">
                ⟡ Previously worked at 
                <a href="https://withpersona.com/" target="_blank" rel="noopener noreferrer" className="link-persona"> Persona</a>,
                <a href="https://www.cookin.com/" target="_blank" rel="noopener noreferrer" className="link-cookin"> Cookin</a>,
                <a href="https://www.genesys.com/" target="_blank" rel="noopener noreferrer" className="link-genesys"> Genesys.</a>
            </li>
            <li className="bullet-sticker">⟡ Working on a <a href="https://www.instagram.com/kkogumakai/" target="_blank" rel="noopener noreferrer">sticker business</a> on the side!</li>
            <li className="bullet-scroll">⟡ Scroll down to learn more about me!</li>
          </ul>
        </div>
      </div>
      {showCarat && <div className="carat">⌄</div>}
    </div>
  );
}

export default Home;
