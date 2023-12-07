import { useContext, useState } from "react";
import { FiEdit } from "react-icons/fi";
import Modal from "../../../components/Modal/Modal";
import { AuthContext } from "../../../provider/AuthProvider";
import SideBar from "../SideBar/SideBar";

const Home = () => {
  let [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="md:flex mt-[24px]">
      <div className="md:w-[20%] hidden md:block">
        <SideBar></SideBar>
      </div>

      {/* middle */}
      <div className="md:w-[55%] md:px-8">
        {/* write a blog */}
        <div className="flex">
          <div className="w-[70%] flex gap-2 items-center cursor-pointer">
            <img
              src={user?.photoURL}
              className="w-[48px] h-[48px] rounded-full"
              alt=""
            />
            <p
              //  onClick={}
              onClick={openModal}
              className="px-6 py-3 bg-indigo-100 w-full rounded-full font-semibold text-gray-500 flex items-center gap-2"
            >
              <FiEdit className="text-xl" /> Write A Post
            </p>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}></Modal>
          </div>

          {/* count post */}
          <div className="w-[30%] flex justify-end items-center">
            <h4 className="text-lg font-medium">Total Posts: 4</h4>
          </div>
        </div>
      </div>
      <div className="md:w-[25%]">Right</div>
    </div>
  );
};

export default Home;
