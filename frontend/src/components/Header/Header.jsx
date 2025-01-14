import { Link } from 'react-router-dom';
import ProfileButton from '../Navigation/ProfileButton';
import './Header.css';
import { useState } from 'react';

// Function to generate a new random number between 1 and 8
const generateRandomNumber = () => Math.floor(Math.random() * 8) + 1;


const Header = ({ isLoaded, sessionUser }) => {
     // State to store the current random spot ID
  const [randomSpotId, setRandomSpotId] = useState(generateRandomNumber());

  // Function to handle click and update the random spot ID
  const handleRandomClick = () => {
    setRandomSpotId(generateRandomNumber());
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src="/logo.png" alt="Lodging Logo" className="logo" />
        </Link>
      </div>
      <div className="center-text">
      <Link 
          to={`/spots/${randomSpotId}`} 
          className="center-text-link" 
          onClick={handleRandomClick}
        >
          belong anywhere
        </Link>
      </div>
      <div className="profile-section">
        {isLoaded && <ProfileButton user={sessionUser} className="profile-button" />}
        {sessionUser && (
          <Link to="/spots/new" className="create-new-spot-link">
            Create a New Spot
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
