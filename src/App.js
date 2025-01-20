import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CreateJobPage from "./pages/CreateJobPage";
import DashboardPage from "./pages/DashboardPage";
import Providers from "./providers";
import Landing from "./pages/Landing";
import { useEffect, useState } from "react";
import Preloader from "../src/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Providers>
      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/create-job" element={<CreateJobPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
          </Layout>
        </Router>
      )}
    </Providers>
  );
};

export default App;
