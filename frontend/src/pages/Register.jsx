import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../features/auth/authSlice'; //async thunk

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = formData;

  //dispatch method used to send actions to reducer
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //access auth state from the store
  const { isLoading } = useSelector((state) => state.auth);

  // function to set form state to new values
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //check passwords match
    if (password !== password2) {
      toast.error('Passwords do not match');
    } else {
      const userData = {
        name,
        email,
        password,
      };

      //trigger register async thunk
      dispatch(register(userData))
        .unwrap()
        .then((user) => {
          // NOTE: by unwrapping the AsyncThunkAction we can navigate the user after
          // getting a good response from our API or catch the AsyncThunkAction
          // rejection to show an error message
          toast.success(`Registered new user - ${user.name}`);
          navigate('/');
        })
        .catch(toast.error);
    }
  };

  // if (isLoading) {
  //   return <Spinner />;
  // }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              onChange={onChange}
              placeholder='Please enter your name'
            />
          </div>
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
            <label htmlFor='password'>Confirm Password</label>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              onChange={onChange}
              placeholder='Please re-enter your password'
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
