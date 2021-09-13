import React from 'react';

const numberCartSelector = 0;
function HeaderCart() {
  const couterCart = numberCartSelector;
  return (
    <a href='/' className='header-cart'>
      <div className='cart'>
        <img src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png" alt="" />
        <span className='cart-counter'>{couterCart}</span>
      </div>
      <span>Giỏ Hàng</span>
    </a>
  );
}

export default HeaderCart;