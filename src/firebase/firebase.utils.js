import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBFeoVmfarWIlaYF57BhjZxL4vXXhbadKY',
  authDomain: 'crwn-clothing-c1574.firebaseapp.com',
  projectId: 'crwn-clothing-c1574',
  storageBucket: 'crwn-clothing-c1574.appspot.com',
  messagingSenderId: '687511681733',
  appId: '1:687511681733:web:d76f9b80c960c1f1ca8eac',
  measurementId: 'G-DLTV67TL7N',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
