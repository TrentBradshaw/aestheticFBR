import React from 'react';


const Hero = ({handleLogout}) => {
    return(
        <section className ='hero'>
            <nav>
                <h1>welcome</h1>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    )
}

export default Hero;