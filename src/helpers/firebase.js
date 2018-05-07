import firebase from 'firebase';

export const config = {
  apiKey: 'AIzaSyCeOd7dnJGLl0Slt0kZYzUNpD1bulyOJQo',
  authDomain: 'yamilelias-portfolio.firebaseapp.com',
  databaseURL: 'https://yamilelias-portfolio.firebaseio.com',
  projectId: 'yamilelias-portfolio',
  storageBucket: 'yamilelias-portfolio.appspot.com',
  messagingSenderId: '984767434388',
};

export const fireapp = firebase.initializeApp(config);
