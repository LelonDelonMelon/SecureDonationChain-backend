//AUTHENTICATION... etc

const walletService = require('../services/wallet');
const errorController = require('../controller/errorController');


class Wallet{
    async list(req, res) {
   
        const wallets = await walletService.list();
        return res.json(wallets);
    }

    async create(req, res) {
        //console.log("req.body is : ",req.body);

        const filter = req.body;
        if(filter.walletAddress === "")
        {
            return errorController(req,res,"Wallet address can not be empty")
        }
        
        const wallet = await walletService.create(req.body); //gelen requeste göre user yarat
        return res.json(wallet)
    

    }
    async update(req ,res) {
        
        console.log("req.body is: ",req.body)
        const wallet = await walletService.update(req.params.id, req.body);
        
        
        return res.json(wallet);
    }
    async delete (req,res) {
        const wallet = await walletService.delete(req.params.id);
        console.log("deleted wallet");
        res.json(wallet);
    }
}

module.exports = new Wallet();