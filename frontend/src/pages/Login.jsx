import { useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { userSelector, useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    //dispatch to login thunk in authSlice
    dispatch(login(userData));
  };

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login with your details below</p>
      </section>
      <section className='form'>
        <form>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Please enter your email'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Please enter your password'
            />
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
