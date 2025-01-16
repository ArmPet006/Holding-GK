import React from "react";
import Layout from "./layout";
import Advertisers from "./Pages/Advertisers/advertisers.tsx";
import Heroes from "./Pages/Heroes/heroes.tsx";
import SpecialProject from "./Pages/SpecialProject/specialProject.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/advertisers" element={<Advertisers />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/special_project" element={<SpecialProject />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
