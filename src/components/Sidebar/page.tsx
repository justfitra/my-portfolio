import SidebarContent from "../SiebarContent/page";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full flex justify-center z-0 bg-[#1D1B38]">
        <div className="max-w-7xl w-full mx-auto relative flex">
          {/* Left sidebar */}
          <div className="w-1/2 min-h-screen hidden lg:block fixed max-w-[640px] top-0 px-16 pt-24 bg-[#1D1B38]">
            <SidebarContent />
          </div>
          {/* Right content */}
          <div className="w-full lg:w-1/2 px-8 md:px-16 pt-24 ml-auto bg-[#1D1B38] overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
