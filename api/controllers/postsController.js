const db = require('../database/db.js')
createPost,
            getPosts,
            getPostById,
            updatePost,
            deletePos
exports.createPost = function(post) {
    return db('posts')
        .insert(post)
        .then(function(ids) {
            return ({id: ids[0]});
        })
    },
exports.getPosts = function(posts)