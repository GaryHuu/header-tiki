import HeaderSearchHistory from 'components/HeaderSearchHistory';
import HeaderSugesstion from 'components/HeaderSugesstion';
import React, { useEffect, useRef, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

function HeaderSearch() {
  const [showHistory, setShowHistory] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (!wrapRef.current || wrapRef.current.contains(e.target)) return;
      setShowHistory(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (inputValue.trim() === '') {
      setIsSearch(false);
      return;
    }
    setIsSearch(true);
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputForcus = () => {
    setShowHistory(true);
  };

  return (
    <div ref={wrapRef} className='header-search'>
      <form className='header-search-form'>
        <input
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputForcus}
          type='text'
          name='search'
          id=''
          placeholder='Tìm sản phẩm, danh mục hay thương hiệu mong muốn ...'
        />
        <button>
          <BiSearchAlt />
          Tìm Kiếm
        </button>
      </form>
      <HeaderSugesstion />
      <HeaderSearchHistory isSearch={isSearch} isShow={showHistory} />
    </div>
  );
}

export default HeaderSearch;
