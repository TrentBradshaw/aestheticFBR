import React, { Component } from 'react';
import FollowButton from './FollowButton';
import ProfileImage from './ProfileImage'
//SPLIT THIS UP LATER. SPLIT USER PROFILE LOAD INTO ONE COMPONENT, THEN SWITCH USER CONTENT LOAD INTO ANOTHER
function UserCard({currentUserId, profileOwnerInfo}) {
        return (
            <div style={{marginBottom: '3%'}} id= 'userCard' className={['bordered', 'divBackground'].join(" ")}>
                <div className = 'divHeader' style={{ display: 'flex'}}>
                    <div className= 'headerText' style={{flex: '8', alignItems: 'stretch', display: 'flex', flexDirection: 'column'}}>
                        <h1 className= 'headerText' style= {{textAlign: 'left', paddingTop: '7px', paddingLeft: '3px'}}>{profileOwnerInfo.username}</h1>
                        
                    </div>
                </div>
                <div style={{display:'flex', alignItems: 'center', flexDirection:'column', marginTop: '5%', marginBottom: '5%'}}>
                    {/*<ProfileImage type= {'header'} url={profileOwnerInfo.headerUrl} ></ProfileImage>*/}
                    <ProfileImage type={'profilePicture'} url = {profileOwnerInfo.pfpUrl}></ProfileImage>
                    { currentUserId != profileOwnerInfo.id && <FollowButton targetName={profileOwnerInfo.username} type={'user'}></FollowButton>}
                </div>
                <div style={{textAlign: 'center'}}>
                    <p>{profileOwnerInfo.description}</p>
                    <p>{'joined ' + profileOwnerInfo.joinedAgo}</p>
                    <p style={{marginLeft: '10px'}}> {profileOwnerInfo.followingCount + ' Following'}  
                    {profileOwnerInfo.followersCount == 1 ?
                    profileOwnerInfo.followersCount + ' Follower': profileOwnerInfo.followersCount + ' Followers' } </p>
                    <p>{profileOwnerInfo.contributionsCount + ' curations'} </p>
                </div> 
            </div>
        );
} 
    
export default UserCard