import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const links = user ? (
    <li>
      <button className='btn' onClick={onLogout}>
        Sign Out
      </button>
    </li>
  ) : (
    <>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
    </>
  );

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Support Desk</Link>
      </div>
      <ul>{links}</ul>
    </header>
  );
};

export default Header;
