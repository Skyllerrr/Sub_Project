import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserContext from "./context/UserContext";
import Home from './pages/Home/Home'
import BlogDetail from './pages/BlogDetail/BlogDetail'
// import data from './database/data.json'

function App() {
  const [userId, setUserId] = useState(0)
  const [isLogin, setIsLogin] = useState(true)

  // console.log(data)
  return (
    <UserContext.Provider value={{ userId, isLogin }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
          <Route
            path="/blog/:id"
            element={<BlogDetail/>}
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>  
  );
}
export default App;

