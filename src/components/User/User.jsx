import React from 'react';

import { ListView } from './components/ListView';
import { GridView} from './components/GridView';
//import{getUsers} from '../../services/services';


export const User = (props) =>{
    

  

    return (
        props.isListView
        ?<ListView users={props.users} />
        :<GridView users={props.users} />


    )
}