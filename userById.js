//get a single contact
app.get('/users/:userId', (req,res) => {

    const userId = req.params.userId; 
    db.collection(userCollection).doc(userId).get()
    .then(user => {
        if(!user.exists) throw new Error('User not found');
        res.status(200).json({id:user.id, data:user.data()})})
    .catch(error => res.status(500).send(error));
        
});


// Delete a user
app.delete('/users/:userId', (req, res) => {
    db.collection(userCollection).doc(req.params.userId).delete()
    .then(()=>res.status(204).send("Document successfully deleted!"))
    .catch(function (error) {
            res.status(500).send(error);
    });
})

// Update user
app.put('/users/:userId', async (req, res) => {
    await db.collection(userCollection).doc(req.params.userId).set(req.body,{merge:true})
    .then(()=> res.json({id:req.params.userId}))
    .catch((error)=> res.status(500).send(error))

});