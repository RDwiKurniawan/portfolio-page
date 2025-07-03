import React from "react";
import { usePortfolio } from "../contexts/PortfolioContext";
import PortfolioViewer from "../components/viewer/PorfolioViewer";

const ViewPortfolioPage = () => {
  const { portfolioData } = usePortfolio();

  return (
    <div className="container mx-auto p-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Portofolio Anda
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <PortfolioViewer data={portfolioData} />
      </div>
    </div>
  );
};

export default ViewPortfolioPage;
