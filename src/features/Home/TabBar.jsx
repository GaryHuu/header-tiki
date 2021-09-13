import React from 'react';
import Slider from 'react-slick';
import { tabBarList } from './tabBarList';

function TabBar() {
  const beforeChange = (prev, next) => {
    console.log({ prev, next });
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 13,
    slidesToScroll: 13,
    beforeChange: beforeChange,
  };

  return (
    <div className='tab-bar-list'>
      <div className='container'>
        <Slider {...settings} className='tab-bar-content'>
          {tabBarList.map((item) => (
            <a href='/' className='tab-bar-item' key={item.id}>
              {item.title}
            </a>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TabBar;
