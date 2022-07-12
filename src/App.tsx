import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Organization from "./pages/Organization";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Organization />} />
      </Route>
    </Routes>
  );
}

export default App;
