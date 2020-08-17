/*
For a well-encapsulated Firebase module, we'll define a index.js file in our Firebase folder that exports all necessary functionalities (Firebase class, Firebase context for Consumer and Provider components):
*/

import FirebaseContext from './context';
import { auth, database } from './Firebase';

export default database;

export { auth, FirebaseContext };
