import database from '../Firebase';
import sessionStoreUserName from './sessionStore';

/**
 * async function to get user data from firebase
 * @param {*} userName 
 */
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

/**
 * remove all tasks from result
 * @param {*} taskId 
 */
const removeAllTaskStoryPoints = async (taskId) => {
  await database.collection('result').doc(taskId).delete();
  console.log('Deleted all Results: ');
};

export { getCurrentlyLoggedInUserDetails, removeAllTaskStoryPoints };
