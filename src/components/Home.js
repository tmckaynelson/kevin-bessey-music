import React from 'react'

import Tour from './Tour'

export default function Home() {
    return (
        <div>
                    <div className="banner-img"> 
                {/* <img src={ banner } alt="The Patient banner" /> */}
            </div>
            <div className="iframe">
                {<iframe src="https://open.spotify.com/embed/track/0N1DnRp0d5PdOqFvAxLgTB" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>}
            </div>
            <Tour />
        </div>
    )
}
