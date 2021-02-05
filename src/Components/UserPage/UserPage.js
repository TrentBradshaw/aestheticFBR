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
//SPLIT THIS UP LATER. SPLIT USER PROFILE LOAD INTO ONE COMPONENT, THEN SWITCH USER CONTENT LOAD INTO ANOTHER
function UserPage ({currentUserId, db}){
    //currentUserId, pageOwnerUsername
    const [profileOwnerInfo, setProfileOwnerInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [feedArray, setFeedArray] = useState();
    //const [currentUserId, setCurrentUserId] = useState();
    
    let { username } = useParams()
    
    useEffect(() => {
            
        let url = new URL("https://us-central1-aesthetic-92afd.cloudfunctions.net/api/users/feed/" + username)
        
        fetch("https://us-central1-aesthetic-92afd.cloudfunctions.net/api/users/feed/" + username, {
            headers:{
                'Content-Type':'application/json',
            },
            method: 'get',
        }).then((response) => {
            console.log('response ' + response);
            response.json().then((data) => {
                console.log(data);
                setFeedArray(data)
                //if array of activity, show, else don't and load other return statement
            });
        });


        url = new URL("https://us-central1-aesthetic-92afd.cloudfunctions.net/api/users/userInfo/" + username )
        
        fetch(url, {
            headers:{
                'Content-Type':'application/json',
            },
            method: 'get',
        }).then((response) => {
            console.log('response ' + response);
            response.json().then((data) => {
                console.log(data);
                setProfileOwnerInfo(data);
                setLoading(false);
                //if array of activity, show, else don't and load other return statement
            });
        });
            
      }, []);
        //return(<div>memes</div>)
        if (loading){
            return(<div></div>)
        }
        else {
            return (
            
                <div className={['bordered', 'baseMainContainer', 'divBackground'].join(" ")}>
                    <UserCard currentUserId = {currentUserId} profileOwnerInfo={profileOwnerInfo}></UserCard>
                    <Feed home={false} currentUserId= {currentUserId} profileOwnerId={profileOwnerInfo.id} feedArray={feedArray}></Feed>
                </div>
            ) 
        }
} 
    
if (document.getElementById('UserPageContainer')) {
   ReactDOM.render(<UserPage 
   //currentUserId={document.getElementById('dataHolder').getAttribute('currentUserId')}
   //pageOwnerUsername={document.getElementById('dataHolder').getAttribute('pageOwnerUsername')}
   />, document.getElementById('UserPageContainer'));
}
export default UserPage;