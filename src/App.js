import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Welcome from './pages/Welcome';
import PageLayout from './pages/PageLayout';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import History from './pages/History'; 
import { DarkModeProvider } from './components/DarkModeContext';
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
    const location = useLocation();
    
    const darkModeRoutes = ['/page-layout', '/profile', '/history'];

    return (
        <DarkModeProvider> 
            {darkModeRoutes.includes(location.pathname) && <DarkModeToggle />}
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/page-layout" element={<PageLayout />} />
                <Route path="/profile" element={<Profile />} /> 
                <Route path="/history" element={<History />} /> 
            </Routes>
        </DarkModeProvider>
    );
}

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;