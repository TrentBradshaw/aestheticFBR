import { divide, toArray } from 'lodash';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import UserCard from './UserCard';
import Feed from './Feed';
import Loading from '../Utility/Loading';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
//SPLIT THIS UP LATER. SPLIT USER PROFILE LOAD INTO ONE COMPONENT, THEN SWITCH USER CONTENT LOAD INTO ANOTHER
function UserPage ({currentUserId}){
    //currentUserId, pageOwnerUsername
    const [profileOwnerInfo, setProfileOwnerInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [feedArray, setFeedArray] = useState();
    //const [currentUserId, setCurrentUserId] = useState();
    
    let { username } = useParams()

    useEffect(() => {
        if (user) {
                const lowerUsername = usernameHeader.innerHTML.toLowerCase();
                db.collection('users').get().then(snapshot => {
                    snapshot.docs.forEach(doc =>{
                        if (doc.data().username === lowerUsername) {
                            console.log(doc.data());
                            const twitterAnchor = document.getElementById('twitterAnchor');
                            twitterAnchor.setAttribute('target', '_blank');
                            const redditAnchor = document.getElementById('redditAnchor');
                            redditAnchor.setAttribute('target', '_blank');
                            const instagramAnchor = document.getElementById('instagramAnchor');
                            instagramAnchor.setAttribute('target', '_blank');
                            const youtubeAnchor = document.getElementById('youtubeAnchor');
                            youtubeAnchor.setAttribute('target', '_blank');
                            const facebookAnchor = document.getElementById('facebookAnchor');
                            facebookAnchor.setAttribute('target', '_blank');
                            if (doc.data().twitterUrl !== 'Please Enter our URL') {
                                console.log(doc.data().twitterUrl);
                                twitterAnchor.setAttribute('href', doc.data().twitterUrl);
                            }
                            if (doc.data().instagramUrl !== 'Please Enter our URL') {
                                instagramAnchor.setAttribute('href', doc.data().instagramUrl);
                            }
                            if (doc.data().facebookUrl !== 'Please Enter our URL') {
                                facebookAnchor.setAttribute('href', doc.data().facebookUrl);
                            }
                            if (doc.data().youtubeUrl !== 'Please Enter our URL') {
                                youtubeAnchor.setAttribute('href', doc.data().youtubeUrl);
                            }
                            if (doc.data().redditUrl !== 'Please Enter our URL') {
                                redditAnchor.setAttribute('href', doc.data().redditUrl);
                            }
                        }
                    });
                });
            }
        let url = new URL('http://localhost:80/api/feed')
        let param = {query: username}
        url.search = new URLSearchParams(param).toString();
        
        fetch(url, {
            headers:{
                'Content-Type':'application/json',
            },
            method: 'get',
            mode: "same-origin",
            credentials: "same-origin",
        }).then((response) => {
            console.log('response ' + response);
            response.json().then((data) => {
                console.log(data);
                setFeedArray(data['feed'])
                
                //if array of activity, show, else don't and load other return statement
            });
        });


        url = new URL('http://localhost:80/api/profile')
        param = {query: username}

        url.search = new URLSearchParams(param).toString();
        
        fetch(url, {
            headers:{
                'Content-Type':'application/json',
            },
            method: 'get',
            mode: "same-origin",
            credentials: "same-origin",
        }).then((response) => {
            console.log('response ' + response);
            response.json().then((data) => {
                console.log(data);
                setProfileOwnerInfo(data['profileOwnerInfo']);
                setLoading(false);
                //if array of activity, show, else don't and load other return statement
            });
        });
            
      }, []);
        //return(<div>memes</div>)
        if (loading){
            return(<Loading></Loading>)
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