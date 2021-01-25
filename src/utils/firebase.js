import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyA9H9CG-WXGififLAhNeDCAr6zAC-SUoSE",
    authDomain: "chat-60848.firebaseapp.com",
    databaseURL: "https://chat-60848.firebaseio.com",
    projectId: "chat-60848",
    storageBucket: "chat-60848.appspot.com",
    messagingSenderId: "707860342456",
    appId: "1:707860342456:web:86efa79a05c04ffca7f64d"
  };

export default firebase.initializeApp(firebaseConfig);
