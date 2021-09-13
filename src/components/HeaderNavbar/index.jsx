import HeaderNavItem from 'components/HeaderNavItem';
import React from 'react';
import { navList } from './navList';
function HeaderNavbar() {
  return (
    <ul className='navbar-list'>
      {
        navList.map((navItem) => (
          <HeaderNavItem key={navItem.id} item={navItem} />
        ))
      }
    </ul>
  );
}

export default HeaderNavbar;