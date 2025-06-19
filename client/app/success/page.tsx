'use client';

import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-6 text-green-600">¡Compra exitosa!</h1>
      <p className="text-lg mb-8">Gracias por tu compra. Te enviaremos un correo de confirmación.</p>

      <Link
        href="/products"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Volver a comprar
      </Link>
    </div>
  );
}
