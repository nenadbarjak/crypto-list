import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false)

    const login = () => {
        setLoggedIn(true)
    }

    return (
        <div>
            <Header 
                loggedIn={loggedIn}
                login={login}
            />
            <Home />
            <Profile />
        </div>
    );
}
 
export default App;