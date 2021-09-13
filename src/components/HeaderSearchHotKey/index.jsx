import React from 'react';
import HeaderHotKeyList from './../HeaderHotKeyList/index';

function HeaderSearchHotKey() {
  return (
    <div className='header-search-hot-key'>
      <div className="hot-key__header">
        <img src="https://salt.tikicdn.com/ts/upload/4f/03/a0/2455cd7c0f3aef0c4fd58aa7ff93545a.png" alt="" />
        <p>Tìm Kiếm Phổ Biến</p>
      </div>
      <HeaderHotKeyList />
    </div>
  );
}

export default HeaderSearchHotKey;