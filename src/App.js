// import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Admin, Resource } from 'react-admin';
// import CustomAppBar from './CustomAppBar';
// import CustomLayout from './CustomLayout';
// import CustomMenu from './CustomMenu';
// import Posts from '../js/page/Posts';
// import Comments from '../js/page/Comments';
// import Users from '../js/page/Users';
// import Categories from '../js/page/Categories';

// const App = () => (
//     <BrowserRouter>
//         <Admin
//             // layout={CustomLayout}
//             // appBar={CustomAppBar}
//             // menu={CustomMenu}
//         >
//             <Resource name="menu" component={Posts}/>
//             <Resource name="menu1" component={Comments}/>
//         </Admin>
//     </BrowserRouter>
// );

// export default App;

import React from 'react';
import { Admin, Resource } from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest'

import { listProducts, editProduct, createProduct } from './components/Products'
import { listUsers, editUser, createUser } from './components/Users'
import AdminPanel from './components/AdminPanel'
// import data from "./data";

function App() {
  return (
    <div className='App'>
      <Admin
        dashboard={AdminPanel}
      >
        <Resource
          name='products'
          list={listProducts}
          edit={editProduct}
          create={createProduct}
        />
        <Resource
          name='users'
          list={listUsers}
          edit={editUser}
          create={createUser}
        />
      </Admin>
    </div>
  )
}

export default App