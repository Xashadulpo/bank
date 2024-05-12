import AuthForm from '@/components/AuthForm'
import React from 'react'

const SignIn = () => {
  return (
    <div className='w-full flex items-center justify-center sm:mx-4'>
      <AuthForm type="sign-in"/>
    </div>
  )
}

export default SignIn
