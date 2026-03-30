import { Route, Routes } from "react-router-dom";
import { AboutPage, BlogPage, MainPage, PortfolioPage, ProjectsPage, SpacingOut } from "./pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/spacingout" element={<SpacingOut />} />
    </Routes>
  );
};

export default Router;
