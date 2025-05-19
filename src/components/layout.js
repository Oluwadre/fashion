import React from "react";
import Header from "@/components/ui/header";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
