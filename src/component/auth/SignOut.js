import sessionStoreUserName, {
  sessionStoreClearUserName,
} from '../utils/sessionStore';

import database from '../Firebase';

export default function signOut() {
  const userName = sessionStoreUserName();
  sessionStoreClearUserName();

  unsetUser(userName);
}

async function unsetUser(user) {
  // [START set_document]

  const userRef = database.collection('users').doc(user);

  try {
    // try printing the user data
    // const doc = await userRef.get();
    // if (!doc.exists) {
    //   console.log('No such document!');
    // } else {
    //   console.log('Document data:', doc.data());
    // }

    const res = await userRef.set(
      {
        isOnline: false,
      },
      { merge: true },
    );
    // [END set_document]

    console.log('Set: ', res);

    // allow refreshing the page - and since our update was sucessful - we wil see home page
    window.location.href = `${process.env.PUBLIC_URL}/`;
  } catch (e) {
    console.log(e);
  }
}
