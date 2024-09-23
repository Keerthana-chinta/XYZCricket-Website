import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GiCricketBat, GiTrophyCup } from "react-icons/gi";
import { BiSolidCricketBall } from "react-icons/bi";
import { FaUser, FaEnvelope, FaPhone, FaUsers, FaVenusMars, FaTrophy, FaClipboardCheck, FaInfoCircle } from 'react-icons/fa'; 
import '../RegistrationForm.css';

import backgroundImage from '../assets/tournamentvs.jpg';
import step1Background from '../assets/playeranimation.gif';
import step2Background from '../assets/team.png';
import step3Background from '../assets/cricketplayerground.jpg';

const RegistrationForm = () => {
  useEffect(() => {
    document.body.classList.add('registration-page');
    return () => {
      document.body.classList.remove('registration-page');
    };
  }, []);

  const [stage, setStage] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: 'Select Gender',
    team: '',
    captain: '',
    tournament: '',
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});

  const tournaments = [
    'Select Tournament',
    'T20 Blast',
    'Super Sixes',
    'Cricket World Cup',
  ];

  const handleNext = () => {
    const validationErrors = validate(stage);
    if (Object.keys(validationErrors).length === 0) {
      setStage(stage + 1);
    } else {
      setErrors(validationErrors);
    }
  };

  const handlePrev = () => {
    setErrors({});
    setStage(stage - 1);
  };

  const handleSubmit = async () => {
    if (!formData.termsAccepted) {
      alert('You must accept the terms and conditions before submitting.');
      return;
    }

    try {
      await axios.post('https://reqres.in/api/user', formData);
      alert('Registration Successful!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        gender: 'Select Gender',
        team: '',
        captain: '',
        tournament: '',
        termsAccepted: false,
      });
      window.location.href = '/';
    } catch (error) {
      console.error('Error submitting the form', error);
    }
  };

  const validate = (currentStage) => {
    const validationErrors = {};
    if (currentStage === 1) {
      if (!formData.name) {
        validationErrors.name = "Name is required.";
      } else if (formData.name.length < 2) {
        validationErrors.name = "Name must be at least 2 characters.";
      }

      if (!formData.email) {
        validationErrors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        validationErrors.email = "Email is invalid.";
      }

      if (!formData.phone) {
        validationErrors.phone = "Phone number is required.";
      } else if (!/^\d{10}$/.test(formData.phone)) {
        validationErrors.phone = "Phone number must be 10 digits.";
      }

      if (formData.gender === 'Select Gender') {
        validationErrors.gender = "Please select a gender.";
      }
    }
    if (currentStage === 2) {
      if (!formData.team) {
        validationErrors.team = "Team name is required.";
      }
      if (!formData.captain) {
        validationErrors.captain = "Team captain name is required.";
      }
      if (formData.tournament === 'Select Tournament') {
        validationErrors.tournament = "Please select a tournament.";
      }
    }
    if (currentStage === 3 && !formData.termsAccepted) {
      validationErrors.termsAccepted = "You must accept the terms and conditions.";
    }
    return validationErrors;
  };

  // Set background image based on stage
  const getBackgroundImage = () => {
    switch (stage) {
      case 1:
        return step1Background;
      case 2:
        return step2Background;
      case 3:
        return step3Background;
      default:
        return backgroundImage;
    }
  };

  return (
    <div className="my-10 p-6" style={{ backgroundImage: `url(${getBackgroundImage()})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="intro-container" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
        <h2 className="intro-title">Welcome to the Cricket Tournament Registration!</h2>
        <div className="introduction-icons">
          <GiCricketBat className="cricket-icon" />
          <BiSolidCricketBall className="cricket-icon" />
          <GiTrophyCup className="cricket-icon" />
        </div>
        <p className="intro-description">
          Join us for an exciting opportunity to compete in some of the most thrilling sports tournaments! 
          Whether you're a seasoned player or a newcomer, we have a spot for you. 
          Please fill out the registration form below to secure your place in one of the available tournaments.
          Let’s get started and make your sports journey unforgettable!
        </p>
      </div>
      <div className="registration-container">
        <div className="registration-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
          {stage === 1 && (
            <div>
              <h2 className="step-title"><FaInfoCircle /> Personal Information</h2>
              <div className="input-group">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-field"
                />
              </div>
              {errors.name && <p className="error-message">{errors.name}</p>}
              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-field"
                />
              </div>
              {errors.email && <p className="error-message">{errors.email}</p>}
              <div className="input-group">
                <FaPhone className="input-icon" />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="input-field"
                />
              </div>
              {errors.phone && <p className="error-message">{errors.phone}</p>}
              <div className="input-group">
                <FaVenusMars className="input-icon" />
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="input-field"
                >
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              {errors.gender && <p className="error-message">{errors.gender}</p>}
              <button onClick={handleNext} className="button-next">Next</button>
            </div>
          )}
          {stage === 2 && (
            <div>
              <h2 className="step-title"><FaUsers /> Team Information</h2>
              <div className="input-group">
                <FaUsers className="input-icon" />
                <input
                  type="text"
                  placeholder="Team Name"
                  value={formData.team}
                  onChange={(e) => setFormData({ ...formData, team: e.target.value })}
                  className="input-field"
                />
              </div>
              {errors.team && <p className="error-message">{errors.team}</p>}
              <div className="input-group">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  placeholder="Team Captain"
                  value={formData.captain}
                  onChange={(e) => setFormData({ ...formData, captain: e.target.value })}
                  className="input-field"
                />
              </div>
              {errors.captain && <p className="error-message">{errors.captain}</p>}
              <div className="input-group">
                <FaTrophy className="input-icon" />
                <select
                  value={formData.tournament}
                  onChange={(e) => setFormData({ ...formData, tournament: e.target.value })}
                  className="input-field"
                >
                  {tournaments.map((tournament) => (
                    <option key={tournament}>{tournament}</option>
                  ))}
                </select>
              </div>
              {errors.tournament && <p className="error-message">{errors.tournament}</p>}
              <button onClick={handlePrev} className="button-prev">Back</button>
              <button onClick={handleNext} className="button-next">Next</button>
            </div>
          )}
          {stage === 3 && (
            <div>
              <h2 className="step-title"><FaClipboardCheck /> Terms and Conditions</h2>
              <p className="terms-description">
                Please read and accept the terms and conditions to proceed.
              </p>
              <h3>Review Your Information</h3>
              <div className="review-container">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
                <p><strong>Gender:</strong> {formData.gender}</p>
                <p><strong>Team Name:</strong> {formData.team}</p>
                <p><strong>Team Captain:</strong> {formData.captain}</p>
                <p><strong>Tournament:</strong> {formData.tournament}</p>
              </div>
              <div className="input-group">
              <input
                  type="checkbox"
                  checked={formData.termsAccepted}
                  onChange={() => setFormData({ ...formData, termsAccepted: !formData.termsAccepted })}
                  className="checkbox-field"
                />
                <label>I accept the terms and conditions</label>
              </div>
              {errors.termsAccepted && <p className="error-message">{errors.termsAccepted}</p>}
              <button onClick={handlePrev} className="button-prev">Back</button>
              <button onClick={handleSubmit} className="button-next">Submit</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;