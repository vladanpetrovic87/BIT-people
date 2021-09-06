import React, {Fragment, useState} from 'react';

import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import {User} from '../src/components/User/User';


import './App.css';

const App = () => {
  
  const[isListView, setIsListView] = useState(true)

console.log("App:", isListView);

const onLayoutToggle = () => {
  setIsListView(!isListView);
}

  return (

  
    <Fragment>
    <Header isListView={isListView} onLayoutToggle={onLayoutToggle} />
    <User isListView={isListView} />
    <Footer />
    
    </Fragment>

  );
}

export default App;
