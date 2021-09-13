import Burger from 'components/Burger';
import HeaderNavbar from 'components/HeaderNavbar';
import React from 'react';
function HeaderMenuBurger() {

  return (
    <div className="header-menu">
      <Burger />
      <div className="header-menu-text">
        <span>Danh Mục</span>
        <p>
          Sản Phẩm
          <img src={process.env.PUBLIC_URL + '/images/sort-down.png'} alt="" />
        </p>
      </div>
      <HeaderNavbar />
    </div>

  );
}

export default HeaderMenuBurger;