import React from 'react';

function Home() {
  return (
    <div style={{
      margin: 0,
      padding: 0,
      fontFamily: 'Arial, sans-serif',
      backgroundImage: `url('https://www.worldatlas.com/r/w1200/upload/97/9d/21/shutterstock-116061451.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <div className="overlay" style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center'
      }}>
        <h1 style={{
          color: '#ffffff',
          fontSize: '85px',
          marginBottom: '10px',
          marginLeft:'-800px',
          marginTop:'250px'
          
        }}>HERPATH</h1>
        <p style={{
          color: '#ffffff',
          fontSize: '18px',
          marginTop: 0,
          marginLeft:'-800px',
        }}>Embark on Your Journey to Explore Education and Careers</p>
      </div>
    </div>
  );
}

export default Home
