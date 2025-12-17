import React from 'react';
import Image from 'next/image';

export default function PopularServices() {
    return (
        <div className="container mx-auto px-3">
            <h1 className="mt-5 mb-2 text-xl font-bold">บริการยอดนิยม</h1>

            <div className="grid w-full grid-cols-2 items-center justify-center gap-3">
                {[
                    // ข้อมูลบริการของแต่ละการ์ด
                    { src: '/images/landingimages/bivride.png', title: 'ชื่อบริการ', desc: 'รายละเอียดสั้นๆ เกี่ยวกับบริการ' },
                    { src: '/images/landingimages/bivbuddy.png', title: 'ชื่อบริการ', desc: 'รายละเอียดสั้นๆ เกี่ยวกับบริการ' },
                    { src: '/images/landingimages/bivdaily.png', title: 'ชื่อบริการ', desc: 'รายละเอียดสั้นๆ เกี่ยวกับบริการ' },
                    { src: '/images/landingimages/bivbeside.png', title: 'ชื่อบริการ', desc: 'รายละเอียดสั้นๆ เกี่ยวกับบริการ' },
                ].map((it, i) => (
                    <div key={i} className="group relative block overflow-hidden rounded-md">
                        <Image
                            src={it.src}
                            width={300}
                            height={200}
                            alt={it.title}
                            className="h-40 w-full shrink-0 rounded-md object-cover transition duration-300 group-hover:scale-[1.03] group-hover:shadow-lg"
                        />

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent duration-300 group-hover:opacity-40" />

                        <div className="pointer-events-none absolute bottom-0 p-3">
                            <h3 className="text-sm font-bold text-white">{it.title}</h3>
                            <p className="mt-0.5 text-xs text-white/90">{it.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
