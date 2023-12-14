import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // Your Firebase config details
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;
