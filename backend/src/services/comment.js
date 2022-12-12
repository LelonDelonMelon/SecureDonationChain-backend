const BaseService = require('./base')
const comment = require('../models/comment')

class CommentService extends BaseService{
    constructor(){
        super(comment);
    }
}

module.exports = new CommentService();