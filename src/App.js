import React, { useState } from 'react';
import Header from './components/Header';

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
        </div>
    );
}
 
export default App;