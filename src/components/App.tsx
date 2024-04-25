import React, { lazy } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';

import styles from './SharedLayout/SharedLayout.module.css'

const Home = lazy(() => import('../pages/Home/Home'));

const App: React.FC = () => (
	<BrowserRouter>
      <Routes>
         <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<div className={styles.notFound}>Path not resolved</div>} />
         </Route>
		</Routes>
	</BrowserRouter>
);

export default App;
