import React from 'react';

function Burger() {
  return (
    <div className="burger">
      <img src={process.env.PUBLIC_URL + '/images/burger.png'} alt="" />
    </div>
  );
}

export default Burger;