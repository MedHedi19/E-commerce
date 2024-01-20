import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import Login from './pages/Login';
import NewProduct from "./pages/NewProduct";
import NewUser from "./pages/NewUser";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import User from "./pages/User";
import UserList from "./pages/UserList";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;

  return (
    <div className="App" >
      {!isLoginPage && admin && <TopBar />}
      <div className="container">
        {!isLoginPage && admin && <SideBar />}
        <Routes>
          <Route path='/login' element={<Login />} />
          {admin && (<><Route path='/' element={<Home />} />
            <Route path='/users' element={<UserList />} />
            <Route path='/user/:userId' element={<User />} />
            <Route path='/newUser' element={<NewUser />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/newproduct' element={<NewProduct />} /></>)}
        </Routes>
      </div>
    </div>

  );
}

export default App;
