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
    if(errIdentifier ==='Campaign description is too long')
    {
        res.status(500).send('Campaign Description is Too Long')
    }
    if(errIdentifier ==='Password cannot be empty')
    {
        res.status(500).send("Password Field Can't be Empty");
    }
    
    if(errIdentifier ==='Wallet address can not be empty')
    {
        res.status(500).send("Wallet Address can't be empty");
    }
    if(errIdentifier ==='Comment already exists'){
        res.status(500).send("Comment Already Exists");
    }
    if(errIdentifier ==='Comment is too long'){
        res.status(500).send('Comment is Too Long')
    }
    
    //res.status(500).send('Error Occured');
}