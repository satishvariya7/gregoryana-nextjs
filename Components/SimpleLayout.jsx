import React from "react";
import SideBar from "./SideBar/SideBar";

export default function SimpleLayout(props) {
  return (
    <>
      {/* <Navbar /> */}

      <div className='row m-0 sidebar-bg'>
        <div className='col-md-2 p-0'>
          <SideBar />
        </div>
        <div className='col-md-10'>
          <main role='main'>{props.children}</main>
        </div>
      </div>
    </>
  );
}
