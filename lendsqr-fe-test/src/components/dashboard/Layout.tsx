import React from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

const Layout = () => {
  return (
    <div>
      <SideNav
        setIsOpen={function (): void {
          throw new Error("Function not implemented.");
        }}
        isOpen={false}
      />
      <TopNav />
    </div>
  );
};

export default Layout;
