import React, { useEffect, useState } from 'react';

function Feed({home, currentUserId, feedArray}) {
    console.log(feedArray + 'feedarray')
    if(feedArray){
        return (
            <div id = "commentsholder">
                {   //feed this an array of posts as well, then mix them, then sort them in chronilogical order
                    feedArray.map((element)=>(
                       console.log('meme')
                    ))
                }
            </div>
        ); 
    }
    else{return(<div></div>)}
}  

export default Feed