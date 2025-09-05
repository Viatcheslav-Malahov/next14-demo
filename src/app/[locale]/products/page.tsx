import Link from "next/link";
import { revalidateProducts } from "./revalidate";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/locales";

type Product = { id: number; title: string; price: number };

async function getProducts(): Promise<Product[]> {
    const res = await fetch("https://dummyjson.com/products?limit=6", {
        next: { revalidate: 60, tags: ["products"] },
    });
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    return (data.products || []).map((p: Product) => ({
        id: p.id,
        title: p.title,
        price: p.price,
    }));
}

export const metadata = { title: "Products (cached + tag)" };

export default async function ProductsPage(props: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await props.params;
    const t = await getDictionary(locale as Locale);

    const products = await getProducts();

    return (
        <main className="mx-auto max-w-5xl px-4 py-10 space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">{t.products.listHeading}</h2>
                <form action={revalidateProducts}>
                    <button className="rounded-lg border px-3 py-1.5 text-sm hover:bg-white">
                        {/** Можно локализовать при желании */}
                        Обновить
                    </button>
                </form>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((p) => (
                    <Link
                        key={p.id}
                        href={`/products/${p.id}`}
                        className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition"
                    >
                        <div className="text-sm text-gray-500">#{p.id}</div>
                        <div className="mt-1 text-lg font-medium">{p.title}</div>
                        <div className="mt-2 text-gray-700">${p.price}</div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
