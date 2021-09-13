import FreeShipLogo from 'components/FreeShipLogo';
import HeaderCart from 'components/HeaderCart';
import HeaderLogo from 'components/HeaderLogo';
import HeaderMenuBurger from 'components/HeaderMenuBurger';
import HeaderSearch from 'components/HeaderSearch';
import HeaderUser from 'components/HeaderUser';
import React from 'react';

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__content'>
          <div className='header__left'>
            <HeaderLogo />
            <FreeShipLogo />
          </div>
          <div className='header__middle'>
            <HeaderMenuBurger />
            <HeaderSearch />
          </div>
          <div className='header__right'>
            <HeaderUser />
            <HeaderCart />
            <a className='tiki-seller' href='/'>
              <img
                className='icon'
                src='https://frontend.tikicdn.com/_desktop-next/static/img/icon-seller.svg'
                alt=''
              />
              <span className='text'>Bán hàng cùng Tiki</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
