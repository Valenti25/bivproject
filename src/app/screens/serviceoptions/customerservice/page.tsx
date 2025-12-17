'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
type Option = {
    id: string;
    label: string;
    price?: number;
    desc?: string;
};

const formatTHB = (n: number) => new Intl.NumberFormat('th-TH').format(n) + '฿';

export default function ServiceOptionsCustomerService() {
    const serviceTypes: Option[] = [
        { id: 'standard', label: 'ไปข้างนอก', price: 2000 },
        { id: 'insurance', label: 'ตรวจประกัน', price: 2000 },
        { id: 'female', label: 'หญิงล้วน', price: 2000 },
    ];

    const needs: Option[] = [
        { id: 'quickie', label: 'Quickie (20–40) นาที', price: 2000 },
        { id: 'mini', label: 'Mini (1–3) ชั่วโมง', price: 2000 },
        { id: 'half', label: 'Half (4–8) ชั่วโมง', price: 2000 },
    ];

    const cars: Option[] = [
        {
            id: 'carplus',
            label: 'เลือกคันสำหรับฉัน (Car Plus+)',
            price: 1190,
            desc: 'เลือกคนขับ/รถที่ต้องการได้ (ตามเงื่อนไขบริการ)',
        },
        { id: 'no_need', label: 'ไม่ต้องการรถส่วนตัว', price: 0 },
    ];

    const [selectedServiceTypes, setSelectedServiceTypes] = useState<string[]>([]);
    const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
    const [selectedCar, setSelectedCar] = useState<string | null>(null);
    const [note, setNote] = useState('');

    const total = useMemo(() => {
        const sumChecked = (arr: string[], list: Option[]) =>
            arr.reduce((acc, id) => {
                const found = list.find((x) => x.id === id);
                return acc + (found?.price ?? 0);
            }, 0);

        const carPrice = cars.find((c) => c.id === selectedCar)?.price ?? 0;

        return sumChecked(selectedServiceTypes, serviceTypes) + sumChecked(selectedNeeds, needs) + carPrice;
    }, [selectedServiceTypes, selectedNeeds, selectedCar]);

    const toggleMulti = (id: string, setFn: React.Dispatch<React.SetStateAction<string[]>>) => {
        setFn((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
    };

    return (
        <div className="min-h-screen bg-white">
            {/* TOP IMAGE */}
            <div className="relative h-[150px] w-full overflow-hidden bg-neutral-100">
                {/* ถ้าใช้ next/image ก็ได้ แต่ขอเรียบๆ */}
                {/* เปลี่ยน src ตามของคุณ */}
                <img src="/images/biv-ride-header.jpg" alt="Biv Ride" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* CONTENT */}
            <div className="mx-auto w-full max-w-md px-4 pt-4 pb-28">
                <h1 className="text-base font-semibold text-neutral-900">บริการ Biv Ride</h1>

                {/* small pill */}
                <div className="mt-3 flex items-center gap-2">
                    <div className="flex w-full items-center rounded-full border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-600">
                        <span className="mr-2">👁️</span>
                        <Link href="/screens/serviceoptions/customerservice/usermap">
                            เลือกตัวเลือกของคุณ
                        </Link>
                    </div>
                </div>

                {/* SECTION: เลือกประเภทบริการ */}
                <Section title="เลือกประเภทบริการ">
                    <div className="space-y-3">
                        {serviceTypes.map((item) => (
                            <RowCheckbox
                                key={item.id}
                                checked={selectedServiceTypes.includes(item.id)}
                                label={item.label}
                                right={item.price ? formatTHB(item.price) : ''}
                                onChange={() => toggleMulti(item.id, setSelectedServiceTypes)}
                            />
                        ))}
                    </div>
                </Section>

                {/* SECTION: ความต้องการบริการ */}
                <Section title="ความต้องการบริการ">
                    <div className="space-y-3">
                        {needs.map((item) => (
                            <RowCheckbox
                                key={item.id}
                                checked={selectedNeeds.includes(item.id)}
                                label={item.label}
                                right={item.price ? formatTHB(item.price) : ''}
                                onChange={() => toggleMulti(item.id, setSelectedNeeds)}
                            />
                        ))}
                    </div>
                </Section>

                {/* SECTION: เลือกรถ */}
                <Section title="เลือกคันสำหรับฉัน (Car Plus+)">
                    <div className="space-y-3">
                        {cars.map((item) => (
                            <RowRadio
                                key={item.id}
                                checked={selectedCar === item.id}
                                label={item.label}
                                desc={item.desc}
                                right={item.price ? formatTHB(item.price) : ''}
                                onChange={() => setSelectedCar(item.id)}
                            />
                        ))}
                    </div>
                </Section>

                {/* SECTION: รายละเอียด */}
                <Section title="รายละเอียดรถ-คนขับ">
                    <div className="space-y-2">
                        <div className="text-sm font-medium text-neutral-900">แบบฟอร์มคำขอ</div>
                        <div className="text-xs text-neutral-500">ระบุรายละเอียดเพิ่มเติม เช่น สีรถ/ทะเบียน/เงื่อนไขที่ต้องการ</div>

                        <textarea
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder="กรอกรายละเอียดที่ต้องการ..."
                            className="mt-2 min-h-[110px] w-full resize-none rounded-xl border border-neutral-200 bg-white px-3 py-3 text-sm text-neutral-900 outline-none focus:border-neutral-300"
                        />
                    </div>
                </Section>
            </div>

            {/* BOTTOM BAR */}
            <div className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white">
                <div className="mx-auto w-full max-w-md px-4 py-3">
                    <Link href="/screens/serviceoptions/customerservice/addressandhealthinformation">
                        <button
                            type="button"
                            className="h-12 w-full rounded-xl bg-emerald-500 text-base font-semibold text-white shadow-sm transition active:scale-[0.99]"
                            onClick={() => {
                                // เอาไว้ต่อ logic ทีหลัง
                                console.log({
                                    selectedServiceTypes,
                                    selectedNeeds,
                                    selectedCar,
                                    note,
                                    total,
                                });
                            }}
                        >
                            {formatTHB(total || 400)} {/* ถ้าอยากให้ default 400 เหมือนรูป */}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

/* -------------------- UI pieces -------------------- */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="mt-5">
            <div className="mb-2 text-sm font-semibold text-neutral-900">{title}</div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-4">{children}</div>
        </div>
    );
}

function RowCheckbox({ checked, label, right, onChange }: { checked: boolean; label: string; right?: string; onChange: () => void }) {
    return (
        <label className="flex cursor-pointer items-center justify-between gap-3">
            <div className="flex items-center gap-3">
                <input type="checkbox" checked={checked} onChange={onChange} className="h-4 w-4 rounded border-neutral-300" />
                <span className="text-sm text-neutral-800">{label}</span>
            </div>
            {right ? <span className="text-xs font-medium text-neutral-500">{right}</span> : null}
        </label>
    );
}

function RowRadio({ checked, label, desc, right, onChange }: { checked: boolean; label: string; desc?: string; right?: string; onChange: () => void }) {
    return (
        <label className="flex cursor-pointer items-start justify-between gap-3">
            <div className="flex items-start gap-3">
                <input type="radio" name="car_option" checked={checked} onChange={onChange} className="mt-1 h-4 w-4 border-neutral-300" />
                <div className="min-w-0">
                    <div className="text-sm text-neutral-800">{label}</div>
                    {desc ? <div className="mt-0.5 text-xs text-neutral-500">{desc}</div> : null}
                </div>
            </div>
            {right ? <span className="text-xs font-medium text-neutral-500">{right}</span> : null}
        </label>
    );
}
