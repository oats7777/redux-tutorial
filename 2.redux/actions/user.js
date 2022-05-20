const logIn = (data) => {
  return (dispatch, getState) => {
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(loginSuccess({ userId: 1, nickname: 'kyu' }));
      }, 2000);
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};

const logInFailure = (error) => {
  return {
    type: 'LOG_IN_FAILURE',
    error,
  };
};

const logInRequest = (data) => {
  return {
    type: 'LOG_IN_REQUEST',
    data,
  };
};

const loginSuccess = (data) => {
  return {
    type: 'LOG_IN_SUCCESS',
    data,
  };
};

// const logIn = (data) => {
//   return {
//     // action
//     type: 'LOG_IN',
//     data,
//   };
// };

const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};

module.exports = {
  logIn,
  logOut,
};
