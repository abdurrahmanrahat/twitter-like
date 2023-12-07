import { useForm } from "react-hook-form";
import RegisterLottie from "../../assets/register-lottie.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import { AuthContext } from "../../provider/AuthProvider";

const image_hoisting_token = import.meta.env.VITE_image_uplode_token;

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hoisting_token}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    console.log(data);

    const formData = new FormData();
    formData.append("image", data.photo[0]);

    // create user
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success("User Register Successfully");

        fetch(img_hosting_url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((imgResponse) => {
            if (imgResponse.success) {
              const photo = imgResponse.data.display_url;

              // Update Profile
              updateUserProfile(name, photo)
                .then(() => {
                  navigate(from, { replace: true });
                })
                .catch((err) => {
                  toast.error(err.message);
                });
            }
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="md:flex items-center gap-4 my-8 md:my-0 lg:p-12">
      {/* image */}
      <div className="md:w-1/2 p-8 md:p-0">
        <Lottie animationData={RegisterLottie} loop={true} />
      </div>
      {/* form fields */}
      <div className="md:w-1/2 mx-auto w-full p-4 md:p-8">
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-[48px] items-center font-[700]">Register User</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="p-3 md:p-[2px]">
          <div className="flex flex-col gap-y-3">
            {/* Name */}
            <div>
              <label className="block mb-[5px] font-bold">Your Name</label>
              <input
                className="w-full p-2 border border-solid border-[#ccc] rounded-lg"
                type="text"
                placeholder="name"
                {...register("name", { required: true })}
              ></input>
              {errors.name?.type === "required" &&
                toast.error("Provide your name")}
            </div>

            {/* Photo Field */}
            <div className="form-control w-full max-w-xs">
              <label className="block mb-[5px] font-bold">Your Photo</label>
              <input
                type="file"
                {...register("photo", { required: true })}
                className="file-input file-input-bordered w-full max-w-xs"
              />
              {errors.photo?.type === "required" &&
                toast.error("Provide your photo")}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-[5px] font-bold">Your Email</label>
              <input
                className="w-full p-2 border border-solid border-[#ccc] rounded-lg"
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
              ></input>
              {errors.email?.type === "required" &&
                toast.error("Provide your email")}
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
              {errors.password?.type === "required" &&
                toast.error("Provide your password")}
            </div>
          </div>

          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className="w-[70%] bg-[#1575a7] py-2 text-[18px] text-white font-[500] rounded-lg"
            >
              Register
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center mt-4">
          <span className="text-[18px] md:text-[16px] lg:text-[18px]">
            Already have an account?{" "}
            <Link to="/login">
              <span className="text-[#f78719] text-[18px] md:text-[16px] lg:text-[18px] underline cursor-pointer font-[700]">
                Login
              </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
