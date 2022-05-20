const { combineReducers } = require('../../1.redux/node_modules/redux');
const postsReducer = require('./post');
const userReducer = require('./user');

module.exports = combineReducers({
  user: userReducer,
  posts: postsReducer,
});
