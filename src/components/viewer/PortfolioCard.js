import React from "react";

const PortfolioCard = ({ item }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4 border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800 mb-1">{item.position}</h3>
      <p className="text-lg text-blue-600 mb-2">{item.company}</p>
      <p className="text-gray-500 text-sm mb-3">
        {item.startDate} - {item.endDate}
      </p>
      <p className="text-gray-700 leading-relaxed">{item.description}</p>
    </div>
  );
};

export default PortfolioCard;
