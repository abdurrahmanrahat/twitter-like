import { useContext, useState } from "react";
import { FiEdit } from "react-icons/fi";
import Modal from "../../../components/Modal/Modal";
import usePosts from "../../../hooks/usePosts";
import { AuthContext } from "../../../provider/AuthProvider";
import RightBar from "../RightBar/RightBar";
import SideBar from "../SideBar/SideBar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const [posts, refetch, , , , page, setPage, limit] = usePosts();
  console.log(posts);

  const sd = posts?.length;
  console.log("sd", sd);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="md:flex mt-[24px] mx-4 md:mx-0">
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
            <Modal
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              refetch={refetch}
            ></Modal>
          </div>

          {/* count post */}
          <div className="w-[30%] flex justify-end items-center">
            <h4 className="text-lg font-medium">Total Posts: 18+</h4>
          </div>
        </div>

        {/* show posts */}
        {posts?.length > 0 ? (
          <div className="mt-12 flex flex-col gap-10">
            {posts?.map((post) => (
              <div key={post._id} className="flex gap-10">
                <div>
                  <img src={post?.img} className="w-[360px] h-[100px]" alt="" />
                </div>
                <div>
                  <h4 className="text-[24px] font-medium">{post.title}</h4>
                  <p>{post.description.slice(0, 150)}...</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center mt-10">
            <h2 className="text-[20px] font-semibold text-red-700">
              No Data Found!!
            </h2>
          </div>
        )}

        {/* pagination btn */}
        <div className="flex items-center justify-center md:justify-end mt-8">
          <div className="join font-semibold">
            <button
              className="join-item btn text-[20px]"
              onClick={() => {
                page === 1 ? setPage(1) : setPage(page - 1);
              }}
              disabled={page === 1}
            >
              «
            </button>
            <button className="join-item btn font-semibold text-[17px]">
              {page}
            </button>
            <button
              className="join-item btn text-[20px]"
              onClick={() => {
                page === Math.round(18 / limit)
                  ? setPage(Math.round(18 / limit))
                  : setPage(page + 1);
              }}
              disabled={page === Math.round(18 / limit)}
            >
              »
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-[25%]">
        <RightBar></RightBar>
      </div>
    </div>
  );
};

export default Home;
