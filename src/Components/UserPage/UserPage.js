import { divide, toArray } from 'lodash';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import UserCard from './UserCard';
import Feed from './Feed';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import { SettingsApplications } from '@material-ui/icons';
//SPLIT THIS UP LATER. SPLIT USER PROFILE LOAD INTO ONE COMPONENT, THEN SWITCH USER CONTENT LOAD INTO ANOTHER
function UserPage ({currentUserId, db}){
    console.log('yeeemee')
    //currentUserId, pageOwnerUsername
    const [profileOwnerInfo, setProfileOwnerInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [feedArray, setFeedArray] = useState();
    let { username } = useParams();
    
    useEffect(() => {
        const data = {};
        const aesthetics = [];
        db.collection("aesthetics").where("username", "==", username)
            .get()
            .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log('doccdata' +doc.data());
                aesthetics.push(doc.data());
            });
        });
        db.collection("users").get().then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                if (doc.data().username.toLowerCase() == username) {
                    setProfileOwnerInfo(doc.data());
                    console.log('user' + doc.data())
                    }
            });
        });
        setProfileOwnerInfo();
        setFeedArray(aesthetics);
        setLoading(false);
        console.log('data ' + data);
        console.log('aesthetics ' + aesthetics);
      }, []);
      if(loading)
        return(<div></div>);
        return(
            <div style={{marginTop: '50px'}}>
                <UserCard currentUserId={currentUserId}  profileOwnerInfo={profileOwnerInfo}></UserCard>
                <Feed home={false} currentUserId={currentUserId} feedArray={feedArray}></Feed>
            </div>
            
        )
        
} 

export default UserPage;