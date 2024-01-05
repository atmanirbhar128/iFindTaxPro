import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const LoginPage = React.lazy(() => import("pages/LoginPage"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
