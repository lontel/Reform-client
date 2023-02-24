import { Routes, Route } from "react-router-dom";
import Register from "../components/Register/Register";
import Signin from "../components/Signin/Signin";
import WorksForm from "../components/Works/WorksForm/WorksForm";
import AboutPage from "../pages/AboutPage/AboutPage";
import HomePage from "../pages/HomePage/HomePage";
import MyAccountPage from "../pages/MyAccountPage/MyAccountPage";
import Badrooms from "../pages/Categories/Badrooms/Badrooms";
import Bathrooms from "../pages/Categories/Bathrooms/Bathrooms";
import Kitchens from "../pages/Categories/Kitchens/Kitchens";
import Terrace from "../pages/Categories/Terrace/Terrace";
import WorksEdit from "../components/Works/WorksEdit/WorksEdit";
import WorkDetails from "../components/Works/WorksDetails/WorkDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/register" element={<Register />} />
      <Route path="/my-account" element={<MyAccountPage />} />
      <Route path="/works-form" element={<WorksForm />} />
      <Route path="/works-edit/:works_id" element={<WorksEdit />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/badrooms" element={<Badrooms />} />
      <Route path="/bathrooms" element={<Bathrooms />} />
      <Route path="/kitchens" element={<Kitchens />} />
      <Route path="/terrace" element={<Terrace />} />
      <Route path="/details/:work_id" element={<WorkDetails />} />
    </Routes>
  );
};

export default AppRoutes;
