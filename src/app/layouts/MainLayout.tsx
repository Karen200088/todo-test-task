import { FC } from 'react';
import { Outlet } from "react-router-dom";
import Header from "../../widgets/Header/Header";
import "../styles/global.css"

const MainLayout: FC = () => {
  return (
    <div className="wrapper">
      <Header/>
      <Outlet/>
    </div>
  );
};

export default MainLayout;