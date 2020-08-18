import {
  addUserNameToSessionStore,
  default as sessionStoreUserName,
  sessionStoreClearUserName,
} from '../sessionStore';

test('should store session store user name', () => {
  addUserNameToSessionStore('Saurabh');

  expect(sessionStoreUserName()).toBe('Saurabh');
});

test('should clear session store user name', () => {
  addUserNameToSessionStore('Saurabh');
  sessionStoreClearUserName();
  expect(sessionStoreUserName()).toEqual('');
});
