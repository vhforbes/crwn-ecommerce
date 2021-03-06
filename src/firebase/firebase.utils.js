import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
  apiKey: "AIzaSyDuan0JpoNVNAK5BxDPBXW1FX4gwLtwoTk",
  authDomain: "crwn-db-6fd87.firebaseapp.com",
  projectId: "crwn-db-6fd87",
  storageBucket: "crwn-db-6fd87.appspot.com",
  messagingSenderId: "197188196284",
  appId: "1:197188196284:web:93c5c33c7245a949a87db9"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return null

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
      console.log('Created user succesfully')

    } catch(error) {
      console.log('Error creating user')
      console.log(error)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase