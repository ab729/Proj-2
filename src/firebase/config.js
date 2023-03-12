import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyABwxl2W_qEuYUS6T9aMn8FqGPUFVH1OEo",
    authDomain: "mymoney-f2c0d.firebaseapp.com",
    projectId: "mymoney-f2c0d",
    storageBucket: "mymoney-f2c0d.appspot.com",
    messagingSenderId: "85095980808",
    appId: "1:85095980808:web:5c8b1cb728f45b496156bd"
  };

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  export { projectFirestore, projectAuth }