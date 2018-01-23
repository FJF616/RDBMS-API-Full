const db = require('../database/db.js')
createTag, 
getTags,
getTagById,
updateTag 
  exports.getTag = function(id) {
    let query = db('tags');
    if (id) {
      query.where('id', id).first();
    }
    return query;
  },
  exports.createTag = function(tag) {
    return db('tags')
      .insert(tag)
      .then(ids => ({ id: ids[0] }));
  },
  exports.updateTag = function(id, tag) {
    return db('tags')
      .where('id', id)
      .update(tag);
  },
  exports.deleteTag =  function(id) {
    return db('tags')
      .where('id', id)
      .del();
  }