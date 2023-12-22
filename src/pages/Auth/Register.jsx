import { Link } from "react-router-dom";

import BGPattern from "../../assets/images/pattern-dark.20747baf.svg";
import Lottie from "lottie-react";
import { toast } from "react-hot-toast";
import LoginLottie from "./login-lottie.json";
import ContinueWithSM from "./ContinueWithSM";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
const Register = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [confirmPass, setConfirmPass] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [profile_pic_url, setProfilePicUrl] = useState("");

  const axiosPublic = useAxiosPublic();
  const { createUserWithEmail, updateUserProfile } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.profile_pic.files[0];

    const passwordConfimation = password === confirmPass;
    if (!passwordConfimation) {
      return setErrorMessage("Password doesn't match");
    } else if (!/^(.{6,})$/.test(password)) {
      return setErrorMessage("Password must be at least 6 characters");
    } else if (!/[A-Z]/.test(password)) {
      return setErrorMessage(
        "Password must contain at least one capital letter"
      );
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      return setErrorMessage(
        "Password must contain at least one special character"
      );
    } else {
      setErrorMessage("");
    }

    const formData = new FormData();
    formData.append("image", photo);

    try {
      createUserWithEmail(email, password).then(async (user) => {
        try {
          const response = await fetch(
            `https://api.imgbb.com/1/upload?key=${
              import.meta.env.VITE_imgBB_API
            }`,
            {
              method: "POST",
              body: formData,
            }
          );

          if (response.ok) {
            const data = await response.json();
            const image = data.data.display_url;
            // setProfilePicUrl(data.data.display_url);
            console.log(data.data.display_url);
            updateUserProfile(name, image).then(() => {
              const userSaveDatabase = {
                name: name,
                email: email,
                uid: user?.user?.uid,
                profile_pic: image,
                role: "user",
              };
              axiosPublic.post("/user", userSaveDatabase).then((res) => {
                // console.log(res.data?.insertedId);
                if (res.data?.insertedId) {
                  toast.success("Sign Up successful");
                }
              });
            });
          } else {
            console.error("Error uploading image:", response.statusText);
          }
        } catch (error) {
          console.error("Error:", error.message);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleImage = (e) => {
    const image = e.target.files[0];

    if (image instanceof Blob) {
      const reader = new FileReader();

      reader.onload = () => {
        const imageDataUrl = reader.result;
        setSelectedImage(imageDataUrl);
      };

      reader.readAsDataURL(image);
    } else {
      console.error("Selected file is not a valid image");
    }
  };
  return (
    <section
      style={{
        background: `url(${BGPattern})`,
      }}
    >
      <div className="container mx-auto px-5 py-20">
        <div className="flex items-center justify-center">
          <div className="md:w-2/5 mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="px-6 py-4">
              <div className="text-center">
                <span className="font-bold text-2xl">Task M.</span>
              </div>

              <h3 className="text-xl font-medium text-center text-gray-600 dark:text-gray-200">
                Create Account
              </h3>

              <div className="divider text-sm">Login With Email</div>

              {errorMessage && (
                <div className="mt-8 bg-error p-2 text-black">
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleRegister}>
                <div className="w-full mt-4">
                  <input
                    className="input-field"
                    type="text"
                    name="username"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="w-full mt-4">
                  {selectedImage && (
                    <div className="avatar flex pb-3 justify-center">
                      <div className="w-20 rounded-full ring">
                        <img src={selectedImage} />
                      </div>
                    </div>
                  )}

                  <input
                    className="input-field"
                    type="file"
                    name="profile_pic"
                    onChangeCapture={handleImage}
                  />
                </div>
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
                <div className="w-full mt-4">
                  <input
                    className="input-field"
                    type="password"
                    name="password_confirm"
                    onChange={(e) => setConfirmPass(e.target.value)}
                    placeholder="Confirm Password"
                    required
                  />
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">
                    Forget Password?
                  </span>

                  <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Sign Up
                  </button>
                </div>
              </form>

              <ContinueWithSM />
            </div>

            <div className="flex items-center justify-center py-4 text-center bg-gray-100 dark:bg-gray-700">
              <span className="text-sm text-gray-600 dark:text-gray-200">
                Have an account?{" "}
              </span>

              <Link
                to="/login"
                className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
              >
                Login
              </Link>
            </div>
          </div>

          <Lottie
            className="hidden md:block w-2/5"
            animationData={LoginLottie}
            loop={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
