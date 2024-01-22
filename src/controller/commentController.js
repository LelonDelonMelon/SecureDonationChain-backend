const commentService = require('../services/comment');
const errorController = require('../controller/errorController');
const campaignRating = require('../controller/campaignRating')
class Comment{
    async list(req, res) {

        console.log(req.query);
        const comments = await commentService.list(req.query);
        return res.json(comments);
    }
    async create(req,res){
        const filter = req.body;
        if(await commentService.findOne(filter))
        {
            return errorController(res,res,"Comment already exists");
        }
        if(req.body.content.length >= 255)
        {
            return errorController(req,res,"Comment is too long")
        }
        if(req.body.campaignRating > 5)
        {
            return errorController(req,res,"Rating value is greater than 5")
        }
        
        const comment = await commentService.create(req.body)
        console.log("Creating comment", comment);
        return res.json(comment);
    }
    async update(req,res){
        console.log("Updating comment with following content: ", req.body.id)
        const comment = await commentService.update(req.params.id,req.body);
        console.log("updated comment")
        return res.json(comment);
    }
    async delete(req,res){
        console.log("deleting comment with id", req.params.id)
        const comment = await commentService.delete(req.params.id);
        console.log("Deleted comment")
        res.json(comment);
    }
}
module.exports = new Comment();