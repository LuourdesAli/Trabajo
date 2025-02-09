// Archivo: src/components/modal.js
import { useState } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => setIsOpen(true);

  // Función para cerrar el modal
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Botón para abrir el modal */}
      <button
        onClick={openModal}
        className="text-blue-600 hover:underline font-medium"
      >
        Ver Información
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Fondo semitransparente que al hacer click cierra el modal */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={closeModal}
          ></div>
          {/* Contenido del modal */}
          <div className="bg-blue-400 rounded-lg p-6 z-10 shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Información de Facturación</h2>
            <p className="mb-4">
              Aquí puedes colocar la información que desees mostrar en el modal,
              por ejemplo, detalles adicionales sobre el proceso de facturación.
            </p>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
