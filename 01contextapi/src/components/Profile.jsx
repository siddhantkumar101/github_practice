import React from 'react'
import UserContext from '../context/UserContext'
import{useContext} from 'react';

function Profile() {
    const{user}=React.useContext(UserContext);
   if(!user)return null;
   return <div>{user.username}</div>;
 
}

export default Profile