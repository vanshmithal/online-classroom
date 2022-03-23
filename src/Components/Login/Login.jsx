import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [state, setState] = useState({
    username: '',
    password: '',
    loginType: 'student',
    token: 'abcd1234',
    subjectList: ['p', 'c'],
    subjectCode: ['p'],
  })

  function loginHandler(e) {
    e.preventDefault()
    console.log('login page: ', state)
    //validators
    //api call
    navigate('dashboard', { state })
  }

  return (
    <>
      <div className='login-container'>
        <h3>Log into your account </h3>
        <div>
          <label htmlFor='username'>Username: </label>
          <input
            type='email'
            id='username'
            placeholder='Enter Username'
            value={state.username}
            onChange={(e) => setState({ ...state, username: e.target.value })}
            onClick={(e) => e.target.select()}
          />
        </div>
        <div>
          <label htmlFor='password'>Password: </label>
          <input
            type='password'
            id='password'
            placeholder='Enter Password'
            value={state.password}
            onChange={(e) => setState({ ...state, password: e.target.value })}
            onClick={(e) => e.target.select()}
          />
        </div>
        <div>
          <label htmlFor='student-login'>Student</label>
          <input
            type='radio'
            id='student-login'
            name='login-type'
            checked={state.loginType === 'student' ? true : false}
            onChange={() => setState({ ...state, loginType: 'student' })}
          />
          <label htmlFor='teacher-login'>Teacher</label>
          <input
            type='radio'
            id='teacher-login'
            name='login-type'
            checked={state.loginType === 'teacher' ? true : false}
            onChange={() => setState({ ...state, loginType: 'teacher' })}
          />
        </div>
        <button type='submit' onClick={loginHandler}>
          Login
        </button>
        <p onClick={() => navigate('signup')}>Don't have an account? Signup </p>
      </div>
    </>
  )
}

export default Login
