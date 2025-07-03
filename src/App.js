import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { PortfolioProvider } from "./contexts/PortfolioContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import EditPortfolioPage from "./pages/EditPortfolioPage";
import ViewPortfolioPage from "./pages/ViewPortfolioPage";

function App() {
  return (
    <Router>
      <PortfolioProvider>
        <div className="flex flex-col min-h-screen bg-gray-100">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Navigate to="/edit" replace />} />
              <Route path="/edit" element={<EditPortfolioPage />} />
              <Route path="/view" element={<ViewPortfolioPage />} />
              <Route
                path="*"
                element={
                  <h1 className="text-center text-3xl font-bold mt-20">
                    404 - Halaman Tidak Ditemukan
                  </h1>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </PortfolioProvider>
    </Router>
  );
}

export default App;
