import database from '../Firebase';
import sessionStoreUserName from './sessionStore';

const getCurrentlyLoggedInUserDetails = async (userName) => {
  //fallback
  if (!userName) {
    userName = sessionStoreUserName();
  }

  // Get user
  const userRef = database.collection('users').doc(userName);
  const doc = await userRef.get();

  console.log('Currently Logged in User Result: ', doc.data());
  return { ...doc.data() };
};

export { getCurrentlyLoggedInUserDetails };
