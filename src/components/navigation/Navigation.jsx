// import { HomeOutlined, UserOutlined } from '@ant-design/icons';
// import React from 'react';
// import { Breadcrumb } from 'antd';
// const Menu = () => (
//   <Breadcrumb
//     items={[
//       {
//         href: '',
//         title: <HomeOutlined />,
//       },
//       {
//         href: '',
//         title: (
//           <>
//             <UserOutlined />
//             <span>Application List</span>
//           </>
//         ),
//       },
//       {
//         title: 'Application',
//       },
//     ]}
//   />
// );
// export default Menu;
import React, { useState } from 'react';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './styles.css'
import { Link } from 'react-router-dom';
const items = [
  {
    label: (
      <Link to="/"  rel="noopener noreferrer">
        Main
      </Link>
    ),
    key: 'main',
    icon: <HomeOutlined />,
    className:'menu-items',
  },
  {
    label: (
      <Link to="/users"  rel="noopener noreferrer">
        Users
      </Link>
    ),
    key: 'users',
    icon: <UserOutlined />,
    className:'menu-items',
  },

  {
    label: (
      <Link to="/pets"  rel="noopener noreferrer">
        Pets
      </Link>
    ),
    key: 'pets',
    className:'menu-items',
  },
];
const Navigation = () => {
  const [current, setCurrent] = useState('main');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} 
  selectedKeys={[current]}
   mode="horizontal" 
   items={items} 
   className='menu-header'/>;
};
export default React.memo(Navigation);