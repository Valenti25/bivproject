'use client';

import * as React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    return (
        <header className="sticky top-0 z-50 bg-white/90 px-3 backdrop-blur">
            <div className="container mx-auto">
                <nav className="grid w-full grid-cols-3 items-center justify-center gap-2 py-3">
                    <div className="flex items-center justify-start">
                        <Link href="#" className="flex items-center md:hidden">
                            {/* <Image
                src="/images/inblox.svg"
                alt="Brand"
                width={28}
                height={28}
                className="mr-2"
              /> */}
                            <span className="font-semibold">Brand</span>
                        </Link>

                        <Link href="/landingpage" className="ml-0 hidden items-center md:flex">
                            {/* <Image
                src="/images/"
                alt="Brand"
                width={28}
                height={28}
                className="mr-2"
              /> */}
                            <span className="font-semibold">Brand</span>
                        </Link>
                    </div>

                    <div className="flex items-center justify-center">
                        <ul className="hidden items-center gap-6 md:flex">
                            <li>
                                <Link href="#" className="text-sm text-gray-700 hover:text-emerald-600">
                                    ฟีเจอร์
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-700 hover:text-emerald-600">
                                    ราคา
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-700 hover:text-emerald-600">
                                    โซลูชัน
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-700 hover:text-emerald-600">
                                    บล็อก
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center">
                        <div className="flex items-center gap-2 md:hidden">
                            <Link
                                href="/registerpages/identity"
                                className="inline-flex h-9 w-full shrink-0 items-center justify-center rounded-md border text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                            >
                                สมัครสมาชิก
                            </Link>
                            <button
                                type="button"
                                aria-label="Open menu"
                                aria-expanded={open}
                                onClick={() => setOpen((v) => !v)}
                                className="tems-center inline-flex justify-center rounded-md hover:bg-gray-50"
                            >
                                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </button>
                        </div>

                        <Link
                            href="#contact"
                            className="hidden h-9 items-center rounded-md bg-emerald-500 px-4 text-sm font-medium text-white hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none md:inline-flex"
                        >
                            ติดต่อเรา
                        </Link>
                    </div>
                </nav>
            </div>

            <div className={`overflow-hidden border-t transition-[max-height,opacity] duration-300 ease-out md:hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="container mx-auto">
                    <ul className="flex flex-col gap-1 py-2">
                        <li>
                            <Link href="#" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-50">
                                ฟีเจอร์
                            </Link>
                        </li>
                        <li>
                            <Link href="#" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-50">
                                ราคา
                            </Link>
                        </li>
                        <li>
                            <Link href="#" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-50">
                                โซลูชัน
                            </Link>
                        </li>
                        <li>
                            <Link href="#" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-50">
                                บล็อก
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
