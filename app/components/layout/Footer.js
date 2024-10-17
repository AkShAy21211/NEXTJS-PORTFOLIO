import React from 'react';

const Footer = () => {
  return (
    <footer style={{  color: 'white', textAlign: 'center', padding: '1rem 0' }}>
      <div className='text-xs md:text-sm p-1 md:p-0'>
        &copy; {new Date().getFullYear()} Next.js Portfolio - weld-pi.vercel.app. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
