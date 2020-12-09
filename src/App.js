import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';

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
        </div>
    );
}
 
export default App;