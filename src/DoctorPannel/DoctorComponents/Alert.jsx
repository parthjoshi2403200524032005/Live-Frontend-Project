import React from 'react';

function Alert() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    textAlign: 'center',
    backgroundColor: '#f8f9fa' // Light gray background for better contrast
  };

  const headingStyle = {
    fontSize: '2em',
    marginBottom: '1rem',
    color: '#dc3545' // Bootstrap's 'danger' red color
  };

  const paragraphStyle = {
    fontSize: '1.2em',
    color: '#6c757d' // Bootstrap's 'secondary' gray color
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>YOU ARE NOT VERIFIED</h1>
      <p style={paragraphStyle}>You can verify yourself from the quick onboarding section</p>
    </div>
  );
}

export default Alert;
