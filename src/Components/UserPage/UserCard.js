import React, { Component } from 'react';
import FollowButton from './FollowButton';
//SPLIT THIS UP LATER. SPLIT USER PROFILE LOAD INTO ONE COMPONENT, THEN SWITCH USER CONTENT LOAD INTO ANOTHER
function UserCard({currentUserId, profileOwnerInfo}) {
    if(profileOwnerInfo){
        return (
            <div style={{marginBottom: '3%'}} id= 'userCard' className={['bordered', 'divBackground'].join(" ")}>
                <div className = 'divHeader' style={{ display: 'flex'}}>
                    <div className= 'headerText' style={{flex: '8', alignItems: 'stretch', display: 'flex', flexDirection: 'column'}}>
                        <h1 className= 'headerText' style= {{textAlign: 'left', paddingTop: '7px', paddingLeft: '3px'}}>{profileOwnerInfo.username}</h1>
                    </div>
                </div>
                <div style={{display:'flex', alignItems: 'center', flexDirection:'column', marginTop: '5%', marginBottom: '5%'}}>
                    {/*<ProfileImage type= {'header'} url={profileOwnerInfo.headerUrl} ></ProfileImage>*/}
                    <img src = {profileOwnerInfo.pfpUrl}></img>
                </div>
                <div style={{textAlign: 'center'}}>
                    <p>{profileOwnerInfo.description}</p> 
                    <p>{profileOwnerInfo.contributionsCount + ' curations'} </p>
                </div> 
            </div>
        );
    }else {
        return(<div></div>)
    }
        
} 
    
export default UserCard