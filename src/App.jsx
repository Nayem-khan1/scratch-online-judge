import { Route, Routes } from "react-router";
import ProblemListPage from "./pages/ProblemListPage";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import ProblemDetailPage from "./pages/ProblemDetailPage";
import Hero from "./pages/Hero";
import Problem from "./features/problems/pages/Problem";
import Practice from "./features/practice/pages/Practice";
import Tutorial from "./features/tutorial/pages/Tutorial";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import LandingPage from "./features/landingPage/LandingPage";
import Particle from "./pages/Particle";
import Aminmate from "./pages/Aminmate";

function App() {
  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/animation" element={<Aminmate/>}/>
            <Route path="/" element={<MainLayout />}>
              <Route path="/hero" element={<Hero />} />
              <Route path="/challenges" element={<Problem />} />
              <Route path="/tutorial" element={<Tutorial />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/problems/:id" element={<ProblemDetailPage />} />
            </Route>
          </Routes>
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
