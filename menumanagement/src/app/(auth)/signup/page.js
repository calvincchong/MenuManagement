import AuthForm from '../../../components/AuthForm';

const Signup = () => {

  return (
    <div className="flex flex-col justify-center">
      <div>
        <h1>Sign-in Page</h1>
      </div>
      <AuthForm mode="register" />
    </div>
  )
}

export default Signup;