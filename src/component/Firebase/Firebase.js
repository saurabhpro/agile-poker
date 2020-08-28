// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';

import config from './config';

firebase.initializeApp(config);
export const auth = firebase.auth;
export const database = firebase.firestore();
export const currentTimeStamp = firebase.firestore.FieldValue.serverTimestamp();
