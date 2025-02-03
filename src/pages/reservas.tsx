"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Login from "@/componentes/login";

interface userData {
  ShareCode: string;
  FirstName: string;
  Points: number;
  LevelShort: string;
}

export default function Ejemplo() {
  const [data, setData] = useState<userData>();

  useEffect(() => {
    const responseSessionStorage = sessionStorage.getItem("usuario"); // Corrección en el nombre

    if (responseSessionStorage) {
      try {
        setData(JSON.parse(responseSessionStorage)); //aqui se hace el  parceo
      } catch (error) {
        console.error("Error al parsear sessionStorage:", error);
      }
    }
  }, []);

  console.log("dtos del usuario", data?.FirstName);

  return (
    <div className=" bg-slate-200">
      <Login />

      <div className="bg-blue-600">{data?.FirstName}</div>
      <div className="flex justify-between items-center  mb-6">
        <p className="font-medium text-2xl ">Mis Puntos iPark Rewards</p>
      </div>
      <div className="grid grid-cols-2 gap-10  mb-12">
        <div className="col-span-1  bg-white px-4 rounded-lg ">
          <div className="mt-4 max-w-28">
            <p className="bg-yellow-600 text-center px-4  py-1 rounded-lg font-bold  text-white text-3xl">
              {" "}
              Gold
            </p>
          </div>
          <p className=" mt-8 font-bold text-sm text-[#626262] ">
            PUNTOS DISPONIBLES
          </p>
          <p className=" mt-2 mb-6 font-bold text-3xl">{data?.Points}</p>
          <div className="mb-4">
            <Link href={"#"} className="text-blue-700 text-xs font-bold">
              ¿CÓMO FUNCIONA?
            </Link>
          </div>
        </div>
        <div className="col-span-1 bg-gray-500 px-4 rounded-lg">
          <div className="mt-4 mb-8 ">
            <p className=" mb-5 text-2xl font-bold text-white">
              {" "}
              ¡Invita y gana!
            </p>
            <p className="text-white font-normal text-lg mt-5">
              Comparte este código con tus amigos y gana puntos iPark Rewards.
            </p>
          </div>
          <div className="bg-white ounded-lg py-4 pl-4 rounded-lg flex justify-between mb-6  ">
            <div>
              <p className="font-bold text-xs leading-3 text-black mb-2">
                CÓDIGO DE INVITACIÓN
              </p>
              <p className="font-medium text-base">{data?.ShareCode} </p>
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
            <select
              className="bg-transparent rounded-lg px-4 py-3 border border-black"
              name=""
              id=""
            >
              <option defaultValue="VER TODOS" value="">
                VER TODOS
              </option>
              <option value="">ACUMULADOS</option>
              <option value="">REDIMIDOS</option>
            </select>
            <button className="flex justify-center items-center box-border  p-2 gap-2  border border-[#121820] rounded-lg">
              {" "}
              <Image
                src="/Calendar-day.svg"
                alt="icon"
                width={32}
                height={42}
              />
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
          <div className="">
            <div className="flex-1 bg-[#f4f4f4] rounded-lg" id="level-Blue">
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
            <div className="flex flex-col items-center mt-4">
              <div className="flex items-center">
                <Image src="/Frame-236.svg" alt="icon" width={32} height={42} />
              </div>
              <p className="text-xs font-medium text-center mt-1 mb-8">
                Tú estás aquí
              </p>
            </div>
          </div>
          <div className="flex-1 bg-[#f4f4f4]  rounded-lg " id="level-Gold">
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
          <div className="flex-1 bg-[#f4f4f4]  rounded-lg" id="level-Platinum">
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
        <div className="flex justify-around gap-12">
          {/* Blue */}
          {data?.LevelShort === "Blue" ? (
            <div className="flex flex-col mt-4 items-center">
              <div className="flex">
                <Image src="/Frame-236.svg" alt="icon" width={32} height={42} />
              </div>
              <p className="text-xs font-medium text-center mt-1 mb-8">
                Tú estás aquí
              </p>
            </div>
          ) : data?.LevelShort === "Gold" ? (
            <div className="flex flex-col items-center mt-4">
              <div className="flex items-center">
                <Image src="/Frame-236.svg" alt="icon" width={32} height={42} />
              </div>
              <p className="text-xs font-medium text-center mt-1 mb-8">
                Tú estás aquí
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center mt-4">
              <div className="flex items-center">
                <Image src="/Frame-236.svg" alt="icon" width={32} height={42} />
              </div>
              <p className="text-xs font-medium text-center mt-1 mb-8">
                Tú estás aquí
              </p>
            </div>
          )}

          {/* Gold */}
          {data?.LevelShort === "Gold" && (
            <div className="flex flex-col items-center mt-4">
              <div className="flex items-center">
                <Image src="/Frame-236.svg" alt="icon" width={32} height={42} />
              </div>
              <p className="text-xs font-medium text-center mt-1 mb-8">
                Tú estás aquí
              </p>
            </div>
          )}

          {/* Platinum */}
          {data?.LevelShort === "Platinum" && (
            <div className="flex flex-col items-center mt-4">
              <div className="flex items-center">
                <Image src="/Frame-236.svg" alt="icon" width={32} height={42} />
              </div>
              <p className="text-xs font-medium text-center mt-1 mb-8">
                Tú estás aquí
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
