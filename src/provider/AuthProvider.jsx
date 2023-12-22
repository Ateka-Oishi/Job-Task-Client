import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const google_provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);

      //   if (currentUser) {
      //     axiosPublic.post("/jwt", loggedUser, {
      //       withCredentials: true,
      //     });
      //   } else {
      //     axiosPublic.post("/logout", loggedUser, {
      //       withCredentials: true,
      //     });
      //   }

      console.log(currentUser);
      setAuthLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [user?.email]);

  const createUserWithEmail = (email, password) => {
    setAuthLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const signInWithEmail = (email, password) => {
    setAuthLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const contineWithGoogle = () => {
    setAuthLoading(true);
    return signInWithPopup(auth, google_provider);
  };

  const logOutUser = async () => {
    await signOut(auth);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logout successfully done",
      showConfirmButton: false,
      timer: 2500,
    }).then(() => {
      <Navigate to="/" replace/>;
    });
  };

  const authInfo = {
    user,
    authLoading,
    createUserWithEmail,
    signInWithEmail,
    contineWithGoogle,
    updateUserProfile,
    logOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
