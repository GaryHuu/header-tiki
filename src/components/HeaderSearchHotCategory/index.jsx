import React from 'react';
import { hotCategoryList } from './hotCategoryList';

function HeaderSearchHotCategory() {
  return (
    <div className='hot-category'>
      <h3>Danh Mục Nổi Bật</h3>
      <div className="hot-category__list">
        {
          hotCategoryList.map(item => (
            <a className='hot-category__item' key={item.id} href='/'>
              <img src={item.thumb} alt={item.title} />
              <p>{item.title}</p>
            </a>
          ))
        }
      </div>
    </div>
  );
}

export default HeaderSearchHotCategory;