import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';

const Home = lazy(() => import('./pages/Home/Home'));

const App: React.FC = () => (
	<BrowserRouter>
    <Routes>
       <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<p>Path not resolved</p>} />
      </Route>
		</Routes>
	</BrowserRouter>
);

export default App;
