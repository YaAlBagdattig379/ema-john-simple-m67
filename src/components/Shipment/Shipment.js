import React,{ useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
   const [user] = useAuthState(auth);
   const [name,setName] = useState('');
   const [email,setEmail] = useState('');
   const [address,setAddress] = useState('');
   const [phone,setPhone] = useState('');
   const [error,setError] = useState('');
// const navigate = useNavigate();
    const handleNameBlur = (event) =>{
        setName(event.target.value)
        console.log('email blur')
    }
    /**
     const handleEmailBlur = (event) =>{
         setEmail(event.target.value);
    }
    */
    const handleAddressBlur = (event) =>{
         setAddress(event.target.value)
         console.log('password blur')
    }
    const handlePhoneNumberBlur = (event) =>{
        setPhone(event.target.value)
        console.log('confirm password blur')
    }
    const handleCreateUser = (event) =>{
        event.preventDefault();
        const shipping = {name,email,address,phone} ;
        console.log(shipping) ;
    }
    return (
        <div className='form-container'>
        <div>
          <h2 className='form-title'>Your Shipping Info</h2>  
          <form onSubmit={handleCreateUser}>
             <div className='input-group'>
                <label htmlFor="name">Your Name</label>
                <input onBlur={handleNameBlur}  placeholder='type name' type="text" required name="Name" id="" />
             </div>
             <div className='input-group'>
                <label htmlFor="email">Your Email</label>
                <input  value={user?.email} readOnly type="email" required name="email" id="" />
             </div>
             <div className='input-group'>
                <label htmlFor="password">Your Address</label>
                <input onBlur={handleAddressBlur}  type="text" required name="Address" id="" />
             </div>
             <div className='input-group'>
                <label htmlFor="phone">Phone Number</label>
                <input onBlur={handlePhoneNumberBlur} type="text" required name="Phone" id="" />
             </div>
              <p style={{color:'red'}}>{error}</p>
             <input className='form-submit' type="submit" value="Add Shipping"/>
          </form>
        </div>
    </div>
    );
};

export default Shipment;