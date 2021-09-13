import HeaderSearchHotCategory from 'components/HeaderSearchHotCategory';
import HeaderSearchHotKey from 'components/HeaderSearchHotKey';
import HeaderSearchPromo from 'components/HeaderSearchPromo';
import HeaderSearchSugesstion from 'components/HeaderSearchSugesstion';
import React from 'react';

function HeaderSearchHistory({ isSearch, isShow }) {
  return (
    <>
      {isShow && (
        <div className='header-search-history'>
          {!isSearch && <HeaderSearchPromo />}

          <HeaderSearchSugesstion isSearch={isSearch} />

          {!isSearch && (
            <>
              <HeaderSearchHotKey />
              <HeaderSearchHotCategory />
            </>
          )}
        </div>
      )}
    </>
  );
}

export default HeaderSearchHistory;
