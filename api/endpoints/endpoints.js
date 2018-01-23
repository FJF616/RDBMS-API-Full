module.exports = app => {
    const { createUser, 
            getUser, 
            getUserById,
            getUserPosts, 
            updateUser, 
            deleteUser } = require('../controllers/usersController.js');
    const { createPost,
            getPosts,
            getPostById,
            updatePost,
            deletePost } =  require('../controllers/postsController.js');
    const { createTag, 
            getTags,
            getTagById,
            updateTag } = require('../controllers/tagsController.js');
   
    /***************** These are all the Users endpoints ***************************/
    app.post('/users', createUser)
    app.get('/users', getUser);
    app.get('/users/:id', getUserById);
    app.get('/users/:id/posts', getUserPosts);
    app.put('/users/:id', updateUser);
    app.delete('/users/:id', deleteUser);

    /***************** These are all the Posts enpoints ***************************/
};