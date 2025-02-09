import React, { useState } from "react";

interface FacturacionAutomaticaProps {
  setFacturacionAutomatica: (value: boolean) => void;
}

export default function FacturacionAutomatica({
  setFacturacionAutomatica,
}: FacturacionAutomaticaProps) {
  const [isAutomatic, setIsAutomatic] = useState(false);
  const [selectedRFC, setSelectedRFC] = useState("");
  const rfcs = ["RFC1", "RFC2", "RFC3"]; // Example RFCs, replace with actual data

  const handleToggle = () => {
    setIsAutomatic((prev) => !prev);
  };
  return (
    <>
      {/* Header */}
      <div
        className="flex items-center justify-between mb-6 cursor-pointer"
        onClick={() => setFacturacionAutomatica(false)}
      >
        <p className="text-sm text-gray-500 font-medium">
          &larr; Volver a facturación
        </p>
      </div>

      {/* Main Container */}
      <div className="bg-gray-100 w-full h-full flex">
        <div className="bg-white rounded-lg shadow-md p-6 w-full">
          {/* Title */}
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Facturación automática
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            Agiliza tu proceso de facturación, te llegará un correo de forma
            automática con tu factura al finalizar tu estancia.
          </p>

          {/* Toggle Facturación Automática */}
          <div className="mb-6">
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700">
                Facturación automática
              </label>
              <button
                onClick={handleToggle}
                className={`w-10 h-6 flex items-center rounded-full p-1 shadow-inner transition-colors duration-300 ${
                  isAutomatic ? "bg-orange" : "bg-gray-300"
                }`}
              >
                <span
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    isAutomatic ? "translate-x-4" : "translate-x-0"
                  }`}
                ></span>
              </button>
            </div>
            <p className="text-gray-600 text-sm mt-2">
              Agiliza tu proceso de facturación, te llegará un correo de forma
              automática con tu factura al finalizar tu estancia.
            </p>
          </div>

          {/* Dropdown */}
          <div className="mb-6">
            <label
              htmlFor="rfc"
              className="block text-sm font-medium text-gray-700"
            >
              Elige el RFC con el que se solicitarán tus facturas automáticas
            </label>
            <div className="relative mt-2">
              <select
                id="rfc"
                value={selectedRFC}
                onChange={(e) => setSelectedRFC(e.target.value)}
                className="px-4 py-3 w-full bg-white-smoke rounded-lg focus:outline-none text-black pr-8"
              >
                {rfcs.map((rfc, index) => (
                  <option key={index} value={rfc}>
                    {rfc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end space-x-4">
            <button
              onClick={() => setFacturacionAutomatica(false)}
              className="text-blue text-sm font-medium hover:underline"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue text-white font-medium rounded-md shadow-sm hover:bg-blue-700"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
