'use client';

import * as React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { useState } from 'react';

const STEPS = [
    { id: '1', title: 'คำถามที่ #1', desc: '(Detail of Benefit) Lorem ipsum dolor sit amet...' },
    { id: '2', title: 'คำถามที่ #2', desc: '(Detail of Benefit) Lorem ipsum dolor sit amet...' },
    { id: '3', title: 'คำถามที่ #3', desc: '(Detail of Benefit) Lorem ipsum dolor sit amet...' },
];

export default function HowToUseSection() {
    // เปิดค้างอันที่1ไว้ตอนเข้าเว็บครั้งแรก
    const [value, setValue] = useState(STEPS[0].id);
    const onChange = (v: string) => {
        if (v) setValue(v);
    };
    return (
        <div className="container mx-auto mt-3 px-3">
            
            <div>
                <h1 className="text-xl font-bold">Biv ใช้ยังไง?</h1>
                <p className="text-sm text-gray-600 mb-3">เพียง 5 ขั้นตอนง่ายๆ คุณก็สามารถเริ่มใช้งาน Biv ได้แล้ว</p>
            </div>

            <Accordion type="single" collapsible value={value} onValueChange={onChange} className="space-y-2">
                {STEPS.map((s) => (

                    <AccordionItem key={s.id} value={s.id} className="border-0">
                        <AccordionTrigger className="w-full hover:no-underline rounded-md px-3 py-2 text-left data-[state=open]:bg-[#4ADE80]/10 data-[state=open]:text-[#009252] [&>svg]:text-[#009252] data-[state=open]:[&>svg]:text-[#009252]">
                            {s.title}
                        </AccordionTrigger>
                        <AccordionContent className="ext-sm pt-2 pr-2 pl-3 text-gray-600">{s.desc}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
