import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="flex flex-col border-t-2 border-neutral-700 pt-12 pb-6 font-sans space-y-8">
            <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between container lg:w-3/4 lg:mx-auto">
                <div className='space-y-4'>
                    <div className="flex gap-3">
                        <h3 className="text-3xl font-bold">
                            Ayaz Ali
                        </h3>
                        <Link
                            href={"https://github.com/ayaz-e-ali"}
                            target="_blank"
                            className="p-2 rounded-full bg-neutral-900 border border-neutral-800 hover:border-gray-600 hover:bg-neutral-800 transition"
                        >
                            <Github className="w-5 h-5 text-gray-300" />
                        </Link>
                        <Link
                            href={"https://www.linkedin.com/in/ayaz-al%C3%AE"}
                            target="_blank"
                            className="p-2 rounded-full bg-neutral-900 border border-neutral-800 hover:border-gray-600 hover:bg-neutral-800 transition"
                        >
                            <Linkedin className="w-5 h-5 text-gray-300" />
                        </Link>
                    </div>

                    <p className="text-md text-neutral-300 font-semibold">
                        Creating web applications with performance <br /> and user scalability in mind.
                    </p>
                </div>

                <div className=' space-y-4'>
                    <h3 className="text-xl font-bold">
                        Navigation
                    </h3>
                    <ul className='flex flex-col gap-2'>
                        <Link href={'#about'}><ListItem>About</ListItem></Link>
                        <Link href={'#projects'}><ListItem>Projects</ListItem></Link>
                        <Link href={'#skills'}><ListItem>Tech Stack</ListItem></Link>
                        <Link href={'#contact'}><ListItem>Contact</ListItem></Link>
                    </ul>
                </div>

                <div className=' space-y-4'>
                    <h3 className="text-xl font-bold">
                        Contact
                    </h3>
                    <div className="space-y-2">
                        <Link href={"https://google.com"} className="text-md text-neutral-300 font-semibold flex gap-2 items-center">
                            <Mail />
                            ayaz.mo.ali@gmail.com
                        </Link>
                        <p className="text-md text-neutral-300 font-semibold flex gap-2 items-center">
                            <MapPin />
                            qamishli, syria
                        </p>
                    </div>
                </div>
            </div>


            <p className='container lg:w-3/4 lg:mx-auto border-t pt-8 border-neutral-700 '>
                @ 2025 Ayaz Ali. All rights resaved.
            </p>
        </footer>
    )
}


function ListItem({ children }) {
    return (
        <li className='text-md underline underline-offset-4 text-neutral-300 font-semibold cursor-pointer hover:opacity-85 transition-opacity duration-300'>
            {children}
        </li>
    );

}