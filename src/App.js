import React from 'react';
import {Navbar} from './components/Navbar';
import {Home} from './components/Home';
import {Projects} from './components/Projects';
import {Contact} from './components/Contact';


export const App = () => (
    <div>
        <Navbar/>
        <Home/>
        <Projects/>
        <Contact/>
    </div>
);

