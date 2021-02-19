import { React, useState } from 'react'

import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'

import './signIn.styles.scss'

import { signInWithGoogle } from '../../firebase/firebase.utils'

const SignIn = () => {

  const [ email, setEmail ] = useState('test@gmail.com')
  const [ password, setPassword ] = useState('12345')

  const handleSubmit = event => {
    event.preventDefault()

  }


  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label='email'
          type='email'
          name='email'
          value={email}
          required
          handleChange={e => setEmail(e.target.value)}
        />

        <FormInput
          label='password'
          type='password'
          name='password'
          value={password}
          required
          handleChange={e => setPassword(e.target.value)}
        />

        <div className='buttons'>
          <CustomButton >
            Sign In
          </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn