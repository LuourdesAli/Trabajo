import React from "react";

interface AddRFCProps {
  setAddRfc: (value: boolean) => void;
}

export default function AddRFC({ setAddRfc }: AddRFCProps) {
  return (
    <>
      {/* Header */}
      <div
        onClick={() => setAddRfc(false)}
        className="flex items-center justify-between mb-6 cursor-pointer"
      >
        <p className="text-sm text-gray-500 font-medium">
          &larr; Volver a facturación
        </p>
      </div>
      <div className="bg-gray-100 h-screen w-full md:h-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Title */}
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Añadir RFC
          </h1>
          <p className="my-8">Datos fiscales</p>
          {/* Formulario */}
          <form className="space-y-4">
            {/* Datos fiscales */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg flex items-center mt-4 relative">
                <input
                  id="rfc"
                  type="text"
                  placeholder="RFC"
                  className="px-4 py-6 flex-grow text-black pr-8 bg-white-smoke rounded-lg focus:outline-none"
                />
              </div>
              <div className="rounded-lg flex items-center mt-4 relative">
                <input
                  id="nombre"
                  type="text"
                  placeholder="Nombre o razón social"
                  className="px-4 py-6 flex-grow text-black pr-8 bg-white-smoke rounded-lg focus:outline-none"
                />
              </div>
              <div className="flex items-center col-span-1 col-start-2">
                <p className="text-xs text-gray-400">
                  Nombre sin régimen societario (Sociedad Anónima, SA de CV,
                  Sociedad Civil, SC, CV, etc.)
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg flex items-center mt-4 relative">
                <select
                  id="regimen"
                  className="px-4 py-6 flex-grow text-dim-gray pr-8 bg-white-smoke rounded-lg focus:outline-none"
                >
                  <option value="">Régimen fiscal</option>
                </select>
              </div>
              <div className="rounded-lg flex items-center mt-4 relative">
                <select
                  id="uso-cfdi"
                  className="px-4 py-6 flex-grow text-dim-gray pr-8 bg-white-smoke rounded-lg focus:outline-none"
                >
                  <option value="">Uso CFDI</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg flex items-center mt-4 relative">
                <input
                  id="email"
                  type="email"
                  placeholder="Correo electrónico"
                  className="px-4 py-6 flex-grow text-black pr-8 bg-white-smoke rounded-lg focus:outline-none"
                />
              </div>
              <div className="rounded-lg flex items-center mt-4 relative">
                <input
                  id="codigo-postal"
                  type="text"
                  placeholder="Código postal"
                  className="px-4 py-6 flex-grow text-black pr-8 bg-white-smoke rounded-lg focus:outline-none"
                />
              </div>
            </div>

            {/* Botones */}
            <div className="flex items-center justify-end mt-6 space-x-8">
              <button
                type="button"
                className="text-blue text-sm font-medium hover:underline"
                onClick={() => setAddRfc(false)}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-blue px-6 py-2 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700"
                onClick={() => setAddRfc(false)}
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
