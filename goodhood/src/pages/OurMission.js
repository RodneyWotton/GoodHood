import React from 'react';

const OurMission = () => {
  const pageStyles = {
    textAlign: 'center',
    padding: '20px',
   // backgroundImage: `url(${backgroundImage})`,  // Add this line
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    height: '100vh',
  };

  const headingStyles = {
    fontSize: '36px',
    fontWeight: 'bold',
    color: 'black',
    marginBottom: '20px',
  };

  const memberStyles = {
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: '#fff',
    background: '#FFFFFF', 
    border: '1px gray solid', 
    borderRadius: '75px', 
    margin: '50px auto', 
    maxWidth: '800px', 
    position: 'relative',
  };

  return (
    <div style={pageStyles}>
      <div >
        <p></p>
        <h1 style={headingStyles}>Our Mission: Uniting Communities through __ __ and __</h1>
        <p style={memberStyles}>
        At GoodHood, our mission is clear: TO DO
        </p>
        <p style={memberStyles}>
       <h3> Your Donations Make a Difference</h3>

        In addition to our trading and marketplace features, we actively seek support through donations to make a positive impact on the lives of those in need. 
        Your contributions go towards initiatives that benefit people in need, promoting education, healthcare, and community development.
        Join us in our mission to unite comunities and the world. Together, we can build a stronger, more connected community that thrives in solidarity. 
        Your participation, whether through trading, connecting, or donating, plays a crucial role in making a difference.
        Thank you for being a part of our journey. - GoodHood
     </p>
      </div>
    </div>
  );
};

export default OurMission;
