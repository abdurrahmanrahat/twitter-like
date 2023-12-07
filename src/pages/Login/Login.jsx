import { useForm } from "react-hook-form";
import FormImg from "../../assets/login-image.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";
import GoogleSignIn from "../../components/GoogleSignIn/GoogleSignIn";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    console.log(data);

    // sign in user
    signIn(email, password)
      .then(() => {
        toast.success("Login successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="md:flex items-center gap-4 my-8 md:my-0 lg:p-12">
      {/* image */}
      <div className="md:w-1/2 p-8 md:p-0">
        <img src={FormImg} alt="" className="md:w-[420px]" />
      </div>
      {/* form fields */}
      <div className="md:w-1/2 mx-auto w-full p-4 md:p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="p-3 md:p-[2px]">
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-[48px] items-center font-[700]">Login</h2>
          </div>

          <div className="flex flex-col gap-y-4">
            {/* Email */}
            <div>
              <label className="block mb-[5px] font-bold">Your Email</label>
              <input
                className="w-full p-2 border border-solid border-[#ccc] rounded-lg"
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
              ></input>
            </div>

            {/* password */}
            <div className="">
              <label className="block mb-[5px] font-bold">Password</label>
              <input
                className="w-full p-2 border border-solid border-[#ccc] rounded-lg"
                type="password"
                placeholder="Enter Password"
                {...register("password", { required: true })}
              ></input>
            </div>
          </div>

          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className="w-[70%] bg-[#1575a7] py-2 text-[18px] text-white font-[500] rounded-lg"
            >
              Login
            </button>
          </div>

          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>

          {/* Google Signin Button */}
          <GoogleSignIn></GoogleSignIn>

          <div className="flex items-center justify-center mt-4">
            <span className="text-[18px] md:text-[16px] lg:text-[18px]">
              Already have an account?{" "}
              <Link to="/register">
                <span className="text-[#f78719] text-[18px] md:text-[16px] lg:text-[18px] underline cursor-pointer font-[700]">
                  Register Now
                </span>
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
