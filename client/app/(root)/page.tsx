import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-dvh pt-20">
      <section className="min-h-dvh bg-amber-200">
        <h1 className="text-2xl text-center">carrusel</h1>
      </section>
      <section className="min-h-dvh bg-amber-400">
        <h1 className="text-2xl text-center">coleccion indumentaria urbano</h1>
      </section>
      <section className="min-h-dvh bg-amber-600">
        <h1 className="text-2xl text-center">coleccion calzado urbano</h1>
      </section>
      <section className="min-h-dvh bg-amber-700">
        <h1 className="text-2xl text-center">coleccion indumentaria deportiva</h1>
      </section>
      <section className="min-h-dvh bg-amber-900">
        <h1 className="text-2xl text-center">coleccion calzado deportivo</h1>
      </section>
    </div>
  );
}
