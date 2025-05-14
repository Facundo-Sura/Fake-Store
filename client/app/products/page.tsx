import Card from "@/components/product/Card";
import { Product } from "@/types/product";

export default function Products() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold mb-8">Productos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))} */}
            </div>
        </div>
    )
}