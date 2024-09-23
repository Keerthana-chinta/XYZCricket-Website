import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaseballBall, faUserPlus, faUsers, faTrophy } from '@fortawesome/free-solid-svg-icons';
import cricketBg from '../assets/cricket-bg.jpg';
import aboutImage from '../assets/cricket-icon.jpg';
import historyImage from '../assets/History-Group-Icon.png';

const Tooltip = ({ text, visible }) => {
  return (
    <div
      className={`tooltip ${visible ? 'visible' : ''}`}
      style={{
        position: 'absolute',
        backgroundColor: 'black',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '4px',
        whiteSpace: 'nowrap',
        zIndex: 1000,
      }}
    >
      {text}
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHistoryFlipped, setIsHistoryFlipped] = useState(false);
  const [tooltipText, setTooltipText] = useState('');
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleHistoryFlip = () => {
    setIsHistoryFlipped(!isHistoryFlipped);
  };

  const handleMouseEnter = (text) => {
    setTooltipText(text);
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div
      className="bg-cover bg-center flex flex-col text-center relative"
      style={{
        backgroundImage: `url(${cricketBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="flex flex-col justify-center items-center z-10 flex-grow">
        <h1 className="title">
          Welcome to XYZ Cricket Tournaments
          <FontAwesomeIcon icon={faBaseballBall} className="spinning-icon" />
        </h1>
        <p className="mt-4 text-2xl text-black drop-shadow-md">
          Join the excitement. Play the game. Be the champion!
        </p>

        <nav className="nav relative">
          <button
            onClick={() => handleNavigate('/register')}
            onMouseEnter={() => handleMouseEnter('Register for upcoming tournaments')}
            onMouseLeave={handleMouseLeave}
            className="nav-button"
          >
            Register
            <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
          </button>
          <button
            onClick={() => handleNavigate('/teams')}
            onMouseEnter={() => handleMouseEnter('View registered teams')}
            onMouseLeave={handleMouseLeave}
            className="nav-button"
          >
            Teams
            <FontAwesomeIcon icon={faUsers} className="mr-2" />
          </button>
          <button
            onClick={() => handleNavigate('/tournaments')}
            onMouseEnter={() => handleMouseEnter('Explore available tournaments')}
            onMouseLeave={handleMouseLeave}
            className="nav-button"
          >
            Tournaments
            <FontAwesomeIcon icon={faTrophy} className="mr-2" />
          </button>
          <Tooltip text={tooltipText} visible={tooltipVisible} />
        </nav>
      </div>

      <div className="floating-card-container">
        <div
          className={`flip-card ${isFlipped ? 'flipped' : ''}`}
          onClick={handleFlip}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h2>About Us</h2>
              <img src={aboutImage} alt="Cricket Organization" className="card-image" />
            </div>
            <div className="flip-card-back">
              <p>
                XYZ Organization is a sports organization dedicated to conducting cricket tournaments in diverse formats.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`flip-card ${isHistoryFlipped ? 'flipped' : ''}`}
          onClick={handleHistoryFlip}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h2>Our History</h2>
              <img src={historyImage} alt="History of Organization" className="card-image" />
            </div>
            <div className="flip-card-back">
              <p>
                Founded in 2010, XYZ Organization has been at the forefront of promoting cricket.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        &copy; 2024 XYZ Organization. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;