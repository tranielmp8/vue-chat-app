import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'




// init firebase
firebase.initializeApp(firebaseConfig)
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
const projectAuth = firebase.auth()

export { projectFirestore, timestamp, projectAuth }