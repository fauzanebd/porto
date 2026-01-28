import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProjectPage } from "./pages/ProjectPage";
import { BlogPostPage } from "./pages/BlogPostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
