import React from "react";
import CustomHeader from "./Header"; // Import Default

const Layout = (props) => {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto font-sans bg-gray-100">
      {/*dark:bg-[#1d0505]*/}
      <CustomHeader />
      <div className="h-full w-full">{props.children}</div>
    </div>
  );
};

export { Layout }; // Export tanpa Default
