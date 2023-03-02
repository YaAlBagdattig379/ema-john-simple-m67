import React,{ useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import img from '../../images/google.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Signup.css';
import auth from '../../firebase.init';

const Signup = () => {

   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
   const [conFirmPassword,setConFirmPassword] = useState('');
   const [error,setError] = useState('');

   const navigate = useNavigate();

   const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth) ;
   const handleEmailBlur = (event) =>{
        setEmail(event.target.value)
        console.log('email blur')
    }
   const handlePasswordBlur = (event) =>{
         setPassword(event.target.value)
         console.log('password blur')
   }
   const handleConfirmPasswordBlur = (event) =>{
        setConFirmPassword(event.target.value)
        console.log('confirm password blur')
   }
   // modified useEffect
   useEffect(() => {
      if (user) {
        navigate('/home');
      }
  },[user])
   const handleCreateUser = (event) =>{
         event.preventDefault(); 
         if(password !== conFirmPassword){
           setError('your two passwords did not match !')
            return;
         }
        if(password.length < 6){
            setError('password must be Six characters or longer !')
            return;
         }
    //     console.log(email,password)
        createUserWithEmailAndPassword(email,password);
   }
    return (
        <div className='form-container'>
            <div>
              <h2 className='form-title'>Sign Up</h2>  
              <form onSubmit={handleCreateUser}>
                 <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" required name="email" id="" />
                 </div>
                 <div className='input-group'>
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" required name="password" id="" />
                 </div>
                 <div className='input-group'>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input onBlur={handleConfirmPasswordBlur} type="password" required name="confirm-password" id="" />
                 </div>
                  <p style={{color:'red'}}>{error}</p>
                 <input className='form-submit' type="submit" value="Sign Up" />
              </form>
              <p style={{textAlign:'center'}}>
                Already have an account? <Link className='form-link' to={'/login'}>Login</Link>  
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

export default Signup;