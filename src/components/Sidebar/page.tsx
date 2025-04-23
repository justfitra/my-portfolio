import SidebarContent from "../SiebarContent/page";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full flex items-center">
        <div className="max-w-6xl">
          <div className="w-1/2  min-h-screen fixed top-0 px-10 pt-32 left-0 bg-[#1D1B38] ">
            <SidebarContent />
          </div>
          <div className="w-1/2 px-10 pt-32 absolute top-0 right-0 bg-[#1D1B38] overflow-y-auto h-screen">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
