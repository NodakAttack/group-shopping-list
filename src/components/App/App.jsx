import React from 'react';

import Header from '../Header/Header.jsx'
import GetItems from '../GetItems/GetItems.jsx'

import './App.css';


function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <GetItems />
            </main>
        </div>
    );
}

export default App;
