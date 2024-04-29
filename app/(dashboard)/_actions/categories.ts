"use server";

import prisma from "@/lib/prisma";
import {
  CreateCategorySchema,
  CreateCategorySchemaType,
  DeleteCategorySchema,
  DeleteCategorySchemaType,
} from "@/schema/categoriesSchema";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function CreateCategory(form: CreateCategorySchemaType) {
  const parsedBody = CreateCategorySchema.safeParse(form);
  if (!parsedBody.success) throw new Error(parsedBody.error.errors[0].message);

  const user = await currentUser();
  if (!user) redirect("/sign-in");

  const { name, icon, type } = parsedBody.data;

  return await prisma.category.create({
    data: {
      name,
      icon,
      type,
      userId: user.id,
    },
  });
}

export async function DeleteCategory(form: DeleteCategorySchemaType) {
  const parsedBody = DeleteCategorySchema.safeParse(form);
  if (!parsedBody.success) throw new Error(parsedBody.error.errors[0].message);

  const user = await currentUser();
  if (!user) redirect("/sign-in");

  const categories = await prisma.category.delete({
    where: {
      name_userId_type: {
        name: parsedBody.data.name,
        userId: user.id,
        type: parsedBody.data.type,
      },
    },
  });

  return categories;
}
