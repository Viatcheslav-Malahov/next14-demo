"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function revalidateProducts() {
  // сбрасываем кэш всех запросов с тегом "products"
  revalidateTag("products");

  // сразу перерисуем страницу (новый запрос к серверу)
  redirect("/products");
  // Либо вместо redirect:
  // import { revalidatePath } from "next/cache";
  // revalidatePath("/products");
}
