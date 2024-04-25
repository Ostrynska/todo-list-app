import React, { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Container from '../Container/Container';

import styles from './SharedLayout.module.css';

const SharedLayout: React.FC = () => {
  return (
    <>
      <Header/>
        <Container>
            <Suspense fallback={<div className={styles.loading}>Loading page...</div>}>
                <Outlet />
          </Suspense>
          </Container>
       <Footer/>
    </>
  );
};

export default SharedLayout;
