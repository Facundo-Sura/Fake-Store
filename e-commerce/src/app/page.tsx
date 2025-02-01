import Carrusel from "@/components/home/carousel";

export default function Home() {
  return (
    <div>
      <div>
        <h1 className="text-center text-xl font-bold">
          carrusel o banners promocionales
        </h1>
        <Carrusel />
      </div>
      <div>
        <h1 className="text-center">productos destacados o mas vendidos</h1>
      </div>
      <div>
        <h1 className="text-center">
          llamados a la acción (CTA) como "Comprar ahora" o "Explorar colección"
        </h1>
      </div>
      <div>
        <h1 className="text-center">breve introducción a la marca o negocio</h1>
      </div>
    </div>
  );
}
