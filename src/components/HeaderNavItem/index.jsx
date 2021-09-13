import React from 'react';

function HeaderNavItem({ item }) {
  return (
    <a href='/' className='nav-item'>
      <i className='nav-icon'>{item.icon}</i>
      {item.title}
    </a>
  );
}

export default HeaderNavItem;