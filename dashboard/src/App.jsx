import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from "./Dashboard/Dashboard.jsx";
import Login from './Login.jsx';
import MessageDashboard from "./MessageDashboard/MessageDashboard.jsx";
import Navigation from './Navigation.jsx';
import SignUp from './SignUp.jsx';

import Logo from './Logo.jsx';

const App = () => {
    return (
        
        
        <BrowserRouter>

            <Navigation />
            <Logo />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/messages" element={<MessageDashboard />} />
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
