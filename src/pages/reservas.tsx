import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Ejemplo() {
  return (
    <div className="">
      <div className="flex justify-between items-center  mb-6">
        <p className="font-medium text-2xl ">Mis Puntos iPark Rewards</p>
      </div>
      <div className="grid grid-cols-2 gap-10  mb-12">
        <div className="col-span-1  bg-white px-4 rounded-lg ">
          <div className="mt-4  ">
            <p className="bg-yellow-600  px-4  py-1 rounded-lg font-bold  text-white text-3xl">
              {" "}
              Golden
            </p>
          </div>
          <p className=" mt-8 font-bold text-sm">PUNTOS DISPONIBLES</p>
          <p className=" mt-2 mb-6 font-bold text-3xl">456</p>
          <div className="mb-4">
            <Link href={"#"} className="text-blue-700">
              ¿CÓMO FUNCIONA?
            </Link>
          </div>
        </div>
        <div className="col-span-1 bg-gray-300 px-4 rounded-lg">
          <div className="mt-4 mb-8 ">
            <p className=" mb-5 "> ¡Invita y gana!</p>
            <p>
              Comparte este código con tus amigos y gana puntos iPark Rewards.
            </p>
          </div>
          <div className="bg-white ounded-lg py-4 pl-4 rounded-lg flex justify-between mb-6 ">
            <div>
              <p>CÓDIGO DE INVITACIÓN</p>
              <p>iP23AV</p>
            </div>
            <div>
              <button className="px-4">
                <Image src="/icon.svg" alt="" width={42} height={42} />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <p className=" text-2xl font-bold"> Mi historial de uso </p>
          <div className="flex justify-center  gap-4">
            <select className="bg-transparent rounded-lg px-4 py-3 border border-black" name="" id="">
              <option defaultValue="VER TODOS" value="">
                VER TODOS
              </option>
              <option value="">1</option>
              <option value="">2</option>
            </select>
            <button className="flex justify-center items-center">
              {" "}
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="39"
                  height="39"
                  rx="7.5"
                  stroke="#121820"
                />
                <path d="M12 12H28L26 14H12V12Z" fill="#121820" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28 16H12V28H28V16ZM17 23H14V26H16L17 23Z"
                  fill="#121820"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className=" flex justify-between items-center py-4 px-7 mb-6 mt-8 bg-white">
          <p className="flex justify-center text-lg font-normal gap-2 ">
            {" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 5.5V19" stroke="#7ACD8F" stroke-width="2" />
              <path d="M6 11L12 5L18 11" stroke="#7ACD8F" stroke-width="2" />
            </svg>
            25 ago 2024
          </p>
          <div>
            <p className="flex justify-center items-center gap-4  text-lg font-bold">
              20 puntos{" "}
              <svg
                width="1"
                height="48"
                viewBox="0 0 1 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="1" height="48" fill="#D1D1D1" />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 4V20" stroke="#0051EE" stroke-width="2" />
                <path d="M4 12H20" stroke="#0051EE" stroke-width="2" />
              </svg>
            </p>
          </div>
        </div>
        <div className="flex justify-between py-4 px-7 bg-white items-center">
          <p className="flex justify-center gap-2 text-lg font-normal">
            {" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 5V18" stroke="#F03719" stroke-width="2" />
              <path d="M18 13L12 19L6 13" stroke="#F03719" stroke-width="2" />
            </svg>
            14 abr 2024
          </p>
          <div className="">
            <p className="flex justify-center items-center gap-4  text-lg font-bold">
              234 puntos{" "}
              <svg
                width="1"
                height="48"
                viewBox="0 0 1 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="1" height="48" fill="#D1D1D1" />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 4V20" stroke="#0051EE" stroke-width="2" />
                <path d="M4 12H20" stroke="#0051EE" stroke-width="2" />
              </svg>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white mt-9 pt-4 px-4">
        <p className="text-lg font-bold">¿Cómo funciona iPark Rewards?</p>
        <p className="text-base font-medium mt-8">
          {" "}
          Regístrate, estaciona tu auto en iPark y recibe puntos en tu monedero
          electrónico por cada estancia. Cada punto vale 1 peso (MXN) ¡Para que
          pagues tus estancias con ellos!
        </p>
        <div className="mt-6 flex justify-between gap-7">
          <div className="flex-1 bg-[#f4f4f4] rounded-lg ">
            <div className="bg-blue-600 text-white rounded-t-lg py-6 ">
              <h3 className="text-lg font-bold text-center">Blue</h3>
            </div>
            <div className="p-4">
              <p className="font-medium text-base mt-4">
                Acumulación de puntos:
              </p>
              <p className="font-bold text-base mt-2">
                2% de tu tarifa diaria bonificado en monedero iPark.
              </p>
            </div>
          </div>
          <div className="flex-1 bg-[#f4f4f4]  rounded-lg ">
            <div className="bg-yellow-500 text-white pt-4 rounded-t-lg ">
              <h3 className="text-lg font-bold text-center ">Gold</h3>
              <p className="text-xs font-medium text-center  pb-4">
                0 a 200 puntos
              </p>
            </div>
            <div className="p-4">
              <p className="font-medium text-base mt-4">
                Acumulación de puntos:
              </p>
              <p className="font-bold text-base mt-2 ">
                3% de tu tarifa diaria bonificado en monedero iPark más
                estacionamientos exclusivos.
              </p>
            </div>
          </div>
          <div className="flex-1 bg-[#f4f4f4]  rounded-lg">
            <div className="bg-gray-600 text-white rounded-t-lg">
              <h3 className="text-center text-lg font-bold pt-4">Platinum</h3>
              <p className="text-xs font-medium text-center pb-4">
                201 a 400 puntos
              </p>
            </div>
            <div className="p-4">
              <p className="font-medium text-base mt-4">
                Acumulación de puntos:
              </p>
              <p className="font-bold text-base mt-2">
                4% de tu tarifa diaria bonificado en monedero iPark más
                estacionamientos exclusivos.
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center  ">
          <div className="flex items-center">
            <Image src="/Frame-236.svg" alt="icon" width={32} height={42} />
          </div>
          <p className="text-xs font-medium text-center mt-1 mb-8">
            Tú estás aquí
          </p>
        </div>
      </div>
    </div>
  );
}
