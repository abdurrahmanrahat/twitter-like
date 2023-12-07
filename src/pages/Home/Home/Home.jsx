import SideBar from "../SideBar/SideBar";

const Home = () => {
  return (
    <div className="md:flex mt-[24px]">
      <div className="md:w-[20%] hidden md:block">
        <SideBar></SideBar>
      </div>
      <div className="md:w-[55%]">middle</div>
      <div className="md:w-[25%]">Right</div>
    </div>
  );
};

export default Home;
