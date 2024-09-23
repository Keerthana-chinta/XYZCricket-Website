import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../Tournament.css';

const tournaments = [
  { 
    id: 1, 
    name: 'T20 Blast', 
    date: 'October 15, 2024', 
    image: require('../assets/t20.png'),
    details: 'The T20 Blast is an exciting cricket tournament featuring top teams competing in a fast-paced T20 format. It offers entertainment for fans with its thrilling matches and explosive performances.'
  },
  { 
    id: 2, 
    name: 'Super Sixes', 
    date: 'November 22, 2024', 
    image: require('../assets/super-sixes.png'),
    details: 'Super Sixes is a high-energy tournament that showcases the best players in short, six-over matches. The tournament is known for its quick-fire action, making it one of the most popular events among cricket fans.'
  },
  { 
    id: 3, 
    name: 'Cricket World Cup', 
    date: 'December 9, 2024', 
    image: require('../assets/world-cup.png'),
    details: 'The Cricket World Cup is the pinnacle of international cricket. Held every four years, this tournament features the top nations competing for the prestigious World Cup trophy in the 50-over format.'
  },
  { 
    id: 4, 
    name: 'Champions Trophy', 
    date: 'September 1, 2024', 
    image: require('../assets/champions-trophy.png'),
    details: 'The Champions Trophy brings together the best teams in a thrilling contest for the trophy in ODI format.'
  },
  { 
    id: 5, 
    name: 'Asia Cup', 
    date: 'August 15, 2024', 
    image: require('../assets/Asia-Cup.jpeg'),
    details: 'The Asia Cup features top Asian teams competing for regional supremacy in the ODI format.'
  },
];

const Tournaments = () => {
  const [currentTournamentIndex, setCurrentTournamentIndex] = useState(0);
  const [selectedTournament, setSelectedTournament] = useState(null);

  useEffect(() => {
    document.body.classList.add('tournaments-page');
    return () => {
      document.body.classList.remove('tournaments-page');
    };
  }, []);

  const handleViewDetails = (tournament) => {
    setSelectedTournament(selectedTournament === tournament ? null : tournament);
  };

  const handleNext = () => {
    if (currentTournamentIndex + 3 < tournaments.length) {
      setCurrentTournamentIndex(currentTournamentIndex + 3);
    }
  };

  const handlePrevious = () => {
    if (currentTournamentIndex > 0) {
      setCurrentTournamentIndex(currentTournamentIndex - 3);
    }
  };

  return (
    <div className="tournament-container">
      {currentTournamentIndex === 0 && (
        <>
          <h1 className="title">
            Upcoming Tournaments 
            <FontAwesomeIcon icon={faTrophy} className="tournament-icon gold-icon" />
          </h1>
          <div className="tournament-grid">
            {tournaments.slice(0, 3).map((tournament) => (
              <div key={tournament.id} className="tournament-card">
                <img 
                  src={tournament.image} 
                  alt={tournament.name} 
                  className="tournament-image" 
                />
                <h2 className="tournament-name">{tournament.name}</h2>
                <p className="tournament-date">Date: {tournament.date}</p>
                <button 
                  className="view-details-button" 
                  onClick={() => handleViewDetails(tournament)}
                >
                  {selectedTournament === tournament ? 'Hide Details' : 'View Details'}
                </button>
                {selectedTournament === tournament && (
                  <div className="tournament-details">
                    <p>{tournament.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {currentTournamentIndex >= 3 && (
        <>
          <h1 className="title">Previous Leagues
          <FontAwesomeIcon icon={faTrophy} className="tournament-icon gold-icon" />
          </h1>
          <div className="tournament-grid">
            {tournaments.slice(3).map((tournament) => (
              <div key={tournament.id} className="tournament-card">
                <img 
                  src={tournament.image} 
                  alt={tournament.name} 
                  className="tournament-image" 
                />
                <h2 className="tournament-name">{tournament.name}</h2>
                <p className="tournament-date">Date: {tournament.date}</p>
                <button 
                  className="view-details-button" 
                  onClick={() => handleViewDetails(tournament)}
                >
                  {selectedTournament === tournament ? 'Hide Details' : 'View Details'}
                </button>
                {selectedTournament === tournament && (
                  <div className="tournament-details">
                    <p>{tournament.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      <div className="navigation-buttons">
        <button 
          className="prev-button" 
          onClick={handlePrevious}
          disabled={currentTournamentIndex === 0}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button 
          className="next-button" 
          onClick={handleNext}
          disabled={currentTournamentIndex + 3 >= tournaments.length}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Tournaments;