import { Route, Routes } from "react-router";
import HeaderBar from "../common/header";
import NewUser from "../login/stunewuser/newuser";
import Login from "../login/already/login";
import CompanyRegistration from "../login/compnewuser/compnew";

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/user-registration" Component={NewUser} />
        <Route path="/comp-registration" Component={CompanyRegistration} />
      </Routes>
    </div>
  );
};

export default MainRouter;
