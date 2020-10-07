import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

export const config = {
  apiKey: "AIzaSyCuN3Vml--DFFvmCH4E3d-3y5a2T7_w-sY",
  authDomain: "yamilelias-portfolio.firebaseapp.com",
  databaseURL: "https://yamilelias-portfolio.firebaseio.com",
  projectId: "yamilelias-portfolio",
  storageBucket: "yamilelias-portfolio.appspot.com",
  messagingSenderId: "984767434388",
  appId: "1:984767434388:web:dc9298c0d7c6da7296ee81"
};

export const fireapp = firebase.initializeApp(config);
