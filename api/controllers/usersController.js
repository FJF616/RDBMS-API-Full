const db = require('../database/db.js')

exports.createUser = function(user) {
    return db('users')
        .insert(user)
        .then(function(ids) {
            return ({ id: ids[0] });
        })
    },
exports.getUserById = function(id) {
    let dbquery = db('users');
    if (id) {
        dbquery.where('id', id).first();
    }
    return dbquery;
    },
exports.getUserPosts = function(userId) {
    return db('posts as p')
        .join('users as u', 'u.id', 'p.userId')
        .select('p.id', 'p.text', 'u.name as postedBy')
        .where('p.userId', userId);
    },
exports.updateUser =  function(id, user) {
    return db('users')
        .where('id', id)
        .update(user);
    },
exports.deleteUser = function(id) {
    return db('users')
        .where('id', id)
        .del();
    };
