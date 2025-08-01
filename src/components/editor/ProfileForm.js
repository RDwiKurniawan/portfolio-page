import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePortfolio } from "../../contexts/PortfolioContext";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import { profileSchema } from "../../lib/validation";

const ProfileForm = () => {
  const { portfolioData, updateProfile } = usePortfolio();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(profileSchema),
  });

  const handleChange = (e) => {
    updateProfile({ [e.target.name]: e.target.value });
  };

  const onSubmit = (data) => {
    console.log("Profile data submitted:", data);
  };

  return (
    <div className="p-4 border border-gray-200 rounded-md mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Profile</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Nama"
          id="name"
          type="text"
          {...register("name")}
          onChange={handleChange}
          error={errors.name?.message}
          placeholder={
            portfolioData.profile.name || "Masukkan nama lengkap Anda"
          }
        />
        <Input
          label="Titel Pekerjaan"
          id="title"
          type="text"
          {...register("title")}
          onChange={handleChange}
          error={errors.title?.message}
          placeholder={
            portfolioData.profile.title ||
            "Contoh: Frontend Developer, Desainer Grafis"
          }
        />
        <Textarea
          label="Deskripsi Singkat"
          id="description"
          {...register("description")}
          onChange={handleChange}
          error={errors.description?.message}
          placeholder={
            portfolioData.profile.description ||
            "Ceritakan sedikit tentang diri Anda dan apa yang Anda lakukan..."
          }
        />
      </form>
    </div>
  );
};

export default ProfileForm;
