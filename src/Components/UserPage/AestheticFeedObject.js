import React from 'react'

function AestheticFeedObject({aestheticItem}) {
    return (
        <div>
            <div>
                <h1>{aestheticItem.title}</h1>
            </div>
            <div>
                {
                    aestheticItem.images.map((element)=>(
                       console.log('image')
                    ))
                }
            </div>
        </div>
    )
}

export default AestheticFeedObject
