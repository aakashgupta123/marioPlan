import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

var config={
apiKey: "AIzaSyBFeNE3zbcH2M5KjNmKtae0GmbOVLWndzk",
authDomain: "net-ninja-marioplan-b77ae.firebaseapp.com",
databaseURL: "https://net-ninja-marioplan-b77ae.firebaseio.com",
projectId: "net-ninja-marioplan-b77ae",
storageBucket: "net-ninja-marioplan-b77ae.appspot.com",
messagingSenderId: "939106031520",
appId: "1:939106031520:web:c483b438ed4e6021ff76c5",
measurementId: "G-4QFZJCNNFF"
};
firebase.initializeApp(config);
// firebase.firestore().settings({timestampsInSnapshots:true})

export default firebase;
