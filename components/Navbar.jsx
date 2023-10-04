
import Image from "next/image"
import Link from "next/link"


function Navbar() {
    return (
        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">

                    <span className="ml-3 text-xl"><span className=" text-2xl text-cyan-600 rounded-md ">Web</span>-Blogs</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap  items-end text-base  justify-center">
                    <Link href="/" className="mr-5 hover:text-white">Home </Link>
                    <Link href="/about" className="mr-5 hover:text-white">About</Link>

                    <Link href="https://akhileshpujar.vercel.app/" className="mr-5 hover:text-white">Contact me</Link>
                </nav>
                <Link href="/loginform">       <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                    Login/Sign up

                </button></Link>

            </div>
        </header>
    )
}

export default Navbar
