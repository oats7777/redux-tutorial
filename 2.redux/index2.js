const { createStore, compose, applyMiddleware } = require('redux');
const reducer = require('./reducers');
const { logIn, logOut } = require('./actions/user');
const { addPost } = require('./actions/post');

const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
};

const firstMiddleware = (store) => (dispatch) => (action) => {
  console.log('액션 로깅', action);
  // 기능추가
  dispatch(action);
  // 기능추가
  console.log('액션 끝');
};

const enhancer = compose(applyMiddleware(firstMiddleware));

const store = createStore(reducer, initialState, enhancer);
store.subscribe(() => {
  console.log('change');
});

console.log(store.getState());

store.dispatch(
  logIn({
    id: 1,
    name: 'kyu',
    admin: true,
  })
);

console.log('2nd', store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: 'hi redux',
  })
);

console.log('3rd', store.getState());

store.dispatch(logOut());

console.log('4th', store.getState());
