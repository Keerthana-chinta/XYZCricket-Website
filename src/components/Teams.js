import React, { useState, useEffect } from 'react';
import indiaLogo from '../assets/India.png';
import usaLogo from '../assets/USA.png';
import australiaLogo from '../assets/Australia.png'; 
import { FaUsers } from 'react-icons/fa';
import '../Team.css';

const teamsData = [
  { 
    id: 1, 
    name: 'Team India', 
    description: 'India is renowned for its aggressive and fearless brand of cricket, excelling in all formats.', 
    logo: indiaLogo, 
    profile: 'Team India Profile: Known for producing some of the greatest cricket players, India has a rich cricketing history. From their world-class spinners to explosive batsmen, India dominates both home and away. Led by dynamic leadership, India is a top contender in international tournaments, with a strong blend of youth and experience.' 
  },
  { 
    id: 2, 
    name: 'Team USA', 
    description: 'USA Cricket is rapidly growing and making strides towards becoming a competitive force.', 
    logo: usaLogo, 
    profile: 'Team USA Profile: As a new entrant to the global cricket stage, Team USA is making significant progress. With a mix of domestic and international talent, they aim to qualify for major tournaments. USA’s cricket development programs and increasing participation are setting them up for future success.' 
  },
  { 
    id: 3, 
    name: 'Team Australia', 
    description: 'Australia has a storied history in cricket, known for their aggressive play and world-class players.', 
    logo: australiaLogo, 
    profile: 'Team Australia Profile: Australia is one of the most successful cricketing nations, consistently challenging for top honors. With a legacy of fierce fast bowlers and resilient batsmen, Australia’s cricketing prowess is recognized worldwide. Their never-give-up attitude makes them a feared opponent in every tournament they play.' 
  },
];

const Teams = () => {
  useEffect(() => {
    document.body.classList.add('teams-page');
    return () => {
      document.body.classList.remove('teams-page');
    };
  }, []);
  
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [viewProfileTeam, setViewProfileTeam] = useState(null);

  const handleViewProfile = (team) => {
    setViewProfileTeam(team);
  };

  return (
    <div className="my-10 p-6 bg-white shadow-lg rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
      <div className="intro-container">
        <h2 className="intro-title">Welcome to the Teams Page</h2>
        <p className="intro-description">
          Here you can find detailed information about various cricket teams, their profiles, and achievements. Click on a team to learn more!
        </p>
      </div>

      <div className="flex items-center justify-center mt-6">
        <h2 className="text-3xl font-semibold text-center">Teams</h2>
        <FaUsers className="input-icon" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {teamsData.map((team) => (
          <div key={team.id} className="team-card">
            <div 
              className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={() => setSelectedTeam(selectedTeam === team.id ? null : team.id)}
            >
              {/* Team Logo */}
              <img src={team.logo} alt={team.name} className="w-full h-32 object-cover rounded" />
              <h3 className="text-xl font-bold text-center mt-2">{team.name}</h3>
              {selectedTeam === team.id && (
                <div className="mt-2 p-4 bg-white border border-gray-200 rounded-lg shadow-md">
                  <p>{team.description}</p>
                  <div className="flex justify-center mt-4">
                    <button 
                      className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-400"
                      onClick={() => handleViewProfile(team)}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {viewProfileTeam && (
        <div className="mt-10 p-6 bg-gray-100 shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold text-center">{viewProfileTeam.name} Profile</h3>
          <p className="mt-4 text-center">{viewProfileTeam.profile}</p>
          <div className="flex justify-center mt-4">
            <button 
              className="bg-red-500 text-black rounded px-5 py-3 hover:bg-red-400"
              onClick={() => setViewProfileTeam(null)}
            >
              Close Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teams;
