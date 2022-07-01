import React from "react";
import SideBar from "./SideBar/SideBar";

export default function SimpleLayout(props) {
  return (
    <>
      {/* <Navbar /> */}
      <div className="row">
        <div className="col-md-3">
          <SideBar />
        </div>
        <div className="col-md-9">
          <main role="main">{props.children}</main>
        </div>
      </div>
    </>
  );
}
