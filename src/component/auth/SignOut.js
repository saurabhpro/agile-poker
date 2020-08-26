import sessionStoreUserName, {
  sessionStoreClearUserName,
} from '../utils/sessionStore';

import { unsetUser } from '../utils/firebaseDb';

export default function signOut() {
  const userName = sessionStoreUserName();
  logout(userName);
  sessionStoreClearUserName();
}

const logout = (userName) => {
  unsetUser(userName)
    .then(() => {
      console.log('logging out');
      // allow refreshing the page - and since our update was sucessfull - we will see home page
      window.location.href = `${process.env.PUBLIC_URL}/`;
    })
    .catch((e) => {
      console.error(e);
    });
};
