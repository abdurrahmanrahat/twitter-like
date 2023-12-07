import { useRef, useState } from "react";

const RightBar = () => {
  const [search, setSearch] = useState("");

  const searchRef = useRef(null);
  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };
  console.log(search);
  return (
    <div className="mr-16 ml-4">
      {/* search bar */}
      <div className="form-control">
        <div className="input-group flex justify-between items-center">
          <input
            type="text"
            placeholder="Search…"
            ref={searchRef}
            className="input input-bordered rounded-md border-gray-300 focus:outline-[#0B0016] bg-gray-200 text-gray-900 p-2"
          />
          <button onClick={handleSearch} className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* suggestion user to follow */}
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-[20px]">Who To Follow</p>
          <button className="text-[14px] font-semibold">See All</button>
        </div>

        {/* users list */}
        <div className="mt-4 flex flex-col gap-y-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <img
                src="https://i.ibb.co/x2VFZGC/elizabethan.png"
                className="w-[40px] h-[40px] rounded-full"
                alt=""
              />
              <div>
                <p className="font-medium">samita_asik</p>
                <p className="text-gray-500 text-[12px]">@samita_asik</p>
              </div>
            </div>
            <div>
              <button className=" bg-[#1575a7] px-4 py-1 text-white rounded-full">
                Follow
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <img
                src="https://i.ibb.co/x2VFZGC/elizabethan.png"
                className="w-[40px] h-[40px] rounded-full"
                alt=""
              />
              <div>
                <p className="font-medium">samita_asik</p>
                <p className="text-gray-500 text-[12px]">@samita_asik</p>
              </div>
            </div>
            <div>
              <button className=" bg-[#1575a7] px-4 py-1 text-white rounded-full">
                Follow
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <img
                src="https://i.ibb.co/x2VFZGC/elizabethan.png"
                className="w-[40px] h-[40px] rounded-full"
                alt=""
              />
              <div>
                <p className="font-medium">samita_asik</p>
                <p className="text-gray-500 text-[12px]">@samita_asik</p>
              </div>
            </div>
            <div>
              <button className=" bg-[#1575a7] px-4 py-1 text-white rounded-full">
                Follow
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <img
                src="https://i.ibb.co/x2VFZGC/elizabethan.png"
                className="w-[40px] h-[40px] rounded-full"
                alt=""
              />
              <div>
                <p className="font-medium">samita_asik</p>
                <p className="text-gray-500 text-[12px]">@samita_asik</p>
              </div>
            </div>
            <div>
              <button className=" bg-[#1575a7] px-4 py-1 text-white rounded-full">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
