import { Route, Routes } from "react-router";
import HeaderBar from "../common/header";
import NewUser from "../login/stunewuser/newuser";
import Login from "../login/already/login";

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/user-registration" Component={NewUser} />
      </Routes>
    </div>
  );
};

export default MainRouter;
