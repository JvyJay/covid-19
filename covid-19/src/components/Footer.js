import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#ffc107',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <>
      <footer style={footerStyle}>
        <p>Quarantine Store &copy; 2020</p>
      </footer>
    </>
  );
};

export default Footer;
