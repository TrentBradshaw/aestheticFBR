import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import LinkIcon from '@material-ui/icons/Link';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import TextFieldsOutlinedIcon from '@material-ui/icons/TextFieldsOutlined';


function AestheticSubmitForm({currentUserId, db, storageService, fire}){
    
    const [highlighted, setHighlighted] = useState('text');
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [body, setBody] = useState('');
    const [imageArray, setImageArray] = useState([]);
    const [currentFile, setCurrentFile] = useState();
    const [titleCreated, setTitleCreated] = useState(false);
    const [titleError, setTitleError] = useState(false);
    const [titleErrorMessage, setTitleErrorMessage] = useState('');

        return (
            <div style={{backgroundColor: 'white'}} className = 'headerSubmitForm'>
                <h1 style={{backgroundColor: '#5c8bc4', color: 'white', borderRadius:  '5px 5px 0px 0px', marginBottom: '40px'}} >Create a Post</h1>
                <div>
                    {titleCreated && <h2>{title}</h2>}
                    { !titleCreated && <textarea className={['thinInput', 'textArea'].join(" ")} id = "dockPostTitle" type='text' maxLength = "50" placeholder="Firstly, let's create a title" name='title' onChange = { (e) => {HandleTitleChange(e.target.value)}}></textarea>}
                    <button id='titleSaveButton' onClick={() => {handleTitleSave(title)}}>Save</button>
                    {titleError && <span style= {{backgroundColor:'red'}} id='titleError'>{titleErrorMessage}</span>}
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                </div>
                {titleCreated &&
                    <div id = 'uploadAndProgress'>
                    <progress value='0' max ='100' id ='uploader'>0%</progress>
                    <input type='file' id='fileButtonOne'onChange={(e)=>{fileUploadHandler(e)}} />
                    <button id = 'aestheticOneSaveButton' onClick={() => {SaveAestheticImage(title, currentFile)}}>save</button>
                </div>
                }
                
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                <div id='photoContainer' style={{textAlign: 'center'}}>
                {
                    imageArray.map((element)=>(
                       <img id = {element.filename} style={{height: '70%', width: '90%'}}/>
                    ))
                }
                </div>
                
                <button className = 'submitButton' type="button" onClick={()=>{submit()}}>SUBMIT</button>
                </div>
            </div>
        )
    function handleTitleSave(title){
        if (title.length < 1){
            setTitleError(true)
            setTitleErrorMessage('title must be at least one character.')
            return;
        }else if (title.length > 20){
            setTitleError(true)
            setTitleErrorMessage('title must be fewer than twenty characters.')
            return;
        }
        else{
            setTitleCreated(true);
            let titleSaveButton = document.getElementById('titleSaveButton');
            titleSaveButton.style.display = 'none';

        }
    } 
    function HandleTitleChange(title){
        setTitle(title);
        if (title.length > 0 && title.length < 20)
            setTitleError(false);
    }
    function listenForEdit() {
        console.log('aestheticInteractionDiv');
                const aestheticLookup = aestheticNamePassed.innerHTML;
                const ownerOfAesthetic = document.getElementById('ownerOfAesthetic');
                const owner = ownerOfAesthetic.innerHTML;
                const currentUser = document.getElementById('profileDropDown');
                db.collection('users').get().then(snapshot => {
                    snapshot.docs.forEach(doc => {
                        if (doc.data().username === owner) {
                            if (currentUserId === doc.data().userID) {
                                console.log('yataa');
                                const deleteButton = document.createElement('button');
                                deleteButton.setAttribute('id', 'deleteButton');
                                deleteButton.innerHTML = 'delete';
                                const editButton = document.createElement('button');
                                editButton.setAttribute('id', 'editButton');
                                editButton.innerHTML = 'edit';
                                const aestheticInteractionButtonDiv = document.getElementById('aestheticInteractionButtonDiv');
                                const uploadAndProgress = document.getElementById('uploadAndProgress');
                                aestheticInteractionButtonDiv.appendChild(editButton);
                                aestheticInteractionButtonDiv.appendChild(deleteButton);
                                if (editButton) {
                                    editButton.addEventListener('click', () => {
                                    console.log('dab');
                                    uploadAndProgress.style.display = 'block';
                                    });
                                }
                                if (deleteButton) {
                                    deleteButton.addEventListener('click', () => {
                                        if (confirm('delete Curation?')) {
                                            const aestheticLookup = aestheticNamePassed.innerHTML;
                                            const ownerOfAesthetic = document.getElementById('ownerOfAesthetic');
                                            const currentUser = document.getElementById('profileDropDown');
                                            db.collection('users').get().then(snapshot =>{ // cycle through users
                                                snapshot.docs.forEach(doc => {
                                                    if (doc.data().username.toLowerCase() === ownerOfAesthetic.innerHTML.toLowerCase()) {
                                                        if (currentUser.innerHTML.toLowerCase() === ownerOfAesthetic.innerHTML.toLowerCase()) {
                                                            const arrayListForManipulationAndDeletion = doc.data().userAestheticList;
                                                            const userID = doc.data().userID;
                                                            let i;
                                                            for (i = 0; i < arrayListForManipulationAndDeletion.length; i++) {
                                                                const aestheticUnderInspection = arrayListForManipulationAndDeletion[i];
                                                                console.log(aestheticUnderInspection);
                                                                if (aestheticUnderInspection === aestheticLookup) {
                                                                    arrayListForManipulationAndDeletion.splice(i, 1);
                                                                    db.collection('users').doc(userID).update({
                                                                        userAestheticList: arrayListForManipulationAndDeletion,
                                                                        aestheticPosts: doc.data().aestheticPosts - 1,
                                                                    });
                                                                    db.collection('users').doc(userID).collection('aesthetics').doc(aestheticLookup).delete();
                                                                    setTimeout(() => {
                                                                        window.location.href = 'https://acethetic.co/user/' + currentUser.innerHTML;  // redirect to the signed in user's profile
                                                                    }, 500); // will call the function after 2 secs. Temporary
                                                                }
                                                            }
                                                        }
                                                    }
                                                });
                                            });
                                        } else {
                                            console.log('cancelled');
                                        }
                                    });
                                }
                            }
                        }
                    });
                });
    }
    function SaveAestheticImage(aestheticNamePassed,file){
        console.log('save');
        const uploadAndProgress = document.getElementById('uploadAndProgress');
        uploadAndProgress.style.display = 'none';
        db.collection('users').doc(currentUserId).collection('aesthetics')
        .doc(aestheticNamePassed).update({
            aestheticFileNames: db.FieldValue.arrayUnion(file.name),
        });
    }
    function fileUploadHandler(e) {
        let fileObject = {};
        fileObject.file = e.target.files[0];
        db.collection('users').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                if (doc.data().userID == currentUserId) {
                    function progress(snapshot) {
                        const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        let uploader = document.getElementById('uploader');
                        uploader.value = percentage;
                    }
                    function error(err) {const errorMessage = err.message; const errorCode = err.code;}
                    function complete() {
                        currentStorageRef.getDownloadURL().then((url) => {
                            fileObject.url = url;
                            setImageArray(imageArray => [...imageArray, fileObject])
                            return true;
                        }).catch((error) => {const errorCode = error.code; const errorMessage = error.message;});
                    }
                    let file = e.target.files[0];
                    let currentStorageRef = storageService.ref(currentUserId + '/' +  {title} + '/' + fileObject.file.name);
                    let task = currentStorageRef.put(file);
                    task.on('state_changed', progress, error, complete);
                }});
                return true;
        }).catch((error) => {const errorCode = error.code; const errorMessage = error.message; console.log(errorMessage, errorCode)});
    }
    function submit(){ 
        fetch('/api/posts/submit', {
            headers:{'X-CSRF-TOKEN': document.getElementById('csrf-token').getAttribute('content'),'Content-Type':'application/json'},
            method: 'post',
            mode: "same-origin",
            credentials: "same-origin",
            body: JSON.stringify({
                    community: document.getElementById("dockInput").value,
                    type: highlighted,
                    title: title,
                    text: body,
                    url: url,
            })
        }).then(response => response.json(console.log(response)))
        .then(data => {
            console.log(JSON.stringify(data['post']))
            console.log(data['data'])
            //window.location.replace(data['url'])
        })           
    }
}

export default AestheticSubmitForm