import React from "react";
import Footer from "./Footer";

export default function ClientLayout({ children }) {
  return (
    <div>
      {children}
      <Footer></Footer>
    </div>
  );
}
