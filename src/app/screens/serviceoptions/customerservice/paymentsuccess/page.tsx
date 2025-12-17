'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';

type Props = {
    // ถ้าอยากรับค่าจากหน้าอื่น
    customerName?: string;
    phone?: string;
    address?: string;

    serviceName?: string; // Biv Ride
    subTitle?: string; // ยอดชำระทั้งหมด
    total?: number;

    itemTitle?: string; // 1 บริการ
    item1?: { name: string; price: number };
    item2?: { name: string; price: number };

    paymentLabel?: string; // promptpay
    initialSeconds?: number; // 10
    onCancel?: () => void;
};

function formatMMSS(sec: number) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    const mm = String(m).padStart(2, '0');
    const ss = String(s).padStart(2, '0');
    return `${mm}:${ss}`;
}

export default function ServiceWaitingPage({
    customerName = 'คุณ สมหญิง',
    phone = '01234567891',
    address = 'โรงพยาบาล... 00/4 หมู่ 0 ละลม พุทพิน สุราษฎร์ฯ',
    serviceName = 'Biv Ride',
    subTitle = 'ยอดชำระทั้งหมด',
    total = 400,

    itemTitle = '1 บริการ',
    item1 = { name: 'ไปทำงาน', price: 200 },
    item2 = { name: 'Quickie (20-40) นาที', price: 200 },

    paymentLabel = 'promptpay',
    initialSeconds = 10,
    onCancel,
}: Props) {
    const [secLeft, setSecLeft] = useState(initialSeconds);

    useEffect(() => {
        if (secLeft <= 0) return;
        const t = setInterval(() => setSecLeft((s) => s - 1), 1000);
        return () => clearInterval(t);
    }, [secLeft]);

    const timeText = useMemo(() => formatMMSS(secLeft), [secLeft]);

    return (
        <div className="min-h-screen bg-white">
            {/* top banner */}
            <div className="w-full bg-green-500 px-3 py-3">
                <p className="text-sm font-semibold text-white">กำลังหาผู้ให้บริการ....</p>
            </div>

            <div className="container px-3 pb-10">
                {/* info card */}
                <div className="mt-3 rounded-md border border-black/10 bg-white px-3 py-3">
                    <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold text-black">{customerName}</p>
                        <p className="text-sm font-semibold text-black">{phone}</p>
                    </div>

                    <div className="mt-2 flex items-start gap-2 text-xs text-neutral-600">
                        <MapPin className="mt-0.5 h-4 w-4" />
                        <p className="leading-relaxed">{address}</p>
                    </div>
                </div>

                {/* order summary */}
                <div className="mt-4 rounded-md border border-black/10 bg-white">
                    {/* header line */}
                    <div className="flex items-center justify-between px-3 py-3">
                        <div>
                            <p className="text-sm font-semibold text-black">{serviceName}</p>
                            <p className="text-xs text-neutral-500">{subTitle}</p>
                        </div>
                        <p className="text-sm font-semibold text-black">{total}฿</p>
                    </div>

                    <div className="h-[1px] w-full bg-black/10" />

                    {/* items */}
                    <div className="px-3 py-3">
                        <p className="text-sm font-semibold text-black">{itemTitle}</p>

                        <div className="mt-2 space-y-2">
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-black">{item1.name}</p>
                                <p className="text-sm font-semibold text-black">{item1.price}฿</p>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-sm text-black">{item2.name}</p>
                                <p className="text-sm font-semibold text-black">{item2.price}฿</p>
                            </div>
                        </div>

                        {/* payment row */}
                        <div className="mt-4 rounded-md border border-black/10 px-3 py-2">
                            <div className="flex items-center justify-between">
                                <p className="text-xs text-neutral-500">ช่องทางการชำระเงิน</p>
                                <p className="text-xs font-semibold text-green-600">{paymentLabel}</p>
                            </div>
                        </div>

                        {/* actions */}
                        <div className="mt-4 space-y-3">
                            <Link href="/screens/serviceoptions/customerservice/readymatted">
                                <Button type="button" className="h-12 w-full rounded-md bg-green-500 text-white hover:bg-green-600">
                                    กำลังแมตช์.. ({timeText})
                                </Button>
                            </Link>
                            <Button type="button" variant="destructive" className="h-12 w-full rounded-md" onClick={onCancel}>
                                ยกเลิก
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
