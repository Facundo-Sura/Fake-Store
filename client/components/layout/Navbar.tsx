'use client'
import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
    return (
        <header className="fixed w-full bg-white">
            <div className="bg-black h-6">
                <h1 className="text-white text-center ">slieders</h1>
            </div>
            <menu className="py-1 flex flex-wrap justify-around items-center">
                <Link href="/" className="px-2 grow">
                    <Image src="/logo.png" width={50} height={50} alt="Logo" />
                </Link>
                <nav className=" grow flex justify-around">
                    <Link href="/products">Productos</Link>
                    <Link href="/men">Hombres</Link>
                    <Link href="/women">Mujeres</Link>
                    <Link href="/children">Niños</Link>
                </nav>
                <form action="" className="bg-gray-200 rounded-full p-2 items-center">
                    <input type="text" placeholder="Buscar prducto" className="text-center outline-none" />
                    <button type="submit"><CiSearch /></button>
                </form>
                <div className="grow flex items-center justify-around">
                    <Link href="/login"><IoPersonOutline /></Link>
                    <Link href="/favorites"><MdFavoriteBorder /></Link>
                    <Link href="/cart"><CiShoppingCart /></Link>
                </div>
            </menu>
        </header>
    )
}

export default Navbar;