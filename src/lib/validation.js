import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi."),
  title: z.string().min(1, "Titel pekerjaan wajib diisi."),
  description: z.string().min(1, "Deskripsi singkat wajib diisi."),
});

export const portfolioItemSchema = z
  .object({
    position: z.string().min(1, "Posisi pekerjaan wajib diisi."),
    company: z.string().min(1, "Nama perusahaan wajib diisi."),
    description: z.string().min(1, "Deskripsi pekerjaan wajib diisi."),
    startDate: z.string().refine((val) => !isNaN(new Date(val).getTime()), {
      message: "Tanggal mulai tidak valid.",
    }),
    endDate: z.string().refine((val) => !isNaN(new Date(val).getTime()), {
      message: "Tanggal akhir tidak valid.",
    }),
  })
  .refine((data) => new Date(data.endDate) >= new Date(data.startDate), {
    message: "Tanggal akhir harus setelah atau sama dengan tanggal mulai.",
    path: ["endDate"],
  });

export const MAX_PORTFOLIO_ITEMS = 10;
export const MIN_PORTFOLIO_ITEMS = 0;
