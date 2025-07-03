import React, { useRef } from "react";
import Button from "../common/Button";

const ImageUploader = ({ label, currentImage, onImageChange }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Ukuran gambar maksimal 2MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = () => {
    onImageChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="mb-6 p-4 border border-gray-200 rounded-md">
      <label className="block text-md font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="mt-1 flex flex-col sm:flex-row items-center gap-4">
        {currentImage ? (
          <div className="relative w-24 h-24 rounded-md overflow-hidden border border-gray-300 flex-shrink-0">
            <img
              src={currentImage}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-24 h-24 rounded-md flex items-center justify-center bg-gray-100 border border-dashed border-gray-300 text-gray-500 text-sm text-center p-2 flex-shrink-0">
            Tidak ada gambar
          </div>
        )}
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/*"
          />
          <Button
            type="button"
            onClick={handleButtonClick}
            variant="secondary"
            size="sm"
            className="w-full sm:w-auto"
          >
            {currentImage ? "Ganti Gambar" : "Pilih Gambar"}
          </Button>
          {currentImage && (
            <Button
              type="button"
              onClick={handleRemoveImage}
              variant="danger"
              size="sm"
              className="w-full sm:w-auto"
            >
              Hapus Gambar
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
