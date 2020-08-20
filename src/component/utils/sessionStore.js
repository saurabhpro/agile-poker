/**
 * get the user name store in sesson store
 */
const sessionStoreUserName = () =>
  sessionStorage.getItem('agilePokerUserName') || '';

/**
 * clears the user name store in session store
 */
export const sessionStoreClearUserName = () =>
  sessionStorage.removeItem('agilePokerUserName');
/**
 *
 * @param {*} userName sets this user name into the session store
 */
export const addUserNameToSessionStore = (userName) =>
  sessionStorage.setItem('agilePokerUserName', userName);

export default sessionStoreUserName;
