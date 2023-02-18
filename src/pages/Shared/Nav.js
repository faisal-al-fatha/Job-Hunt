import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Layout/Main";


const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="navbar bg-sky-200 py-5 sticky top-0">
        <div className="flex-1 text-sky-600   lg:ml-20 md:ml-8">
          
        <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold text-sky-600 hover:bg-blue-600 hover:text-white">Job Hub</Link>
        </div>
        <div className="navbar-center text-black hidden lg:flex ml-10">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link
                to="/"
                aria-label="Home"
                title="Home"
                className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-sky-600  "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/fresherJobs"
                aria-label="Fresher Jobs"
                title="Fresher Jobs"
                className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-sky-600  "
              >
                Fresher Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/seniorJobs"
                aria-label="Senior Jobs"
                title="Senior Jobs"
                className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-sky-600  "
              >
                Senior Jobs
              </Link>
            </li>

            <li>
              <Link
                to="/topItComp"
                aria-label="Top It Companies"
                title="Top It Companies"
                className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-sky-600  "
              >
                Top It Companies
              </Link>
            </li>
            <li>
              {user?.uid ? (
                <button
                  onClick={handleLogOut}
                  className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-sky-600  "
                >
                  Log Out
                </button>
              ) : (
                <>
                  {" "}
                  <Link
                    to="/signup"
                    className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-sky-600  "
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/login"
                    className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-sky-600  "
                  >
                    Log In
                  </Link>
                </>
              )}
            </li>
            <li>
              <p>
                {user?.photoURL ? (
                  <div className="tooltip" data-tip={user.displayName}>
                    <img
                      className="rounded-full h-8 w-8"
                      src={user.photoURL}
                      alt=""
                    />
                  </div>
                ) : (
                  <FaUser
                    title={user?.displayName ? user.displayName : "user"}
                  ></FaUser>
                )}
              </p>
            </li>
          </ul>
        </div>

        {/* dropdown menu starts here  */}
        <div className="flex-none z-50">
          <div className="dropdown dropdown-end z-50  lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-square avatar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current text-sky-600  "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black z-50 text-white rounded-box w-52"
            >
              <li>
                <Link
                  to="/home"
                  aria-label="Home"
                  title="Home"
                  className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-sky-600  "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/fresherJobs"
                  aria-label="Fresher Jobs"
                  title="Fresher Jobs"
                  className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-sky-600  "
                >
                  Fresher Jobs
                </Link>
              </li>

              <li>
                <Link
                  to="/topItComp"
                  aria-label="Top It Companies"
                  title="Top It Companies"
                  className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-sky-600  "
                >
                  Top It Companies
                </Link>
              </li>
              <li>
                <Link
                  to="/seniorJobs"
                  aria-label="Senior Jobs"
                  title="Senior Jobs"
                  className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-sky-600  "
                >
                  Senior Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  aria-label="Sign Up"
                  title="Sign Up"
                  className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-sky-600  "
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogOut}
                  className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-sky-600  "
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;