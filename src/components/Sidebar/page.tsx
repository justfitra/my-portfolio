import SidebarContent from "../SiebarContent/page";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full flex justify-center bg-[#1D1B38]">
        <div className="max-w-7xl w-full mx-auto relative flex">
          {/* Left sidebar */}
          <div className="w-1/2 min-h-screen fixed max-w-[640px] top-0 px-16 pt-24 bg-[#1D1B38]">
            <SidebarContent />
          </div>
          {/* Right content */}
          <div className="w-1/2 px-16 pt-24 ml-auto bg-[#1D1B38] overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
