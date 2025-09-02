"use server";

import { revalidateTag } from "next/cache";

export async function revalidateProducts() {
    // сбрасываем кэш всех запросов, помеченных тегом "products"
    revalidateTag("products");
}
