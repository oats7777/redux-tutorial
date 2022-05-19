const { createStore } = require('redux');

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...prevState,
        user: action.data,
      };
    case `LOG_OUT`:
      return {
        ...prevState,
        user: null,
      };
    case `ADD_POST`:
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
      };
    default:
      return prevState;
  }
};

const initialState = {
  user: null,
  posts: [],
};

const store = createStore(reducer, initialState);
store.subscribe(() => {
  console.log('change');
});

console.log(store.getState());

const logIn = (data) => {
  return {
    // action
    type: 'LOG_IN',
    data,
  };
};

const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};

const addPost = (data) => {
  return {
    type: 'ADD_POST',
    data,
  };
};

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
