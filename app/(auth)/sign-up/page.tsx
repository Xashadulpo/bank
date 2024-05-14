import AuthForm from '@/components/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.action';


const SignUp = () => {
  


  return (
    <div className='w-full flex items-center justify-center sm:mx-4 '>
      <AuthForm type="sign-up"/>
    </div>
  )
}

export default SignUp
