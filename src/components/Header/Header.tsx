import React from "react";
import NavigationBar from "./NavigationBar";

const Header: React.FC = () => {
  return (
    <header className='p-2.5 w-screen rounded-b-lg  flex justify-around flex-row items-center bg-slate-100'>
      <NavigationBar />
    </header>
  );
};

export default Header;
