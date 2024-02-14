import Login from "./Components/Login"
import Dog from "./Components/Dog"
import Cat from "./Components/Cat"
import Collection from "./Components/Collaction";
import Signup from "./Components/Signup"
import { createContext, useState } from "react";
import { Product } from "./Components/Productdata"
import ViewProduct from "./Components/ViewProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Components/Home";
import {Routes,Route}from 'react-router-dom'
import Cart from "./Components/Cart";
import AdminLogin from "./Admin/AdminLogin";
import AdminProducts from "./Admin/AdminProducts";
import AdminUsers from "./Admin/AdminUsers";
import ViewOrder from "./Admin/ViewOrder";
import AdminAddProducts from "./Admin/AdminAddProducts";
import AdminMain from "./Admin/AdminMain";
import EditProduct from './Admin/EditProduct'





export const UserLogin = createContext();

function App() {
  const [user, setUser] = useState([]);
  const [login, setLogin] = useState(null);
  const [product, setProduct] = useState(Product);
  const [cart, setCart] = useState(false);
  const [search, setSearch] = useState("");    
  const [buy, setBuy] = useState([]);

  return (
    
    <div className="App">
      <UserLogin.Provider
        value={{
          user,
          setUser,
          login,
          setLogin,
          product,
          setProduct,
          cart,
          setCart,
          search,
          setSearch,
          buy,
          setBuy,
        }}
      >
        
        <Routes>
         <Route  path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/dog" element={<Dog />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/viewproduct/:id" element={<ViewProduct />} />
          <Route path="/adminlogin" element={<AdminLogin/>}/>
          <Route path="/adminmain" element={<AdminMain/>}/>
          <Route path="/adminproduct" element={<AdminProducts/>}/>
          <Route path="/adminusers" element={<AdminUsers/>} />
          <Route path="/vieworder" element = {<ViewOrder/>}/>
          <Route path="/adminaddproduct" element = {<AdminAddProducts/>}/>
          <Route path="/editproduct/:id" element = {<EditProduct/>}/>
        </Routes>
      </UserLogin.Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
