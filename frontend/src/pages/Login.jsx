import React, { useState } from "react";
import { FaSignInAlt } from 'react-icons/fa';
import { toast } from 'react-toastify'
import { loginUser } from '../features/auth/authSlice'
import { useSelector, useDispatch} from 'react-redux'

const Login = () => {
  const [ formData, setFormData ] = useState({
    email: '',
    password: ''
  })

const { email, password } = formData


const dispatch = useDispatch()

const {user, isLoading, isSuccess, message} = useSelector((state) => state.auth)

const onChange = (e) => {
  setFormData((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }))
}

 const onSubmit = (e) => {
  e.preventDefault()
  const userData = {
   email, 
   password
  }
 dispatch(loginUser(userData)) 
}

  return(
    <>
    <section className="heading">
      <h1>
        <FaSignInAlt /> Login
      </h1>
      <p>Please login for help</p>
    </section>
    <section className="form">
      <form onSubmit={onSubmit}>
        
        <div className="form-group">
          <input 
          type="email" 
          className="form-control" 
          id="email" 
          name='email'
          value={email} 
          onChange={onChange}
          placeholder='Enter your email' 
          required
          />
        </div>
        <div className="form-group">
          <input 
          type="password" 
          className="form-control" 
          id="password" 
          name='password'
          value={password} 
          onChange={onChange}
          placeholder='Enter a password' 
          required
          />
        </div>
        
        <div className="form-group">
          <button className="btn btn-block">
            Submit
          </button>
        </div>
      </form>
    </section>
    </>
  )
};

export default Login;
