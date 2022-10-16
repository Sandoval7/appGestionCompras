import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithCustomToken, signOut } from "firebase/auth";
import React, { useState, useRef } from 'react';
import { auth } from '../../firebase/firebaseConfig';
import './RegisterComp.css'
import { useHistory } from "react-router-dom"
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

interface ContainerProps { }

const RegisterComp: React.FC<ContainerProps> = () => {

  //variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory()

  //validacion de contraseña
  const validatePassword = () => {
    let isValid = true
    console.log(email, password, confirmPassword)
    console.log('empieza la validacion')
    if (password !== '' || confirmPassword !== '') {
      isValid = true
      console.log(email, password, confirmPassword)
      console.log('Contraseña estan escritas')
      if(password.length > 6){
        isValid = true
        console.log(email, password, confirmPassword)
        console.log('contraseña tiene mas de 7')
        if (password == confirmPassword) {
          isValid = true
          console.log(email, password, confirmPassword)
          console.log('son iguales')
          
        }else{
          setError('No coinciden las contraseñas') 
          console.log(email, password, confirmPassword)
          isValid = false
        }

      }else{
        setError('La contraseña tiene que tener mas de 7 caracteres')
        console.log(email, password, confirmPassword)
        isValid = false
      }
    }else{
      setError('No puede estar un campo vacio')
      console.log(email, password, confirmPassword)
      isValid = false
    }


    return isValid
  }
 
  //crear usuario
  const createUser = async (event: any) => {
    //hacer que no reacarge la pagina
    const e = event || window.event;
    e.preventDefault()
    console.log('1')
    setError('')
    //validacion
    if (validatePassword()) {
      console.log('validado')
      console.log(email, password, confirmPassword)
      //firebase
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          history.push("/login")
          console.log('enviado')
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          setError('Email invalido')
          console.log(error)
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }

  }

  
  return (
    <div className="container">
      <div className='login'>
        <div className="tittle"> 
          <h1>Sing Up</h1>
        </div>
        <form onSubmit={createUser} >
          <input type="email" name='email' id='email' placeholder="Email" onChange={event => setEmail(event.target.value)} />
          <input type="password" name='password' id='password' placeholder="Contraseña" onChange={event => setPassword(event.target.value)}/>
          <input type="password" placeholder="Confirmar Contraseña" onChange={event => setConfirmPassword(event.target.value)}/>
          <div className='errors'>
            <p>{error}</p>
          </div>
          <div>
           <button type='submit' >Crear </button>
          </div>
          <p>Ya tienes cuenta? <a href="/login">Sing in</a></p>
        </form>
      </div>
    </div>
  );
};

export default RegisterComp;
