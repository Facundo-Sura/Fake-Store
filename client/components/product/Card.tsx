'use client'

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

interface CardProps {
    product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
    return (
        <Link href={`/products/${product.id}`} className="block border rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="relative w-full h-64">
                <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
            </div>
        </Link>
    )
}

export default Card;