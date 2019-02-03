import firebase from "firebase";
const config = {
  apiKey: "AIzaSyDrboaVdgyIZvJ0KtrXUEJhJNeBka5aKAE",
  authDomain: "videobox-underground.firebaseapp.com",
  databaseURL: "https://videobox-underground.firebaseio.com",
  projectId: "videobox-underground",
  storageBucket: "videobox-underground.appspot.com",
  messagingSenderId: "760137609377"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
export default firebase