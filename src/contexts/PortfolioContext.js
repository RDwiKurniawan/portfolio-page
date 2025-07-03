import React, { createContext, useState, useContext, useEffect } from "react";
import useLocalStorage from "../hook/useLocalStorage";

const initialPortfolioData = {
  backgroundImg: null,
  profileImg: null,
  profile: {
    name: "Nama Anda",
    title: "Titel Pekerjaan",
    description: "Deskripsi singkat tentang diri Anda...",
  },
  portfolioItems: [],
};

const PortfolioContext = createContext(undefined);

export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useLocalStorage(
    "portfolioBuilderData",
    initialPortfolioData
  );

  const updatePortfolioData = (data) => {
    setPortfolioData((prev) => ({ ...prev, ...data }));
  };

  const updateProfile = (profile) => {
    setPortfolioData((prev) => ({
      ...prev,
      profile: { ...prev.profile, ...profile },
    }));
  };

  const addPortfolioItem = (item) => {
    setPortfolioData((prev) => ({
      ...prev,
      portfolioItems: [...prev.portfolioItems, item],
    }));
  };

  const updatePortfolioItem = (id, updatedItem) => {
    setPortfolioData((prev) => ({
      ...prev,
      portfolioItems: prev.portfolioItems.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      ),
    }));
  };

  const deletePortfolioItem = (id) => {
    setPortfolioData((prev) => ({
      ...prev,
      portfolioItems: prev.portfolioItems.filter((item) => item.id !== id),
    }));
  };

  const resetPortfolio = () => {
    setPortfolioData(initialPortfolioData);
  };

  const contextValue = {
    portfolioData,
    updatePortfolioData,
    updateProfile,
    addPortfolioItem,
    updatePortfolioItem,
    deletePortfolioItem,
    resetPortfolio,
  };

  return (
    <PortfolioContext.Provider value={contextValue}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};
