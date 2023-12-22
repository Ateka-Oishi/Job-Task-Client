import { FaGoogle, FaFacebook, FaXTwitter } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
const ContinueWithSM = () => {
  const { contineWithGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    contineWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <>
      <div className="py-2">
        <div className="divider text-sm">Login With</div>
        <div className="text-center flex justify-center gap-4">
          <span
            onClick={handleGoogleLogin}
            className="btn bg-blue-500 text-white hover:bg-blue-500 hover:text-white text-xl btn-sm"
          >
            <FaGoogle />
          </span>
          <span className="btn bg-blue-500 text-white hover:bg-blue-500 hover:text-white  text-xl btn-sm">
            <FaFacebook />
          </span>
          <span className="btn bg-blue-500 text-white hover:bg-blue-500 hover:text-white  text-xl btn-sm">
            <FaXTwitter />
          </span>
        </div>
      </div>
    </>
  );
};

export default ContinueWithSM;
