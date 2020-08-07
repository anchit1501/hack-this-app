import React from "react";
import Navbar from "../components/common/Navbar";
// import Footer from "../components/common/";
export default function PageWrapper({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
