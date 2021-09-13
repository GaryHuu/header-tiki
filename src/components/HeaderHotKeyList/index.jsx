import React from 'react';
import { hotKeyList } from './hotKeyList';

function HeaderHotKeyList() {
  return (
    <div className='hot-key__list'>
      {
        hotKeyList.map((item) => (
          <a href='/' className='hot-key__item' key={item.id}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </a>
        ))
      }
    </div>
  );
}

export default HeaderHotKeyList;