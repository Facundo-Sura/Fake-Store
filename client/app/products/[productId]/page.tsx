import Image from "next/image";
import { notFound } from "next/navigation";
import { Product } from "@/types/product";

interface ProductProps {
    params: {
        productId: string;
    };
}

export default function ProductID({ params }: ProductProps) {
    const product = {}
    if (!product) {
        return notFound();
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="relative w-full h-[500px]">
                    {/* <Image
                        // src={product.image}
                        // alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    /> */}
                </div>
                <div>
                    {/* <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-gray-700 mb-6">{product.description}</p>
                    <p className="text-2xl font-semibold mb-6">${product.price.toFixed(2)}</p> */}
                    <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    )
}