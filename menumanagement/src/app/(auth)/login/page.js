'use client';
import AuthForm from '../../../components/AuthForm';

const Login = () => {
  return (
    <div className="flex flex-col justify-center">
      <div>
        <h1>Log-in Page</h1>
      </div>
      <AuthForm mode="login" />
    </div>
  );
};

export default Login;
