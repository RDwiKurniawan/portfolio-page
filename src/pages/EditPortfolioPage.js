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
        <div className="bg-white p-6 rounded-lg shadow-lg">
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

          <div className="mt-8 flex justify-end space-x-4">
            <Button onClick={resetPortfolio} variant="secondary">
              Reset Semua
            </Button>
            <Button onClick={handleSave} variant="primary">
              Simpan Perubahan
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`w-full ${
          isPreviewExpanded ? "lg:w-1/2" : "lg:hidden"
        } bg-gray-100 p-6 rounded-lg shadow-lg relative transition-all duration-300`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Preview</h2>
          <Button
            onClick={() => setIsPreviewExpanded(!isPreviewExpanded)}
            variant="secondary"
            size="sm"
            className="ml-auto"
          >
            {isPreviewExpanded ? "-" : "+"}
          </Button>
        </div>
        <PortfolioViewer data={portfolioData} />
      </div>
    </div>
  );
};

export default EditPortfolioPage;
