'use client'
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-blue-200 w-full absolute bottom-0 flex">
            <Link href="/" className="px-2 flex items-center">
                <Image src="/logo.png" width={100} height={100} alt="Logo" />
                <h2 className="text-2xl font-bold fon">Fake Store</h2>
            </Link>
        </footer>
    )
}

export default Footer;