import { divide, toArray } from 'lodash';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import Feed from '../UserPage/Feed';
import Usercard from '../UserPage/UserCard'
//SPLIT THIS UP LATER. SPLIT USER PROFILE LOAD INTO ONE COMPONENT, THEN SWITCH USER CONTENT LOAD INTO ANOTHER
function Home ({currentUserInfo, db}){
    const [profileOwnerInfo, setProfileOwnerInfo] = useState([]);
    const [feedArray, changeFeedArray] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [pfpUrl, setPfpUrl] = useState();
    
    function appendNewStatus(statusObject){
        console.log(JSON.stringify(statusObject) + ' sss')
        let tempFeedArray = [...feedArray]; 
        tempFeedArray.unshift(statusObject)
        console.log(tempFeedArray)
        changeFeedArray(tempFeedArray)
        console.log(feedArray)
    }
    function deleteStatus(id){
        fetch('/api/statuses/delete', {
            headers:{'X-CSRF-TOKEN': token, 'Content-Type':'application/json',},
            method: 'delete',
            mode: "same-origin",
            credentials: "same-origin",
            body: JSON.stringify({statusId: id})
        }).then(
            data => { 
                console.log('data from commentinput----------------------' + JSON.stringify(data))
                let tempFeedArray = [...feedArray]; 
                let index;
                for (let i = 0; i < tempFeedArray.length; i++) {
                    if(tempFeedArray[i]['id'] === id){
                    index = i
                    console.log('index: ' + index)
                    }
                }
                tempFeedArray.splice(index,1)
                console.log(tempFeedArray)
                changeFeedArray(tempFeedArray)
            }
        )
    }
{
/*  if(isLoading)
        return(<div></div>)
        */
}
   
    return (
        <div id = 'home' style= {{display:'flex', flexDirection: 'column'}} className={['baseMainContainer',].join(" ")}>
                {
                    /* <div className={['headerText', 'divHeader'].join(" ")}>
                    <h1 className='headerText' >Home</h1>
                </div>*/
                }
                <Usercard currentUserId={currentUserInfo.userID} profileOwnerInfo={currentUserInfo}></Usercard>
                { /*pfpUrl && <img style={{height: '64px', width:'64px', objectFit: 'cover', alignSelf: 'center'}} src={pfpUrl}></img>*/}
                {/*<HomeInput currentUserId = {userId} profileOwnerInfo={profileOwnerInfo} appendNewStatus={appendNewStatus}></HomeInput>*/}
            <Feed home={true} currentUserId={currentUserInfo.userID} pageOwnerId={null} appendNewStatus={appendNewStatus} deleteStatus={deleteStatus} feedArray={feedArray} db={db}></Feed>
        </div>
    )
    return (
        <div>
            <div style= {{display:'flex', flexDirection: 'column'}}>
                { pfpUrl && <img style={{height: '64px', width:'64px', objectFit: 'cover', alignSelf: 'center'}} src={pfpUrl}></img>}
        
            </div>
            
            <Feed home={true} userId={userId} pageOwnerId={null} appendNewStatus={appendNewStatus} deleteStatus={deleteStatus} feedArray={feedArray}></Feed>
        </div>
    )

} 
export default Home;

