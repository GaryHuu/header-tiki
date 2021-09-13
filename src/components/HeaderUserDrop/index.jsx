import React from 'react';
function HeaderUserDrop() {
  return (
    <div className='header-user__drop'>
      <button>Đăng Nhập</button>
      <button>Đăng Nhập</button>
      <button>
        <i
          style={{
            backgroundImage: `url('https://frontend.tikicdn.com/_desktop-next/static/img/sprite.png?v=100000000')`,
          }}
        ></i>
        <span>Đăng nhập bằng Facebook</span>
      </button>
      <button>
        <i
          style={{
            backgroundImage: `url('https://frontend.tikicdn.com/_desktop-next/static/img/sprite.png?v=100000000')`,
          }}
        ></i>
        <span>Đăng nhập bằng Google</span>
      </button>
      <button>
        <i
          style={{
            backgroundImage: `url('https://frontend.tikicdn.com/_desktop-next/static/img/sprite.png?v=100000000')`,
          }}
        ></i>
        <span>Đăng nhập bằng Zalo</span>
      </button>
    </div>
  );
}

export default HeaderUserDrop;
