import React, { useState } from "react";
import { usePortfolio } from "../contexts/PortfolioContext";
import ImageUploader from "../components/editor/ImageUploader";
import ProfileForm from "../components/editor/ProfileForm";
import Button from "../components/common/Button";
import PortfolioViewer from "../components/viewer/PorfolioViewer";
import PortfolioItemsSection from "../components/editor/PortfolioItemSection";

const EditPortfolioPage = () => {
  const { portfolioData, updatePortfolioData, resetPortfolio } = usePortfolio();
  const [isPreviewExpanded, setIsPreviewExpanded] = useState(true);

  const handleSave = () => {
    alert("Perubahan berhasil disimpan!");
    console.log("Portfolio saved:", portfolioData);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-6 min-h-[calc(100vh-8rem)]">
      <div
        className={`w-full ${
          isPreviewExpanded ? "lg:w-1/2" : "lg:w-full"
        } transition-all duration-300`}
      >
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
          <ImageUploader
            label="Background Image"
            currentImage={portfolioData.backgroundImg}
            onImageChange={(img) => updatePortfolioData({ backgroundImg: img })}
          />
          <ImageUploader
            label="Profile Image"
            currentImage={portfolioData.profileImg}
            onImageChange={(img) => updatePortfolioData({ profileImg: img })}
          />
          <ProfileForm />
          <PortfolioItemsSection />

          <div className="mt-8 flex justify-between items-center">
            <div className="flex justify-end space-x-4 ml-auto">
              <Button onClick={resetPortfolio} variant="secondary">
                Reset Semua
              </Button>
              <Button onClick={handleSave} variant="primary">
                Simpan Perubahan
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`
          transition-all duration-300
          relative
          ${isPreviewExpanded ? "w-full lg:w-1/2" : "w-full lg:w-[40px]"}
          flex flex-col
        `}
      >
        <div className="flex justify-between items-center mb-4 flex-shrink-0">
          <h2
            className={`text-xl font-bold text-gray-800 pr-4 ${
              !isPreviewExpanded ? "hidden" : ""
            }`}
          >
            Preview
          </h2>

          <Button
            onClick={() => setIsPreviewExpanded(!isPreviewExpanded)}
            variant="secondary"
            size="sm"
            aria-label="Toggle Preview"
            className="ml-auto"
          >
            {isPreviewExpanded ? "−" : "+"}
          </Button>
        </div>

        {isPreviewExpanded && (
          <div className="bg-gray-100 rounded-lg shadow-lg p-4 sm:p-6 flex-grow overflow-y-auto">
            <PortfolioViewer data={portfolioData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EditPortfolioPage;
