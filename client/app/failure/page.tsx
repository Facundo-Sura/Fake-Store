export default function FailurePage() {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-6 text-red-600">Pago rechazado</h1>
        <p className="text-lg mb-8">Hubo un problema con tu pago. Inténtalo nuevamente.</p>
      </div>
    );
  }
  