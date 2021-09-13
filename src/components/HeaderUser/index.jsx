import HeaderUserDrop from 'components/HeaderUserDrop';
import React from 'react';
function HeaderUser() {

  return (
    <div className="header-menu header-user">
      <img src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png" alt="" />
      <div className="header-menu-text">
        <span>Đăng Nhập / Đăng Ký</span>
        <p>
          Tài khoản
          <img src={process.env.PUBLIC_URL + '/images/sort-down.png'} alt="" />
        </p>
      </div>
      <HeaderUserDrop />
    </div>

  );
}

export default HeaderUser;