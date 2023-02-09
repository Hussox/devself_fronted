import React from 'react';
import Button from '@mui/material/Button';

import {Link} from 'react-router-dom';

import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, logout } from '../../redux/slices/auth';

import logo from '../../img/DEVSELF.svg'
import styled from '@emotion/styled';

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onClickLogout = () => {
    if(window.confirm('Вы действительно хотите выйти?'))
   dispatch(logout())
   window.localStorage.removeItem('token')
  };

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link  to="/">
            <img className={styles.logo_link} src={logo}></img>
          </Link>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Link to="/add-post">
                  <Button variant="contained">Написать статью</Button>
                </Link>
                <Button onClick={onClickLogout} variant="contained" className={styles.header_text_error}>
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outlined" className={styles.header_text}>Войти</Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained" className={styles.button_header_text}>Создать аккаунт</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
