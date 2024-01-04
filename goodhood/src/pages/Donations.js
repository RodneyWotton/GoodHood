// Donations.js
import React from 'react';
import Organization1 from '../Organizations/Organization1';
import Organization2 from '../Organizations/Organization2';
import Organization3 from '../Organizations/Organization3';
import Organization4 from '../Organizations/Organization4';
//import DonatePage1 from '/Organizations/DonatePage1';


const Donations = () => {
  const pageStyles = {
    textAlign: 'center',
    padding: '20px',
    
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div style={pageStyles}>
      <h1>Choose an Organization to Donate</h1>
      <div style={{ display: 'flex' }}>
        <Organization1 />
        <Organization2 />
        <Organization3 />
        <Organization4 />
        {/* Include other organization components for the top row here */}
      </div>
      <div style={{ display: 'flex' }}>
        {/* Include other organization components for the bottom row here */}
      </div>
    </div>
  );
};

export default Donations;
