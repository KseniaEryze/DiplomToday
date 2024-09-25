import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey:AIzaSyBbu4rErtGpIe7zjlWFqBlYvekbwFZLcaE,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUSCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENGER_ID,
    appId: diesel-polymer-419114
}

const app = initializeApp(firebaseConfig)