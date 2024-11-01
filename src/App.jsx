import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage';
import UserPage from './pages/UserPage/UserPage';
import Layout from './components/Layout/Layout';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout nickName="BOLD" id={1} />}>
          <Route index element={<MainPage />}></Route>
          <Route path="/:id" element={<UserPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
