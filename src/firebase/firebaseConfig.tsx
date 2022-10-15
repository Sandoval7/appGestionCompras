
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiWjxWvCQoXQ0Yoluh3exahCgYrdWj0zM",
  authDomain: "config1-f4ca0.firebaseapp.com",
  projectId: "config1-f4ca0",
  storageBucket: "config1-f4ca0.appspot.com",
  messagingSenderId: "550533329958",
  appId: "1:550533329958:web:4be8c9e6657aa76ad6e2e7",
  measurementId: "G-PQZWY85HD8"

};


// Initialize Firebase
const Fb = initializeApp(firebaseConfig);
const auth = getAuth(Fb)

export { auth, Fb }
/*
signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
});

signInWithCustomToken()
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

// Detect auth state
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
    console.log("Logged in!");
    alert("You are logged in!");
  } else {
    // User is signed out
    // ...
    console.log("Anonymous mode (signed out)");
  }
});


signOut(auth).then(() => {
  // Sign-out successful.
  console.log("logged out")
}).catch((error) => {
  // An error happened.
  alert("Network error");
});
*/