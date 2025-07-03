import React from "react";
import { nanoid } from "nanoid";
import { usePortfolio } from "../../contexts/PortfolioContext";
import { MAX_PORTFOLIO_ITEMS, MIN_PORTFOLIO_ITEMS } from "../../lib/validation";
import Button from "../common/Button";
import PortfolioItemEditor from "./PortfolioItemEditor";

const PortfolioItemsSection = () => {
  const {
    portfolioData,
    addPortfolioItem,
    updatePortfolioItem,
    deletePortfolioItem,
  } = usePortfolio();

  const handleAddItem = () => {
    if (portfolioData.portfolioItems.length < MAX_PORTFOLIO_ITEMS) {
      addPortfolioItem({
        id: nanoid(),
        position: "",
        company: "",
        description: "",
        startDate: "",
        endDate: "",
      });
    } else {
      alert(
        `Anda hanya bisa menambahkan maksimal ${MAX_PORTFOLIO_ITEMS} item portofolio.`
      );
    }
  };

  return (
    <div className="p-4 border border-gray-200 rounded-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Portfolio</h3>

      {portfolioData.portfolioItems.map((item) => (
        <PortfolioItemEditor
          key={item.id}
          item={item}
          onUpdate={updatePortfolioItem}
          onDelete={deletePortfolioItem}
        />
      ))}

      {portfolioData.portfolioItems.length < MAX_PORTFOLIO_ITEMS && (
        <Button
          onClick={handleAddItem}
          variant="secondary"
          className="w-full mt-4"
        >
          Tambah Portofolio
        </Button>
      )}
      {portfolioData.portfolioItems.length >= MAX_PORTFOLIO_ITEMS && (
        <p className="text-center text-sm text-gray-500 mt-4">
          Maksimal {MAX_PORTFOLIO_ITEMS} item telah tercapai.
        </p>
      )}

      {MIN_PORTFOLIO_ITEMS > 0 &&
        portfolioData.portfolioItems.length < MIN_PORTFOLIO_ITEMS && (
          <p className="text-red-500 text-sm mt-2 text-center">
            Anda perlu menambahkan setidaknya {MIN_PORTFOLIO_ITEMS} item
            portofolio.
          </p>
        )}
    </div>
  );
};

export default PortfolioItemsSection;
