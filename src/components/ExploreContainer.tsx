import './ExploreContainer.css';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithCustomToken, signOut } from "firebase/auth";
import React, { useState, useRef } from 'react';
import { auth } from '../firebase/firebaseConfig';



interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== '') {
      console.log('1.1')
      if (password !== confirmPassword) {
        console.log('1.2')
        isValid = false
        setError('No coinciden las contraseñas')
      }else{
        console.log('bien')
      }
    }
    return isValid
  }
 

  const createUser = async (event: any) => {
    const e = event || window.event;
    e.preventDefault()
    console.log('1')
    setError('')
    if (validatePassword()) {
      console.log('2')
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          console.log('enviado')
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          console.log('NO enviado')
          console.log(error)
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }else{
      console.log('mal')
    }

}

  
  return (
    <div className="container">
      <div className='login'>
        <form onSubmit={createUser} >
          <p>Email</p>
          <input type="email" name='email' id='email' onChange={event => setEmail(event.target.value)} />
          <p>Password</p>
          <input type="password" name='password' id='password' onChange={event => setPassword(event.target.value)}/>
          <p>Confirm Password</p>
          <input type="password" onChange={event => setConfirmPassword(event.target.value)}/>
          <div>
           <button type='submit' >Crear </button>
          </div>
          <a href="/login">Login</a>
        </form>
      </div>
    </div>
  );
};

export default ExploreContainer;
