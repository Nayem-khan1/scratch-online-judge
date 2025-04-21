import { Route, Routes } from "react-router";
import ProblemListPage from "./pages/ProblemListPage";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/problems" element={<ProblemListPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
