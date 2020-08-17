const sessionStoreUserName = () =>
  sessionStorage.getItem('agilePokerUserName') || '';

export const sessionStoreClearUserName = () =>
  sessionStorage.removeItem('agilePokerUserName');

export const addUserNameToSessionStore = (userName) =>
  sessionStorage.setItem('agilePokerUserName', userName);

export default sessionStoreUserName;
