import React from "react";
import CustomHeader from "./Header"; // Import Default

const Layout = (props) => {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto  font-sans">
      <CustomHeader />
      <div className="h-full w-full">{props.children}</div>
    </div>
  );
};

export { Layout }; // Export tanpa Default
