import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../features/Auth/Auth.context';
import { Link } from '../styled-components';
export function Nav() {
  const { logout, user } = useAuthContext();

  return (
    <nav className="bg-white-900 w-full flex">
    <span className="text-tiffany-blue text-5xl font-bold mt-2 ml-40">Q</span>
    <div className="relative ml-96 mt-3 left-12">
        <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search quizzes" required />
        <button type="submit" className="text-white absolute right-3.5 bottom-6 ">           
         <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
         </button>
    </div>
      <ul className="flex text-black gap-2 w-7/12 ml-auto text-lg">
      <li className="ml-auto">
          <NavLink
            className={({ isActive }) =>
              `inline-block hover:underline py-2 pr-2 mt-5 mr-10 ${
                isActive && 'text-tiffany-blue font-bold'
              }`
            }
            to="/quizzes">
            Quizzes
          </NavLink>
        </li>
        {user !== null && (
          <li className="ml-auto">
            Welcome {user.fName},
            <Link
              className="inline-block hover:underline p-2 mt-5"
              to="/"
              // onClick={(e) => {
              //   e.preventDefault();
              //   logout();
              // }}
              onClick={logout}
            >
              Log out
            </Link>
          </li>
        )}
        {user === null && (
            <>
             <li>
              <NavLink
                className={({ isActive }) =>
                  `inline-block hover:underline p-2 mt-5 ${
                    isActive && 'text-tiffany-blue font-bold '
                  }`
                }
                to="register"
              >
                Register
              </NavLink>
            </li>
            <li >
              <NavLink
                className={({ isActive }) =>
                  `inline-block hover:underline p-2 ml-10 mr-10 mt-5 ${
                    isActive && 'text-tiffany-blue font-bold'
                  }`
                }
                to="/"
              >
                Log in
              </NavLink>
            </li>
            </>
        )}
      </ul>
    </nav>
  );

}