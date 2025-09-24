import Link from 'next/link';
import React from 'react'

export default function Nav() {
    return (
        <div className='container py-6 flex justify-center lg:justify-between items-center'>
            <h1 className="text-2xl font-serif">AYAZ ALÎ</h1>
            <ul className='hidden lg:flex gap-8 text-lg font-sans'>
                <Link href={'#about'}><ListItem>About</ListItem></Link>
                <Link href={'#projects'}><ListItem>Projects</ListItem></Link>
                <Link href={'#contact'}><ListItem>Contact</ListItem></Link>
            </ul>
        </div>
    )
}

function ListItem({ children }) {
    return (
        <li className='font-sans uppercase font-bold cursor-pointer hover:opacity-85 transition-opacity duration-300'>
            {children}
        </li>
    );

}