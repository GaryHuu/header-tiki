import React, { useEffect, useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { sugesstionList } from './sugesstion';

const INITIAL_NUMBER_SHOW = 3;
function HeaderSearchSugesstion({ isSearch }) {
  const [showFull, setShowFull] = useState(false);
  const [numberShow, setNumberShow] = useState(INITIAL_NUMBER_SHOW);
  const handleButtonClick = () => {
    setNumberShow((prev) =>
      prev === INITIAL_NUMBER_SHOW ? sugesstionList.length : INITIAL_NUMBER_SHOW
    );
    setShowFull((prev) => !prev);
  };

  useEffect(() => {
    if (!isSearch) {
      setNumberShow(INITIAL_NUMBER_SHOW);
      setShowFull(false);
      return;
    }
    setNumberShow(sugesstionList.length);
    setShowFull(true);
  }, [isSearch]);

  return (
    <div className='header-search-sugesstion'>
      <ul>
        {sugesstionList.map((sugesstion, index) =>
          index < numberShow ? (
            <a href='/' key={sugesstion.id}>
              <img
                src='https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png'
                alt=''
              />
              <div>{sugesstion.title}</div>
            </a>
          ) : null
        )}
      </ul>
      {!isSearch && (
        <button onClick={handleButtonClick}>
          {!showFull ? (
            <>
              <span>Xem thêm</span>
              <AiFillCaretDown />
            </>
          ) : (
            <>
              <span>Thu gọn</span>
              <AiFillCaretUp />
            </>
          )}
        </button>
      )}
    </div>
  );
}

export default HeaderSearchSugesstion;
