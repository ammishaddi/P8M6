
import './App.css'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NotFound from './pages/NotFound';
import ProtectRoute from './components/ProtectRoute';

const App = () => {

  return (

    <>
      <Routes>

        <Route path="/" element={<Home />} />
         <Route path="Login" element={<Login />} />
         <Route path="*" element={<NotFound />} />

        <Route path="/profile" element={
          <ProtectRoute>
              <Profile />
          </ProtectRoute>
        } />


      </Routes>

    </>
  );
};

export default App;
