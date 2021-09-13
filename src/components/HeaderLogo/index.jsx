import React from 'react';

function HeaderLogo() {
  return (
    <a className='logo' href="/">
      <img src={process.env.PUBLIC_URL + '/images/logo-tiki.png'} alt="" />
    </a>
  );
}

export default HeaderLogo;