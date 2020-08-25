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
 * remove all tasks from result by overwriting the existing info with empty
 * maybe delete the doc after this overwriting
 * @param {*} team name
 */
const removeTasksOfTeam = async (team) => {
  console.log('Cleared Tasks for: ', team);

  return await database.collection('result').doc(team).set({});
};

const getTaskForTeam = async (team) => {
  const res = await database.collection('result').doc(team).get();

  if (res.exists) {
    console.log(res.data());
    return res.data();
  }
};

const getTaskIdForTeam = (team) => {
  
  database
    .collection('result')
    .doc(team)
    .onSnapshot(function (doc) {
      return doc.data();
    });
};

const createEmptyTaskForTeam = async (team, taskId) => {
  // Add a new document in collection "result/task/users" with ID 'userName'
  const res = await database.collection('result').doc(team).set({
    taskId: taskId,
    members: [],
  });

  console.log('Stored Result: ', taskId, ' ', res);
};

export {
  getCurrentlyLoggedInUserDetails,
  removeTasksOfTeam,
  getTaskForTeam,
  getTaskIdForTeam,
  createEmptyTaskForTeam,
};
