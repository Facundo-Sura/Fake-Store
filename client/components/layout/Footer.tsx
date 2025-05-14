'use client'
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-black text-white w-full relative bottom-0 flex justify-around items-center">
            <section>
                <Link href="/" className="px-2 flex items-center">
                    <Image src="/logo.png" width={100} height={100} alt="Logo" />
                    <h2 className="text-2xl font-bold">Fake Store</h2>
                </Link>
            </section>
            <section>
                <h1 className="font-semibold text-m">AYUDA</h1>
            </section>
            <section>
                <h1 className="font-semibold text-m">ACERCA DE FAKE STORE</h1>
            </section>
            <section>
                <h1 className="font-semibold text-m">TIENDAS CERCANAS</h1>
            </section>
        </footer>
    )
}

export default Footer;