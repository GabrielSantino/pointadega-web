import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className=" p-4 border-t-8  flex justify-between items-center" style={{ backgroundColor: 'var(--preto)', color: 'var(--branco)', borderColor: 'var(--dourado)' }}>
            <div className="logo flex items-center gap-2">
                <img src='/logo.jpg' alt="Point Adega" className='w-16 h-16 rounded-full' />
                <span className="text-lg font-bold"> Point Adega</span>
            </div>
            

                <nav className= "navbar">
                    <ul className="flex gap-4">
                        <li><Link href="/">Início</Link></li>
                        <li><Link href="/produtos">Produtos</Link></li>
                        <li><Link href="/contato">Contato</Link></li>
                        <li><Link href="/login" className="text-black px-4 py-2 rounded" style={{backgroundColor:'var(--dourado)'}}>Login</Link></li>
                    </ul>
                </nav>
        </header>
    );
};

export default Header;