import { Route, Routes } from "react-router";
import NewUser from "../login/stunewuser/newuser";
import Login from "../login/already/login";
import SearchPage from "../screen/search/search";

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/user-registration" Component={NewUser} />
        <Route path="/LoggedIn" Component={SearchPage} />
      </Routes>
    </div>
  );
};

export default MainRouter;
