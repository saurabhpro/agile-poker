const sessionStoreUserName = () =>
  sessionStorage.getItem('agilePokerUserName') || '';

export const sessionStoreClearUserName = () =>
  sessionStorage.removeItem('agilePokerUserName');

export default sessionStoreUserName;
