import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import fire from './fire';
import Login from './Login';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import UserPage from './Components/UserPage/UserPage';
import AestheticSubmitForm from './Components/SubmitPages/AestheticSubmitForm';

const db = fire.firestore();											  // connect to firebases firebase firestore database
db.settings({timestampsInSnapshots: true}); 								  // allow timestamps to come with the snapshots
const storageService = fire.storage();									  // refer to the firebase storage(image hosting in this case);
const storageRef = storageService.ref();
const database = fire.database();
const auth = fire.auth();
FieldValue = require('firebase-admin').firestore.FieldValue;


const App = () => {
    const [user, setUser] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);
    const [authChecked, setAuthChecked] = useState(false);
    const [currentUserInfo, setCurrentUserInfo] = useState([]);

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
        console.log('in auth listener')
        fire.auth().onAuthStateChanged(user => {
            if (user){
                clearInputs();
                setUser(user);
                setAuthChecked(true);
                console.log('user found')
                db.collection("users").get().then((snapshot) => {
                    snapshot.docs.forEach((doc) => {
                        if (doc.data().userID === user.uid) {
                            console.log('doc found')
                            console.log(doc.data());
                            setCurrentUserInfo(doc.data())
                            setUsername(doc.data().username);
                            
                  }
                });
                if (window.location == 'localhost:8080') 
                    window.location.href = 'localhost:8080/home'; 
              });
            }else {setUser("")}
        });
    };
    useEffect(() => {
        authListener();
        console.log(user)
        let firebaseUser = fire.auth().currentUser;
        if (firebaseUser) {
        // User is signed in.
        setAuthChecked(true);
        setUser(firebaseUser);
        if (window.location == 'localhost:8080') 
                    window.location.href = 'localhost:8080/home'; 
        
        } else {
        // No user is signed in.
        setAuthChecked(true);
        }
        
        /*
        if(user){
            console.log('user found')
            db.collection("users").get().then((snapshot) => {
                snapshot.docs.forEach((doc) => {
                  if (doc.data().userID === user.user.uid) {
                    console.log('doc found')
                    setCurrentUserInfo(doc.data)
                    setUsername(doc.data.username);
                  }
                });
              });
            /*
            fetch("https://us-central1-aesthetic-92afd.cloudfunctions.net/api/users/userinfo/" + currentUserLoggedIn, {
            method: 'get',
            header: {
                'Access-Control-Allow-Origin' : '*',
            },
            mode: 'cors'
            }).then((response) => {
                response.json().then((data) => {
                    console.log(data.data)
                    setCurrentUserInfo(data.data);
                });
            })
            if (window.location == 'localhost:3000') 
                window.location.href = 'localhost:3000/home'; 
        }
        */
    }, [])
    if(authChecked){
        if(user){
            console.log(window.location)
            if (window.location.href == "http://localhost:8080/") 
                window.location.href = "http://localhost:8080/home"; 
        }
        return(
            <div>
            {currentUserInfo 
                ? 
                <Router>
                    <Route path="/" render={() => (<Header currentUserInfo={currentUserInfo}/>)}/>
                    <Switch>
                        <Route exact path="/home" render= {() => (<Home currentUserInfo={currentUserInfo } db={db}></Home>)}/>
                        <Route exact path="/user/:username/aesthetic/:aestheticId" render= {() => console.log('aesthetic')}/>
                        <Route exact path="/user/:username" render={() =>(<UserPage currentUserId={currentUserInfo.userID} db={db}></UserPage>)}/>
                        <Route exact path="/aesthetic/submit" render={() =>(<AestheticSubmitForm currentUserId={user.uid} db={db} storageService={storageService} fire={fire}></AestheticSubmitForm>)}/>
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