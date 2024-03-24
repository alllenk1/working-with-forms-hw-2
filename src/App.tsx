import React from 'react';

import { cnApp } from './App.classname';
import { Feed } from './components/Feed';

import './App.css';

const App = () => {
    return (
        <div className={cnApp()}>
            <h1 className={cnApp("Title")}>8.3 Работа с формами в React</h1>

            <h2 className={cnApp("Subtitle")}>Диванное</h2>

            <Feed />
        </div>
    );
}

export default App;
