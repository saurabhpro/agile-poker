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

/**
 * the complete result for the team is returned - used to get the story points and memeber name
 * @param {*} team the team name as string
 */
const getTaskForTeam = async (team) => {
  const res = await database.collection('result').doc(team).get();

  if (res.exists) {
    console.log(res.data());
    return res.data();
  }
};

/**
 * only get the changed task id immeditly
 * @param {*} team
 */
const getTaskIdForTeam = (team) => {
  database
    .collection('result')
    .doc(team)
    .onSnapshot(function (doc) {
      return doc.data();
    });
};

/**
 * init the team result document with two properties - taskid and empty member array
 * @param {*} team the team name
 * @param {*} taskId the task id for the teams
 */
const createEmptyTaskForTeam = async (team, taskId) => {
  // Add a new document in collection "result/task/users" with ID 'userName'
  const res = await database.collection('result').doc(team).set({
    taskId: taskId,
    members: [],
  });

  console.log('Stored Result: ', taskId, ' ', res);
};

/**
 * aysnc method to mark the currently active user offline
 * @param {*} user the username or primary key of firebase document
 */
async function unsetUser(user) {
  const userRef = database.collection('users').doc(user);

  // try printing the user data
  // const doc = await userRef.get();
  // if (!doc.exists) {
  //   console.log('No such document!');
  // } else {
  //   console.log('Document data:', doc.data());
  // }

  return await userRef.set(
    {
      isOnline: false,
    },
    { merge: true },
  );
}

export {
  getCurrentlyLoggedInUserDetails,
  removeTasksOfTeam,
  getTaskForTeam,
  getTaskIdForTeam,
  createEmptyTaskForTeam,
  unsetUser,
};
