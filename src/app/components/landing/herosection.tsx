'use client';

import React, { useEffect, useRef, useState } from 'react';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Search } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
    // รูปเลื่อนเองทุกๆ 4 วิ
    const SLIDES = ['/images/landingimages/bivride.png', '/images/landingimages/bivdaily.png', '/images/landingimages/bivbuddy.png', '/images/landingimages/bivbeside.png'];
    const [index, setIndex] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    useEffect(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setIndex((i) => (i + 1) % SLIDES.length);
        }, 4000);
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [SLIDES.length]);
    const goTo = (i: number) => setIndex(i);

    return (
        <div className="container mx-auto">
            <div className="mx-auto mt-3 flex w-auto flex-col items-center justify-center">
                <form className="mb-3 gap-4">
                    <div className="relative">
                        <InputGroup className="flex h-10 items-center rounded-3xl text-[#333333]">
                            <InputGroupInput className="px-20" />
                            <InputGroupAddon>
                                <Search />
                                <span className="h-5 w-[1px] bg-[#D9D9D9]" />
                                <div>wcwc</div>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                </form>

                <div className="relative flex w-full max-w-[1440px] justify-center px-3">
                    <div className="relative h-[185px] w-full overflow-hidden rounded-md bg-[#4ADE80] lg:h-[390px]">
                        <div className="flex h-full w-full transition-transform duration-500 ease-out" style={{ transform: `translateX(-${index * 100}%)` }}>
                            {SLIDES.map((src, i) => (
                                <div key={i} className="relative h-full w-full min-w-full">
                                    <Image src={src} alt="" fill priority={i === 0} className="object-cover" sizes="(min-width: 1024px) 1440px, 100vw" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pointer-events-auto absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
                        {SLIDES.map((_, i) => {
                            const active = i === index;
                            return (
                                <button
                                    key={i}
                                    aria-label={`Slide ${i + 1}`}
                                    onClick={() => goTo(i)}
                                    className={['h-2.5 rounded-full transition-all', active ? 'w-8 bg-[#4ADE80]' : 'w-2.5 bg-white opacity-90'].join(' ')}
                                />
                            );
                        })}
                    </div>
                </div>

                <div className="container mt-5 px-3">
                    <h1 className="text-xl font-bold text-[#009252]">ทำไมต้องเลือก Biv?</h1>
                    <p className="text-sm">เราคือแพลตฟอร์มที่ใส่ใจในทุกรายละเอียด เพื่อให้คุณได้รับบริการที่ดีที่สุด</p>
                    <div className="mt-3 space-x-3">
                        <Button className="cursor-pointer bg-[#4ADE80] px-6 text-white">ติดต่อเรา</Button>
                        <Button className="cursor-pointer border border-[#009252] bg-[#009252]/10 px-6 text-black">ติดต่อเรา</Button>
                    </div>
                </div>

                <div className="container mx-auto mt-6 grid grid-cols-1 items-center justify-center gap-6 px-3">
                    <div className="h-[130px] w-full rounded-md border p-3 shadow-sm">
                        <div className="flex">
                            <div className="flex items-center justify-center rounded-md bg-[#4ADE80]/20 p-3">
                                <Search className="h-5 w-5" />
                            </div>
                        </div>
                        <h1 className="mt-2 mb-2 text-xs font-bold">จับคู่ผู้ดูแลในพื้นที่ใกล้คุณ</h1>
                        <p className="text-[11px]">ระบบหาผู้ดูแลที่อยู่ใกล้ เพื่อความสะดวกและรวดเร็ว</p>
                    </div>

                    <div className="h-[130px] w-full rounded-md border p-3 shadow-sm">
                        <div className="flex">
                            <div className="flex items-center justify-center rounded-md bg-[#4ADE80]/20 p-3">
                                <Search className="h-5 w-5" />
                            </div>
                        </div>
                        <h1 className="mt-2 mb-2 text-xs font-bold">จับคู่ผู้ดูแลในพื้นที่ใกล้คุณ</h1>
                        <p className="text-[11px]">ระบบหาผู้ดูแลที่อยู่ใกล้ เพื่อความสะดวกและรวดเร็ว</p>
                    </div>

                    <div className="h-[130px] w-full rounded-md border p-3 shadow-sm">
                        <div className="flex">
                            <div className="flex items-center justify-center rounded-md bg-[#4ADE80]/20 p-3">
                                <Search className="h-5 w-5" />
                            </div>
                        </div>
                        <h1 className="mt-2 mb-2 text-xs font-bold">จับคู่ผู้ดูแลในพื้นที่ใกล้คุณ</h1>
                        <p className="text-[11px]">ระบบหาผู้ดูแลที่อยู่ใกล้ เพื่อความสะดวกและรวดเร็ว</p>
                    </div>

                    <div className="h-[130px] w-full rounded-md border p-3 shadow-sm">
                        <div className="flex">
                            <div className="flex items-center justify-center rounded-md bg-[#4ADE80]/20 p-3">
                                <Search className="h-5 w-5" />
                            </div>
                        </div>
                        <h1 className="mt-2 mb-2 text-xs font-bold">จับคู่ผู้ดูแลในพื้นที่ใกล้คุณ</h1>
                        <p className="text-[11px]">ระบบหาผู้ดูแลที่อยู่ใกล้ เพื่อความสะดวกและรวดเร็ว</p>
                    </div>
                </div>

                <div className="container mx-auto mt-6 px-3">
                    <p className="text-sm">จัดการแชทได้ทุกช่องทาง สร้างความประทับใจให้ลูกค้า อย่างต่อเนื่อง เพิ่มโอกาสการขายได้ตลอด 24 ชั่วโมง</p>
                </div>
            </div>
        </div>
    );
}
