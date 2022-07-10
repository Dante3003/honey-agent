import { Routes, Route } from "react-router-dom";

import "./App.css";

import MainLayout from "./layouts/MainLayout";
import Organization from "./pages/Organization";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Organization />} />
        <Route path="/search" element={<h1>What you went to search</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
