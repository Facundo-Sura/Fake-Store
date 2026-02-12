"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";

const Headers = () => {
    const [products, setProducts] = useState([]);

    function handleSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const query = formData.get("search") as string;
        // Aquí puedes implementar la lógica de búsqueda, por ejemplo, haciendo una solicitud a tu API
        console.log("Buscando productos con la consulta:", query);
    }

  return (
    <header className="fixed w-full bg-white">
      <div className="bg-black h-6">
        <h1 className="text-white text-center ">slieders</h1>
      </div>
      <menu className="py-1 flex flex-wrap justify-around items-center">
        <Link href="/" className="px-2 grow">
          <Image src="/logo.png" width={50} height={50} alt="Logo" />
        </Link>
        <form action="" className="bg-gray-200 rounded-full p-2 items-center grow" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscar prducto"
            className="text-center outline-none w-5/6"
          />
          <button type="submit" >
            <CiSearch />
          </button>
        </form>
        <div className="grow flex items-center justify-around">
          <Link href="/login">
            <IoPersonOutline />
          </Link>
          <Link href="/cart">
            <CiShoppingCart />
          </Link>
        </div>
      </menu>
      <nav className=" pt-2 flex justify-around">
        <Link href="/products">Productos</Link>
        <Link href="/men">Hombres</Link>
        <Link href="/women">Mujeres</Link>
        <Link href="/children">Niños</Link>
      </nav>
    </header>
  );
};

export default Headers;
