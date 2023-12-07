const RightBar = () => {
  return (
    <div className="mr-16">
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
