import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const PrimaryHeader = () => {
  const { user, logOutUser } = useAuth();

  return (
    <div className="md:w-[90%] backdrop-blur shadow-xl md:mx-auto md:rounded-lg z-50">
      <nav className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar">
            <div className="flex-1 px-2 mx-2">
              <Link to="/">
                <span className="font-semibold text-xl">Task M.</span>
              </Link>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal gap-3">
                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "!btn !btn-sm !btn-neutral"
                        : "!btn !btn-sm !btn-outline"
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "!btn !btn-sm !btn-neutral"
                        : "!btn !btn-sm !btn-outline"
                    }
                    to="/services"
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "!btn !btn-sm !btn-neutral"
                        : "!btn !btn-sm !btn-outline"
                    }
                    to="/blog"
                  >
                    Latest Blog
                  </NavLink>
                </li>
                {user ? (
                  <li>
                    <NavLink
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "!btn !btn-sm !btn-neutral"
                          : "!btn !btn-sm !btn-outline"
                      }
                      to="/dashboard"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                ) : (
                  ""
                )}

                {user ? (
                  <li>
                    <span
                      onClick={logOutUser}
                      className="!btn !btn-sm !btn-outline"
                    >
                      Logout
                    </span>
                  </li>
                ) : (
                  <>
                    <li>
                      <NavLink
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "!btn !btn-sm !btn-neutral"
                            : "!btn !btn-sm !btn-outline"
                        }
                        to="/login"
                      >
                        Login
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>

            <li>
              <NavLink to="/blog">Latest Blog</NavLink>
            </li>
            {user ? (
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            ) : (
              ""
            )}

            {user ? (
              <li>
                <span
                  onClick={logOutUser}
                  className="!btn !btn-sm !btn-outline"
                >
                  Logout
                </span>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default PrimaryHeader;
