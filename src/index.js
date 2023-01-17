import React from 'react';
import ReactDOM from 'react-dom/client';
import './utils/styles/index.css';
import Header from './componant/header/header';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './componant/footer/footer';
import Signin from "./pages/Sign-in";
import User from "./pages/User";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
          <Header/> 
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Signin />} />
            <Route path='/User' element={<User />} />
          </Routes>
          <Footer/> 
      </BrowserRouter>     
  </React.StrictMode>
);
