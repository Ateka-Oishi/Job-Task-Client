import { Link, useLocation, useNavigate } from "react-router-dom";
import BGPattern from "../../assets/images/pattern-dark.20747baf.svg";
import Lottie from "lottie-react";
import LoginLottie from "./login-lottie.json";
import ContinueWithSM from "./ContinueWithSM";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";

const Login = () => {
  const { signInWithEmail } = useAuth();
 const [errorMessage, setErrorMessage] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setErrorMessage("");

    signInWithEmail(email, password)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign In successfully done",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        setErrorMessage("Email or Password is incorrect!");
      });
  };

  return (
    <section
      style={{
        background: `url(${BGPattern})`,
      }}
    >
      <div className="container mx-auto px-5 py-20">
        <div className="flex items-center justify-center">
          <Lottie
            className="hidden md:block w-2/5"
            animationData={LoginLottie}
            loop={true}
          />
          <div className="w-full md:w-2/5 mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="px-6 py-4">
              <div className="text-center">
                <span className="font-bold text-2xl">Task M.</span>
              </div>

              <h3 className="text-xl font-medium text-center text-gray-600 dark:text-gray-200">
                Welcome Back
              </h3>

              {errorMessage && (
                <div className="mt-8 bg-error p-2 text-black">
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="divider text-sm">Login With Email</div>

              <form onSubmit={handleLogin}>
                <div className="w-full mt-4">
                  <input
                    className="input-field"
                    type="email"
                    name="email"
                    placeholder="Email address"
                    aria-label="Email address"
                    required
                  />
                </div>

                <div className="w-full mt-4">
                  <input
                    className="input-field"
                    type="password"
                    name="password"
                    placeholder="Password"
                    aria-label="Password"
                    required
                  />
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">
                    Forget Password?
                  </span>

                  <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Sign In
                  </button>
                </div>
              </form>

              <ContinueWithSM />
            </div>

            <div className="flex items-center justify-center py-4 text-center bg-gray-100 dark:bg-gray-700">
              <span className="text-sm text-gray-600 dark:text-gray-200">
                Don't have an account?{" "}
              </span>

              <Link
                to="/register"
                className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
