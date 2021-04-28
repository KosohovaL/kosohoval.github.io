// import * as firebase from 'firebase/app'
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database"
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCRw_UlgWdCdZD0OpRewTly3XWR0hEhwpk",
    authDomain: "playlistreact.firebaseapp.com",
    databaseURL: "https://playlistreact-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "playlistreact",
    storageBucket: "playlistreact.appspot.com",
    messagingSenderId: "954697040092",
    appId: "1:954697040092:web:bbb5b38d78f683e0b73419",
    measurementId: "G-LBWKFBZJFQ"
};
// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
