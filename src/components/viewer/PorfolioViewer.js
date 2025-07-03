import React from "react";
import PortfolioCard from "./PortfolioCard";

const PortfolioViewer = ({ data }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-inner min-h-[500px] overflow-auto">
      {data.backgroundImg && (
        <div
          className="relative h-48 bg-cover bg-center rounded-lg overflow-hidden mb-6"
          style={{ backgroundImage: `url(${data.backgroundImg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      )}

      <div className="flex flex-col items-center -mt-20 z-10 relative mb-8">
        {data.profileImg ? (
          <img
            src={data.profileImg}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
          />
        ) : (
          <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-gray-300 flex items-center justify-center text-gray-600 text-4xl font-bold">
            PF
          </div>
        )}
        <h2 className="text-3xl font-bold text-gray-800 mt-4">
          {data.profile.name || "Nama Anda"}
        </h2>
        <p className="text-xl text-blue-600 font-medium mb-2">
          {data.profile.title || "Titel Pekerjaan"}
        </p>
        <p className="text-gray-600 text-center max-w-md">
          {data.profile.description || "Deskripsi singkat tentang diri Anda..."}
        </p>
      </div>

      <hr className="my-8 border-gray-300" />

      <section>
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Riwayat Pekerjaan
        </h3>
        {data.portfolioItems.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
            {data.portfolioItems.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-8">
            Belum ada riwayat pekerjaan ditambahkan.
          </p>
        )}
      </section>
    </div>
  );
};

export default PortfolioViewer;
