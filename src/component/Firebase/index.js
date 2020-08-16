/*
For a well-encapsulated Firebase module, we'll define a index.js file in our Firebase folder that exports all necessary functionalities (Firebase class, Firebase context for Consumer and Provider components):
*/

import FirebaseContext from './context';
import Firebase from './firebase';

export default Firebase;

export { FirebaseContext };
