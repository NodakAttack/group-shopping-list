import React from 'react';

import Header from '../Header/Header.jsx'
import GetItems from '../GetItems/GetItems.jsx'

import './App.css';
import AddItems from '../AddItems/AddItems.jsx';


function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <AddItems />
                <GetItems />
            </main>
        </div>
    );
}

export default App;
