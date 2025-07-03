import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { portfolioItemSchema } from "../../lib/validation";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import Button from "../common/Button";

const PortfolioItemEditor = ({ item, onUpdate, onDelete }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(portfolioItemSchema),
    defaultValues: item,
    mode: "onChange",
  });

  useEffect(() => {
    reset(item);
  }, [item, reset]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    onUpdate(item.id, { [name]: value });
  };

  const onSubmit = (data) => {
    console.log("Portfolio item submitted:", data);
  };

  return (
    <div className="p-4 border border-gray-200 rounded-md mb-4 bg-white shadow-sm relative">
      <Button
        type="button"
        variant="danger"
        size="sm"
        onClick={() => onDelete(item.id)}
        className="absolute top-2 right-2 px-2 py-1 text-xs"
        aria-label={`Delete ${item.position || "item"}`}
      >
        X
      </Button>
      {/* <h4 className="text-md font-semibold text-gray-700 mb-3 pr-8">
        Pekerjaan #{item.id.substring(0, 4)}
      </h4> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Posisi Pekerjaan"
          id={`position-${item.id}`}
          type="text"
          {...register("position")}
          onChange={handleChange}
          error={errors.position?.message}
        />
        <Input
          label="Nama Perusahaan"
          id={`company-${item.id}`}
          type="text"
          {...register("company")}
          onChange={handleChange}
          error={errors.company?.message}
        />
        <Textarea
          label="Deskripsi Pekerjaan"
          id={`description-${item.id}`}
          {...register("description")}
          onChange={handleChange}
          error={errors.description?.message}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Tanggal Mulai"
            id={`startDate-${item.id}`}
            type="date"
            {...register("startDate")}
            onChange={handleChange}
            error={errors.startDate?.message}
          />
          <Input
            label="Tanggal Akhir"
            id={`endDate-${item.id}`}
            type="date"
            {...register("endDate")}
            onChange={handleChange}
            error={errors.endDate?.message}
          />
        </div>
      </form>
    </div>
  );
};

export default PortfolioItemEditor;
