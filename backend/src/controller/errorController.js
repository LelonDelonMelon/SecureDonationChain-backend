module.exports = (req, res, errIdentifier) => {
    if(errIdentifier==='Campaign already exists')
    {
        res.status(500).send("Campaign Already Exists")
    }
    if(errIdentifier==='User already exists')
    {
        res.status(500).send('User Already Exists')
    }
    if(errIdentifier ==='Wallet Already Exists')
    {
        res.status(500).send('Wallet Already Exists')
    }
    //res.status(500).send('Error Occured');
}