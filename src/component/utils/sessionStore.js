const sessionStoreUserName = () =>
  sessionStorage.getItem('agilePokerUserName') || '';

export default sessionStoreUserName;
