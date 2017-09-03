const firebase = require('firebase');
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBkqHdZQp8zarlWhTpUCSmbP3iuYq9YxzU",
    authDomain: "nagarro-a5bc3.firebaseapp.com",
    databaseURL: "https://nagarro-a5bc3.firebaseio.com",
    projectId: "nagarro-a5bc3",
    storageBucket: "nagarro-a5bc3.appspot.com",
    messagingSenderId: "140980778030"
  };
firebase.initializeApp(config);
module.exports = firebase;