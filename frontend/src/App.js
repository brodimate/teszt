import './App.css';import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Client/Forms/Login.jsx'; // login komponens importálása
import Register from './Client/Forms/Register.jsx'; // register komponens importálása
import Posts from './Client/Forms/Post.jsx'; // post komponens importálása


function App() {
  return (
    <Router>
      <Routes>
        {/* Gyökérútvonal átirányítása a login oldalra */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Különböző oldalak */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
