import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Container from '../Container/Container';

const SharedLayout: React.FC = () => {
  return (
    <div className={styles.home}>
      <Header/>
        <Container>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
          </Suspense>
          </Container>
       <Footer/>
    </div>
  );
};

export default SharedLayout;
