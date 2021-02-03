import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import fire from './fire';
import Login from './Login';
import Home from './Components/Home/Home'
import Header from './Components/Header/Header';

const db = fire.firestore();											  // connect to firebases firebase firestore database
db.settings({timestampsInSnapshots: true}); 								  // allow timestamps to come with the snapshots
const storageService = fire.storage();									  // refer to the firebase storage(image hosting in this case);
const storageRef = storageService.ref();
const database = fire.database();
const auth = fire.auth();

const App = () => {

    console.log('yee')
    const [user, setUser] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);
    const [authChecked, setAuthChecked] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }
    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }
    
    const handleLogin = () => {
        clearErrors();
        fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => {
            switch(err.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
            }
        });
    };
    const handleSignup = () => {
        clearErrors();
        auth
        .createUserWithEmailAndPassword(email, password).then((user) =>{
            if (user) {
				console.log(user);
				// initialize values in storage
				db.collection('users').doc(user.user.uid).set({ 
                    // enter the user in the database with a userID, email, initialization for aesthetic list and username
					userID: user.user.uid,
					email: user.user.email,
					username: username,
					twitterUrl: 'Please Enter our URL',
					instagramUrl: 'Please Enter our URL',
					redditUrl: 'Please Enter our URL',
					youtubeUrl: 'Please Enter our URL',
					facebookUrl: 'Please Enter our URL',
					profilePic: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/ARMEDANGELS-A_Logo.jpg',
				});
			} return true;
        })
        .catch(err => {
            switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
            }
        });
    };

    const handleLogout = () => {
        fire.auth().signOut();
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if (user){
                clearInputs();
                setUser(user);
                setAuthChecked(true);
            }else {setUser("")}
        });
    };
    useEffect(() => {
        fetch("https://us-central1-aesthetic-92afd.cloudfunctions.net/api/users/userinfo/rckwsaik", {
        method: 'get',
        header: {
            'Access-Control-Allow-Origin' : '*',
        },
        mode: 'cors'
        }).then((response) => {
            response.json().then((data) => {
                console.log(data)
            });
        })
      
        authListener();
        console.log(user)
        if(user){
            if (window.location == 'localhost:3000') 
                window.location.href = 'localhost:3000/home'; 
        }
        
    }, [])
    if(authChecked){
        if(user){
            console.log(window.location)
            if (window.location.href == "http://localhost:3000/") 
                window.location.href = "http://localhost:3000/home"; 
        }
        return(
            <div>
            {user 
                ? 
                <Router>
                    <Route path="/" component={Header}/>
                    <Switch>
                        <Route exact path="/home" render= {() => (<Home currentUserId={user}></Home>)}/>
                        <Route exact path="/user/:username/aesthetic/:aestheticId" render= {() => console.log('aesthetic')}/>
                        <Route exact path="/user/:username" render={() =>(<UserPage currentUserId={userInfo.id}></UserPage>)}/>
                    </Switch>
                </Router>
                : <Login 
                email={email}
                username={username}
                password = {password}
                setEmail={setEmail}
                setUsername={setUsername}
                setPassword={setPassword}
                handleLogin={handleLogin} 
                handleSignup={handleSignup}
                hasAccount = {hasAccount}
                setHasAccount = {setHasAccount}
                emailError={emailError}
                passwordError={passwordError}
                />
            }
            </div>
        );
    }else{
        return(<div>Loading app...</div>)
    }
    
};

export default App;