const { combineReducers } = require('redux');
const postsReducer = require('./post');
const userReducer = require('./user');

module.exports = combineReducers({
  user: userReducer,
  posts: postsReducer,
});
