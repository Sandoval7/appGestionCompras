import './ExploreContainer.css';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithCustomToken, signOut } from "firebase/auth";
import React, { useState, useRef } from 'react';
import { auth } from '../firebase/firebaseConfig';



interface ContainerProps { }

const LoginComp: React.FC<ContainerProps> = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');



  const singInUser = async () => {
    signInWithEmailAndPassword(auth, email, password)
    .then( async (res)  => {
      // Signed in
      console.log('1')
      const user =  await res.user;
      // ...
    })
    .catch((error) => {
      console.log(email, password)
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

  
  return (
    <div className="container">
      <div className='login'>
        <form onSubmit={singInUser}>
          <p>Email</p>
          <input type="email" name='email' onChange={event => setEmail(event.target.value)} />
          <p>Password</p>
          <input type="password" name='password' onChange={event => setPassword(event.target.value)}/>
          <p>Confirm Password</p>
          <input type="password" onChange={event => setConfirmPassword(event.target.value)}/>
          <div>
           <button >Login</button>
          </div>
          <a href="/">Login</a>
        </form>
      </div>
    </div>
  );
};

export default LoginComp;