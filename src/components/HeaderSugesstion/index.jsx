import React from 'react';
import { sugesstionList } from './sugesstionList'

function HeaderSearchSugesstion() {
  return (
    <ul className='header-sugesstion'>
      {
        sugesstionList.map((item) => (
          <li key={item.id}>
            <a href="/">
              {item.title}
            </a>
          </li>
        ))
      }
    </ul>
  );
}

export default HeaderSearchSugesstion;