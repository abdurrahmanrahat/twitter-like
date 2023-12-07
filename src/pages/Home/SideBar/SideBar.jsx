import {
  FaBars,
  FaComment,
  FaHome,
  FaPaperPlane,
  FaPlusSquare,
  FaSearch,
  FaVideo,
} from "react-icons/fa";
import { GrNotification } from "react-icons/gr";
import DemoPic from "../../../assets/demo-profile.png";
import Logo from "../../../assets/twitter-logo.png";
import "./SideBar.css";

const SideBar = () => {
  //   const { user } = useContext(AuthContext);
  return (
    <div className="ml-4">
      <img src={Logo} alt="" />

      {/* icon with link */}
      <div className="flex flex-col gap-y-6 mt-8 ml-4">
        <div className="flex gap-[14px] hover-scale">
          <FaHome className="text-[26px]" />
          <h4 className="text-lg font-medium">Home</h4>
        </div>
        <div className="flex gap-[14px] hover-scale">
          <FaSearch className="text-[26px]" />
          <h4 className="text-lg ">Explore</h4>
        </div>
        <div className="flex gap-[14px] hover-scale">
          <GrNotification className="text-[26px]" />
          <h4 className="text-lg ">Notification</h4>
        </div>
        <div className="flex gap-[14px] hover-scale">
          <FaVideo className="text-[26px]" />
          <h4 className="text-lg ">Lists</h4>
        </div>
        <div className="flex gap-[14px] hover-scale">
          <FaPaperPlane className="text-[26px]" />
          <h4 className="text-lg ">Messages</h4>
        </div>
        <div className="flex gap-[14px] hover-scale">
          <FaComment className="text-[26px]" />
          <h4 className="text-lg ">Notifications</h4>
        </div>
        <div className="flex gap-[14px] hover-scale">
          <FaPlusSquare className="text-[26px]" />
          <h4 className="text-lg ">Create</h4>
        </div>
        <div className="flex gap-[14px] hover-scale">
          <img
            src={DemoPic}
            className="w-[28px] h-[28px] rounded-full"
            alt=""
          />
          <h4 className="text-lg ">Profile</h4>
        </div>
        <div className="flex gap-[14px] hover-scale">
          <FaBars className="text-[26px]" />
          <h4 className="text-lg ">More</h4>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
