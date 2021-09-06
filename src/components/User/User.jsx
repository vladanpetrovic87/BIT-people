import React,{useState, useEffect} from 'react';

import { ListView } from './components/ListView';
import { GridView} from './components/GridView';
import{getUsers} from '../../services/services';


export const User = (props) =>{
    const [users,setUsers] = useState([]);

    useEffect(() => {
        getUsers().then((users) => {
            setUsers(users);
        });
    },[])
    return (
        props.isListView
        ?<ListView users={users} />
        :<GridView users={users} />
    )
}