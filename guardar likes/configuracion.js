
// Inicializar Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDbQXt7zVmjdK_rlXY-ofcLDEVtI7WPaLU",
    authDomain: "guardar-like.firebaseapp.com",
    projectId: "guardar-like",
    storageBucket: "guardar-like.appspot.com",
    messagingSenderId: "860276404709",
    appId: "1:860276404709:web:fee0041d305b25d628ff0c",
    measurementId: "G-QX3LJXWVLM"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();