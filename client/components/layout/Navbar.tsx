'use client'
import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
    return (
        <header className="bg-blue-200 fixed w-full h-14 flex justify-around items-center">
            <Link href="/" className="px-2 grow">
                <Image src="/logo.png" width={50} height={50} alt="Logo" />
            </Link>
            <nav className=" grow flex justify-around">
                <Link href="/products">Productos</Link>
                <Link href="/about">Nosotros</Link>
                <Link href="/contact">Contacto</Link>
            </nav>
            <div className="grow flex items-center justify-around">
                <form action="" className="bg-gray-200 rounded-full p-2 items-center">
                    <input type="text" placeholder="Buscar prducto" className="text-center outline-none"/>
                    <button type="submit"><CiSearch /></button>
                </form>
                <Link href="/login"><IoPersonOutline /></Link>
                <Link href="/cart"><CiShoppingCart /></Link>
            </div>
        </header>
    )
}

export default Navbar;