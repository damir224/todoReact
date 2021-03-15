import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAC } from '../redux/user/actions';

export default function Navbar() {
  const store = useSelector((state) => state.userReducers);
  const dispatch = useDispatch();
  const logout = async () => {
    await fetch('auth/signout');
    dispatch(logoutAC());
  };

  return (
    <nav className='flex items-center justify-between'>
      <div>
        <Link
          className='block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-indigo-400 mx-4'
          to='/todo'
        >
          todo{' '}
        </Link>
        <Link
          className='block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-indigo-400 mr-4'
          to='/todo'
        >
          Login{' '}
        </Link>
        <Link
          className='block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-indigo-400'
          to='/todo'
        >
          Login{' '}
        </Link>
      </div>
      {store.user.isAuth && (
        <div className='flex'>
          <Link
            to='/'
            className='block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0'
          >
            {store.user.email}
          </Link>
          <Link
            to='/auth/logout'
            className=' block text-md px-4  ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0'
            onClick={logout}
          >
            Log out
          </Link>
        </div>
      )}
      {!store.user.isAuth && (
        <div className='flex'>
          <Link
            to='/auth/signup'
            className='block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0'
          >
            Sign up
          </Link>
          <Link
            to='/auth/login'
            className=' block text-md px-4  ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0'
          >
            login
          </Link>
        </div>
      )}
    </nav>
  );
}
