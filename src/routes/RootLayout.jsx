import { Outlet } from "react-router-dom";

import MainHeader from "../components/MainHeader";

function RootLayout() {
  return (
    <>
      <MainHeader />
      {/* nested contents (the children) in the <RootLayout /> render here */}
      <Outlet />
    </>
  )
}

export default RootLayout;