import FacturaModal from "@/componentes/modal";
import AddRFC from "@/componentes/agregar-rfc";
import { useState } from "react";
import FacturacionAutomatica from "./facturacion-automatica";

function Facturacion() {
  const [addRfc, setAddRfc] = useState(false);
  const [mostrarFactura, setMostrarFactura] = useState(false);

  // const handleToggle = () => {
  //   setMostrarFactura(true);
  //   setAddRfc(true);
  // };

  return (
    <>
      {addRfc ? (
        <AddRFC setAddRfc={setAddRfc} />
      ) : mostrarFactura ? (
        <FacturacionAutomatica setFacturacionAutomatica={setMostrarFactura} />
      ) : (
        <>
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl text-black">Facturacion</h1>
            <FacturaModal />
          </div>
          <div className="flex mb-11">
            <div className="bg-uranian-blue rounded-lg p-4">
              <div className="flex items-center">
                <i className="icon-facturacion text-2xl text-berkeley-blue"></i>
                <p className="font-bold ml-2 text-base text-british-racing-green">
                  Actualiza tus datos fiscales
                </p>
              </div>
              <div className="flex items-start mt-4">
                <p className="text-base text-british-racing-green">
                  Por DISPOSICIÓN OFICIAL DEL SAT, a partir del 1 de enero del
                  2023 la única versión válida será CFDI 4.0 es necesario
                  cumplir con los requisitos anteriores para una facturación
                  exitosa.
                </p>
              </div>
              <ol className="list-decimal list-inside mt-4 text-base text-british-racing-green">
                <li>RFC correcto.</li>
                <li>
                  Nombre: en MAYÚSCULAS, sin regimen societario exactamente
                  igual como está en la Cédula Fiscal.
                </li>
                <li>Código postal de su Cédula Fiscal.</li>
                <li>Regimen Fiscal.</li>
                <li>Uso de la Factura.</li>
              </ol>
              <p className="mt-2 text-base text-british-racing-green">
                Para más información consulta: <br />
                <a
                  href="https://www.sat.gob.mx"
                  className="text-link-blue"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.sat.gob.mx
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-start p-4 rounded-lg space-x-6 font-medium flex-row">
            <i className="icon-facturacion text-5xl"></i>
            <div
              onClick={() => setMostrarFactura(true)}
              className="flex flex-col cursor-pointer"
            >
              <h2 className="font-bold text-2xl text-black">
                Facturación Automática
              </h2>
              <p className="mb-4 text-base text-dim-gray">
                Con esta opción tu factura se generará <br /> automáticamente al
                finalizar tu estancia.
              </p>
            </div>
            <button className="bg-timber-wolf px-3 py-1 rounded-full text-black">
              <p>Inactiva</p>
            </button>
            <p className="ml-2 text-2xl font-bold text-blue">{">"} </p>
          </div>
          <h4 className="text-2xl text-black mb-8">Mis RFCs</h4>
          <div className="flex space-x-4">
            <div className="w-52 bg-white rounded-lg mb-8">
              <div className="flex flex-col justify-between p-4 mb-6">
                <p className="font-bold text-base text-black">VECA842009M10</p>
                <p className="text-black text-base font-medium m-0">
                  ANA VELEZ
                </p>
                <p className="text-black text-base font-medium m-0">CAMACHO</p>
              </div>
              <div className="flex justify-center divide-timber-wolf divide-x border-t">
                <div className="flex items-center justify-center w-full">
                  <button className="py-4">
                    <i className="icon-edit text-blue text-2xl"></i>
                  </button>
                </div>
                <div className="flex items-center justify-center w-full">
                  <button className="py-4">
                    <i className="icon-trash text-blood-red text-2xl"></i>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="w-52 border border-silver border-dotted rounded-lg mb-8 cursor-pointer"
              onClick={() => setAddRfc(true)}
            >
              <div className="flex flex-col p-4 mb-6">
                <i className="mb-3 icon-plus text-white bg-blue rounded-full w-8 h-8 flex items-center justify-center"></i>
                <p className="font-bold text-xs uppercase text-blue">
                  Añadir nuevo RFC
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl text-black">Mis facturas</h1>
            <button
              type="button"
              className="border border-black flex items-center p-2 px-2 py-1 rounded-lg text-black text-xs tracking-widest uppercase"
            >
              <p>Buscar por fecha</p>
              <i className="icon-facturacion text-base"></i>
            </button>
          </div>
          <div className="bg-white flex items-start justify-between p-4 rounded-lg mb-6">
            <div className="flex flex-col">
              <div className="flex mb-2 space-x-8">
                <p className="font-bold text-black text-lg">AXM8300</p>
                <p className="font-normal text-black text-lg">$956.00</p>
              </div>
              <p className="font-normal text-black text-lg">25 ago 2024</p>
            </div>
            <div className="flex divide-timber-wolf divide-x-2">
              <div className="flex flex-col items-center mr-6">
                <button className="bg-link-blue flex items-center justify-center mb-2 px-4 py-2 rounded-full text-white">
                  <i className="icon-download text-xl"></i>
                </button>
                <p className="font-bold text-black text-xs uppercase">
                  Descargar pdf
                </p>
              </div>
              <div className="flex flex-col items-center pl-6">
                <button className="bg-link-blue flex items-center justify-center mb-2 px-4 py-2 rounded-full text-white">
                  <i className="icon-download text-xl"></i>
                </button>
                <p className="font-bold text-black text-xs uppercase">
                  Descargar pdf
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Facturacion;
