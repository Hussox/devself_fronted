import Container from "@mui/material/Container";
import {Routes, Route} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";


import { Header } from "./components";
import { Home, FullPost, HomePopular, Registration, AddPost, Login } from "./pages";
import Main from "./pages/Main";
import React from "react";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";
import {withRouter} from 'react-router-dom'



function App() {
  const location = useLocation()
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect (() => {
    dispatch(fetchAuthMe());
  }, [])
  
  return (
    <>

    
      {location.pathname!=='/' ? <Header/>:null}
      <Container maxWidth="lg">
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/posts/popular' element={<HomePopular/>} />
          <Route path='/posts/:id' element={<FullPost/>} />
          <Route path='/posts/:id/edit' element={<AddPost/>} />
          <Route path='/add-post' element={<AddPost/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Registration/>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
