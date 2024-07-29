import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Blog, Contact, NotFound } from "./pages";
import { BasicLayout } from "./layout/BasicLayout";
import { BlogDetail } from "./pages/BlogDetail";

function App() {
  return (
    <BasicLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Blog" element={<Blog />} />
        <Route path=":id" element={<BlogDetail />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BasicLayout>
  );
}

export default App;
