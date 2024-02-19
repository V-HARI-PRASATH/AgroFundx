import React from 'react';
import './Profile.css';

function Profile()
{
  const trainer = {
    name: 'John Doe',
    specialization: 'Personal Trainer',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst.',
    profileImage: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', // Path to the profile image
    experience: '10+ years', // Years of experience
    certifications: ['ACE Certified', 'CPR/AED Certified'], // Array of certifications
    services: ['Weight Loss', 'Strength Training', 'Functional Training'], // Array of services offered
    education: [
      {
        degree: 'Bachelor of Science in Exercise Science',
        institution: 'ABC University',
        year: '2015',
      },
      {
        degree: 'Certified Nutrition Specialist',
        institution: 'XYZ Institute',
        year: '2017',
      },
    ], // Array of education details
    languages: ['English', 'Spanish'], // Array of languages known
  };

  return (
    <div className='profilediv'>
        <center>
      <div>
        <img src={trainer.profileImage} alt="Profile" />
        <h3>Bio</h3>
        <p>{trainer.bio}</p>
        <table id='hari'>
            <tr>
                <td>Name</td>
                <td>{trainer.name}</td>
            </tr>
            <tr>
                <td>Specialization</td>
                <td>{trainer.specialization}</td>
            </tr>
            <tr className='spe'>
                <td>Contact Information</td>
                <td></td>
            </tr>
            <tr>
                <td>Email</td>
                <td>{trainer.email}</td>
            </tr>
            <tr>
                <td>Phone</td>
                <td>{trainer.phone}</td>
            </tr>
            <tr>
                <td>Experience</td>
                <td>{trainer.experience}</td>
            </tr>
            <tr className='spe'>
                <td>Certifications</td>
                <td></td>
            </tr>
            {trainer.certifications.map((certification, index) => (
            <tr key={index}>
                <td></td>
                <td>{certification}</td>
            </tr>
          ))}
            <tr className='spe'>
                <td>Services</td>
                <td></td>
            </tr>
            {trainer.services.map((service, index) => (
            <tr key={index}>
                <td></td>
                <td>{service}</td>
            </tr>
          ))}
          <tr className='spe'>
                <td>Education</td>
                <td></td>
            </tr>
            {trainer.education.map((educationItem, index) => (
            <tr key={index}>
                <td></td>
                <td>
                    <p>{educationItem.degree}</p>
                    <p>{educationItem.institution}</p>
                    <p>{educationItem.year}</p>
                </td>
            </tr>
          ))}
          <tr className='spe'>
                <td>Languages</td>
                <td></td>
            </tr>
            {trainer.languages.map((language, index) => (
            <tr key={index}>
                <td></td>
                <td>{language}</td>
            </tr>
          ))}
        </table>
    </div>
      </center>
    </div>
  );
};

export default Profile;
