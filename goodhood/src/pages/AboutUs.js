import React from 'react';
//import TeamMember1Photo from './Headshots/team_member_1.jpeg';


const teamMembers = [
    {
      name: 'Name',
      role: 'Role',
      //src: TeamMember1Photo,
      bio: 'Hi my name is __, my major is this, ect.',
    },
    {
    name: 'Name',
    role: 'Role',
    //src: TeamMember1Photo,
    bio: 'Hi my name is __, my major is this, ect.',
    },
    {
    name: 'Name',
    role: 'Role',
   // src: TeamMember1Photo,
    bio: 'Hi my name is __, my major is this, ect.',
    },
    {
    name: 'Name',
    role: 'Role',
    //src: TeamMember1Photo,
    bio: 'Hi my name is __, my major is this, ect.',
    },
    {
    name: 'Name',
    role: 'Role',
    //src: RoTeamMember1Photodney,
    bio: 'Hi my name is __, my major is this, ect.',
    },
    {
    name: 'Name',
    role: 'Role',
   // src: TeamMember1Photo,
    bio: 'Hi my name is __, my major is this, ect.',
    },

]


const AboutUs = () => {
    const pageStyles = {
        textAlign: 'center',
        padding: '20px',
        backgroundSize: '500px 500px',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        height: '100%',  };
    
      const headingStyles = {
        fontSize: '36px',
        fontWeight: 'bold',
        color: '#333',
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
    
      const memberNameStyles = {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '10px',
      };
    
      const memberRoleStyles = {
        fontSize: '18px',
        color: '#666',
        marginBottom: '10px',
      };
    
      const memberBioStyles = {
        fontSize: '16px',
        color: '#444',
      };
    
      return (
        <div style={pageStyles}>
          <h1 style={headingStyles}>Meet the Creators</h1>
          {teamMembers.map((member, index) => (
            <div data-testid="people" key={index} style={memberStyles}> 
              <img style = {{height: '150px', width: '100px'}} src={member.src} alt={member.name} />
              <h2 style={memberNameStyles}>{member.name}</h2>
              <p style={memberRoleStyles}>{member.role}</p>
              <p style={memberBioStyles}>{member.bio}</p>
            </div>
          ))}
        </div>
      );
          };

export default AboutUs;
