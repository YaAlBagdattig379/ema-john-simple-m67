import './Login.css'
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import {useLocation} from 'react-router-dom'; 
import auth from '../../firebase.init';
import img from '../../images/google.png'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Login = () => {
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
   const navigate = useNavigate();
   const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
   const location = useLocation();
   const from = location.state?.from?.pathname || '/' ;  
   const handleEmailBlur = event =>{
       setEmail(event.target.value);
   }
   const handlePasswordBlur = event =>{
       setPassword(event.target.value);
   } 
   // advanced modified
   useEffect(() => {
      if (user) {
         navigate(from,{replace: true});
      }
  },[user])

   const handleUserSignIn = event =>{
      event.preventDefault();
      signInWithEmailAndPassword(email,password);
      console.log('ehllo from handle userSignIn !')
   }
   return (
      <div className='form-container'>
         <div>
               <h2 className='form-title'>Login</h2>  
               <div>
               
               </div>
               <form onSubmit={handleUserSignIn}>
                  <div className='input-group'>
                     <label htmlFor="email">Email</label>
                     <input onBlur={handleEmailBlur} type="email" required name="email" id="" />
                 </div>
                  <div className='input-group'>
                     <label htmlFor="password">Password</label>
                     <input onBlur={handlePasswordBlur} type="password" required name="password" id="" />
                  </div>
                  <p style={{color:'red',marginLeft:'10px'}}>{error?.message}</p>
                  {
                   loading &&  <p>Loading...</p>
                  }
                  <input className='form-submit' type="submit" value="Login" />
               </form>
               <p style={{textAlign:'center'}}>
                 New to Ema-john? <Link className='form-link' to={'/signup'}>Create New Account</Link>  
                 
               </p>
            
               <div className='or-container'>
                   <div style={{border:'1px solid rgba(149, 160, 167, 1)',width:'145px',height:'0px'}}></div>
                   <p style={{fontSize:'17px',color:'rgba(149, 160, 167, 1)'}}>or</p>
                   <div style={{border:'1px solid rgba(149, 160, 167, 1)',width:'145px',height:'0px'}}></div>
               </div>
                    
               <div className='logInGoogle-container'>
                   <a className='login-withGoogle' style={{display:'flex',alignItems:'center'}} href="">
                      <div>
                         <img className='googleImg' style={{width:'26px', marginTop:'2px'}} src={img} alt="" />
                      </div>
                      <div>
                         <p style={{marginLeft:'10px',marginTop:'13px'}}> Continue with google</p>
                      </div>
                     
                   </a>
               </div>
             </div>
       </div>
   );
};

export default Login;