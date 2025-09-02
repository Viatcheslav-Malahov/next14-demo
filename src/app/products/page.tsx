type Product = { id: number; title: string; price: number };

async function getProducts(): Promise<Product[]> {
    if (Math.random() < 0.3) throw new Error("Random fail");
    // Демонстрация server-side fetch с кэшированием
    const res = await fetch("https://dummyjson.com/products?limit=6", {
        next: { revalidate: 60 }, // кэш на 60 сек
    });
    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }
    const data = await res.json();
    return (data.products || []).map((p: Product) => ({
        id: p.id,
        title: p.title,
        price: p.price,
    }));
}

export const metadata = { title: "Products (cached)" };

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <main className="mx-auto max-w-5xl px-4 py-10 space-y-6">
            <h2 className="text-xl font-semibold">Продукты (revalidate: 60s)</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((p) => (
                    <div
                        key={p.id}
                        className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                    >
                        <div className="text-sm text-gray-500">#{p.id}</div>
                        <div className="mt-1 text-lg font-medium">{p.title}</div>
                        <div className="mt-2 text-gray-700">${p.price}</div>
                    </div>
                ))}
            </div>
        </main>
    );
}
