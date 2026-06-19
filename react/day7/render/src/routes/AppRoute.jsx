import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import ArrayPage from "../pages/ArrayPage";
import ObjectPage from "../pages/ObjectPage";
import ArrayObjPage from "../pages/ArrayObjPage";

const AppRoute = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<ArrayPage />} />
        <Route path="/object" element={<ObjectPage />} />
        <Route path="/arrobj" element={<ArrayObjPage />} />
      </Routes>
    </>
  );
};

export default AppRoute;