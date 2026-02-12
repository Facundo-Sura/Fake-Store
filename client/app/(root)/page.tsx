"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Carrousell, { type CarouselItem } from "@/components/landing/corrousell";

const items: CarouselItem[] = [
  {
    image: "/productos.jpg",
    title: "Bienvenido a nuestra tienda",
    description: "Con una amplia gama de productos",
    position: "top-right",
    decoImage: "",
    decoPosition: "bottom-left",
  },
  {
    image: "/delivery.jpg",
    title: "Ofertas especiales de la semana",
    description: "",
    position: "top-right",
    decoImage: "/envio.png",
    decoPosition: "bottom-right",
  },
  {
    image: "/descuentos.jpg",
    title: "Nuevos productos disponibles",
    description: "",
    position: "top-left",
    decoImage: "/descuento.png",
    decoPosition: "bottom-left",
  },
  {
    image: "/especial.jpg",
    title: "¡No te pierdas nuestras promos especiales!",
    description:
      "En dias festivos y eventos especiales tenemos descuentos únicos para ti. Visítanos y aprovecha estas ofertas limitadas.",
    position: "center",
    decoImage: "",
    decoPosition: "center",
  },
];

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        console.log("Fetch attempt finished");
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="w-full min-screen">
      <Carrousell items={items} autoplayInterval={5000} />
      <section className="min-h-dvh bg-amber-400">
        <h1 className="text-2xl text-center">Productos Mas Vendidos</h1>
        <div className="flex flex-wrap justify-around items-end">
          {products.map((product: Product) => (
            <div key={product.id} className="text-center bg-white/50 m-4 p-4 rounded-lg w-60">
              <img
                src={product.image}
                alt={product.title}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h2>{product.title}</h2>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="min-h-dvh bg-amber-600">
        <h1 className="text-2xl text-center">Por que elegirnos</h1>
      </section>
      <section className="min-h-dvh bg-amber-700">
        <h1 className="text-2xl text-center">Productos Mejor Valorados</h1>
      </section>
      <section className="min-h-dvh bg-amber-900">
        <h1 className="text-2xl text-center">Comentarios de los Usuarios</h1>
      </section>
    </div>
  );
}
