import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-dvh pt-20">
      <section className="min-h-dvh bg-amber-200">
        <h1 className="text-2xl text-center">carrusel</h1>
      </section>
      <section className="min-h-dvh bg-amber-400">
        <h1 className="text-2xl text-center">Productos Mas Vendidos</h1>
      </section>
      <section className="min-h-dvh bg-amber-600">
        <h1 className="text-2xl text-center">slider</h1>
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
