import React from 'react';

const homeContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f4f4f4', // Set a background color of your choice
};

const homeHeadingStyle = {
  fontSize: '2em',
  color: '#333', // Set a text color of your choice
};

const Home = () => {
  return (
    <div style={homeContainerStyle}>
      <h2 style={homeHeadingStyle}>Welcome to GoodHood!</h2>
      {/* Add more content as needed */}
    </div>
  );
};

export default Home;
