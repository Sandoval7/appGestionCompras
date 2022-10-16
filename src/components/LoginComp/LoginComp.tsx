
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithCustomToken, signOut } from "firebase/auth";
import React, { useState, useRef } from 'react';
import { auth } from '../../firebase/firebaseConfig';
import { useHistory } from "react-router-dom"



interface ContainerProps { }

const LoginComp: React.FC<ContainerProps> = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  //redireciones
  const history = useHistory()



  const singInUser = async (event: any) => {
    //hacer que no reacarge la pagina
    const e = event || window.event;
    e.preventDefault()
    //firebase
    await signInWithEmailAndPassword(auth, email, password)
    .then( async (res)  => {
      // Signed in
      setError(' ')
      history.push("/home")
      const user =  res.user;
      console.log(user)

      // ...
    })
    .catch((error) => {
      setError('No se a podido iniciar sesion')
      console.log(email, password)
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

  
  return (
    <div className="container">
      <div className='login'>
        <div className="tittle"> 
          <h1>Sing In</h1>
        </div>
        <form onSubmit={singInUser}>
          <input type="email" name='email' placeholder="Email" onChange={event => setEmail(event.target.value)} />
          <input type="password" name='password' placeholder="Contraseña" onChange={event => setPassword(event.target.value)}/>
          <p className="errors">{error}</p>
          <div>
           <button>Login</button>
          </div>
          <p>No tienes cuenta? <a href="/register">Register</a></p>
        </form>
      </div>
    </div>
  );
};

export default LoginComp;