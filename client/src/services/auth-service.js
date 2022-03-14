import axios from 'axios';
import store from '../store/index';
import * as authSlice from '../store/auth';

const requester = axios.create({
  baseURL: 'http://localhost:5002/api/auth',
  headers: {
    'Content-Type': 'application/json',
  },
});

const login = async ({ email, password }) => {
  const { data, status } = await requester.post('/login', { email, password });

  if (status === 200) {
    const { user, token } = data;
    const reduxAction = authSlice.login({ user, token });
    store.dispatch(reduxAction);
    return true;
  }

  throw new Error(data.message);
};

const checkEmail = async (email) => {
  const { data } = await requester.get(`/check-email?email=${email}`);
  return data.available;
};

export default {
  login,
  checkEmail,
};