import React from 'react';

function FreeShipLogo() {
  return (
    <a className='free-ship' href="/">
      <img src={process.env.PUBLIC_URL + '/images/free-ship.png'} alt="" />
    </a>
  );
}

export default FreeShipLogo;