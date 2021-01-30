import React from 'react';


const Login = ({email, password, setEmail, setPassword, handleLogin, handleSignup, hasaccount, setHasAccount,emailError, passWordError}) => {

    return(
       <section className="login">
            <div>
                <label>Username</label>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type='password' required value={password} onChange={(e) => setPassword(e.target.value)} ></input>
                <p className='errorMsg'>{passWordError}</p>
                <div>
                    {hasaccount ? (
                        <>
                            <button onClick={handleLogin}>Sign in</button>
                            <p> Don't have an account? <span onClick={() => setHasAccount(!hasaccount)}>Sign Up</span></p>
                        </>
                    ): (
                        <>
                            <button onClick={handleSignup}>Sign up</button>
                            <p>Already have an account? <span onClick={() => setHasAccount(!hasaccount)}>Sign in</span></p>
                        </>
                    )}
                </div>
            </div>
       </section> 
    )
}

export default Login;