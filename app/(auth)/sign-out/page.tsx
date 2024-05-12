import AuthForm from '@/components/AuthForm'
import React from 'react'

const SignOut = () => {
  return (
    <div className='w-full flex items-center justify-center sm:mx-4'>
      <AuthForm type="sign-out"/>
    </div>
  )
}

export default SignOut
