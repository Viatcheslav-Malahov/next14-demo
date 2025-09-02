import { notFound } from "next/navigation";
import Image from "next/image";

type Product = {
    id: number;
    title: string;
    price: number;
    brand?: string;
    description?: string;
    thumbnail?: string;
};

async function getProduct(id: string): Promise<Product | null> {
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
        cache: "no-store", // в dev-режиме всегда свежие данные
    });

    if (res.status === 404) return null;
    if (!res.ok) throw new Error("Failed to fetch product");
    const p = await res.json();

    return {
        id: p.id,
        title: p.title,
        price: p.price,
        brand: p.brand,
        description: p.description,
        thumbnail: p.thumbnail,
    };
}

export default async function ProductPage(props: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await props.params; // 👈 дожидаемся params
    const product = await getProduct(id);
    if (!product) notFound();

    return (
        <main className="mx-auto max-w-3xl px-4 py-10 space-y-6">
            <a
                href="/products"
                className="inline-block text-sm text-gray-600 hover:underline"
            >
                ← Назад к списку
            </a>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="text-sm text-gray-500">
                    #{product.id} · {product.brand}
                </div>
                <h1 className="mt-1 text-2xl font-semibold">{product.title}</h1>
                <div className="mt-2 text-xl">${product.price}</div>

                {product.thumbnail && (
                    <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden rounded-xl border">
                        <Image
                            src={product.thumbnail}
                            alt={product.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 600px"
                            className="object-contain"
                            priority
                        />
                    </div>
                )}

                {product.description && (
                    <p className="mt-4 text-gray-700">{product.description}</p>
                )}
            </div>
        </main>
    );
}
