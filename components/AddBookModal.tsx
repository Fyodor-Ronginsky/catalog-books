'use client';

import React from "react";
import Modal from "./ui/Modal";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

type AddBookInput = {
  title: string;
  author: string;
  year?: string;
  description?: string;
  image?: string;
};

const schema = z.object({
  title: z.string().min(1, "Обязательное поле"),
  author: z.string().min(1, "Обязательное поле"),
  year: z.preprocess(
    (val) => {
      if (typeof val === "string" && val.trim() === "") return undefined;
      if (typeof val === "string" || typeof val === "number") return Number(val);
      return undefined;
    },
    z.number().int().positive().optional()
  ),
  description: z.string().optional(),
  image: z.string().url().optional(),
});

const resolver = zodResolver(schema) as unknown as Resolver<AddBookInput>;

interface AddBookModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (book: AddBookInput) => void;
}

export default function AddBookModal({ open, onClose, onAdd }: AddBookModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddBookInput>({
    resolver,
  });

  const onSubmit: SubmitHandler<AddBookInput> = (data) => {
    onAdd(data);
    reset();
    onClose();
  };

   return (
    <Modal open={open} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("title")} placeholder="Название" />
        {errors.title && <p className="text-red-600">{errors.title.message}</p>}

        <input {...register("author")} placeholder="Автор" />
        {errors.author && (
          <p className="text-red-600">{errors.author.message}</p>
        )}

        <input {...register("year")} type="number" placeholder="Год" />
        {errors.year && <p className="text-red-600">{errors.year.message}</p>}

        <textarea {...register("description")} placeholder="Описание" />

        <input {...register("image")} placeholder="URL обложки" />
        {errors.image && <p className="text-red-600">{errors.image.message}</p>}

        <button type="submit" className="btn">
          Добавить книгу
        </button>
      </form>
    </Modal>
  );
}
