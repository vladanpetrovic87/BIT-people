import React, {Fragment, useState, useEffect} from 'react';

import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import {User} from '../src/components/User/User';
import{getUsers} from './services/services';


import './App.css';

const App = () => {
  
  const[isListView, setIsListView] = useState(true)
  const [users, setUsers] = useState([]);

console.log("App:", isListView);

const onLayoutToggle = () => {
  setIsListView(!isListView);
}
const onRefresh = () => {
  getUsers().then((users) => {
    setUsers(users);
});
}
useEffect(() => {
  getUsers().then((users) => {
      setUsers(users);
  });
},[])

  return (

  
    <Fragment>
    <Header isListView={isListView} onLayoutToggle={onLayoutToggle} onRefresh={onRefresh} />
    <User isListView={isListView} onRefresh={onRefresh} users={users} />
    <Footer />
    
    </Fragment>

  );
}

export default App;
