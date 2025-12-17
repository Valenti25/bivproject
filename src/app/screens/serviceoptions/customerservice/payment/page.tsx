'use client';

import React, { useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { MapPin, ChevronLeft, Clock3 } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/app/components/ui/button';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/app/components/ui/input-group';
import { FieldLabel } from '@/app/components/ui/field';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';

type FormType = {
    note: string;
    serviceKey: 'biv-ride';
    timeSlot: 'quickie' | 'express';

    paymentMethod: 'promptpay' | 'truemoney' | 'krungthai' | 'thai-phaniat';
};

const SERVICE_PRICE: Record<FormType['timeSlot'], number> = {
    quickie: 200,
    express: 400,
};

export default function Payment() {
    const { register, control, watch, handleSubmit } = useForm<FormType>({
        defaultValues: {
            note: '',
            serviceKey: 'biv-ride',
            timeSlot: 'quickie',
            paymentMethod: 'promptpay',
        },
    });

    const timeSlot = watch('timeSlot');
    const total = useMemo(() => SERVICE_PRICE[timeSlot], [timeSlot]);

    const onSubmit = (data: FormType) => {
        console.log('submit:', { ...data, total });
    };

    return (
        <div className="min-h-screen bg-white pb-24">
            {/* Header */}
            <div className="sticky top-0 z-40 bg-white">
                <div className="flex items-center gap-3 px-3 py-3">
                    <Link href="#" className="shrink-0">
                        <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white">
                            <ChevronLeft className="h-5 w-5 text-black" />
                        </button>
                    </Link>

                    <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-black">ที่อยู่ของคุณ</p>
                        <div className="mt-1 flex items-center gap-2 text-xs text-neutral-600">
                            <MapPin className="h-4 w-4" />
                            <p className="truncate">โรงพยาบาล, 004 หมู่ 0 ตำบล..., อำเภอ..., จังหวัด...</p>
                        </div>
                    </div>
                </div>

                {/* Yellow bar */}
                <div className="bg-[#F3D76B] px-3 py-2">
                    <p className="text-center text-sm font-semibold text-black">โปรดดูเพื่อความถูกต้อง</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="px-3">
                {/* Note */}
                <div className="mt-4 space-y-2">
                    <FieldLabel className="text-sm text-black">ความต้องการพิเศษ</FieldLabel>
                    <p className="text-xs text-neutral-500">ระบุข้อมูลเพิ่มเติม เช่น โรคประจำตัว/ความต้องการพิเศษ การช่วยเหลือระหว่างทาง</p>

                    <InputGroup className="flex min-h-[52px] items-center rounded-md text-[#333333]">
                        <InputGroupInput placeholder="เช่น ขอให้ช่วยพยุงขึ้นรถ / มีสัมภาระ / แพ้ยา..." className="min-h-[52px]" {...register('note')} />
                        <InputGroupAddon />
                    </InputGroup>
                </div>

                {/* Service card */}
                <div className="mt-5 space-y-2">
                    <p className="text-sm font-semibold text-black">บริการที่เลือก</p>

                    <div className="overflow-hidden rounded-xl border border-black/10 bg-white">
                        <div className="relative h-[110px] w-full bg-neutral-100">
                            {/* แทนรูปด้วย div ก่อน (จะใส่ next/image ก็ได้) */}
                            <div className="absolute inset-0 bg-neutral-200" />
                            <div className="absolute inset-0 bg-black/35" />

                            <div className="absolute bottom-3 left-3">
                                <p className="text-sm font-semibold text-white">Biv Ride</p>
                            </div>

                            <div className="absolute right-3 bottom-3">
                                <p className="text-sm font-semibold text-white">200฿</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Time slot */}
                <div className="mt-5 space-y-3">
                    <p className="text-sm font-semibold text-black">ช่วงเวลาบริการที่เลือก</p>

                    <div className="space-y-2">
                        <label className="flex items-center justify-between rounded-md border border-black/10 px-3 py-3">
                            <div className="flex items-center gap-2">
                                <Clock3 className="h-4 w-4 text-neutral-700" />
                                <div>
                                    <p className="text-sm font-medium text-black">Quickie (20-40) นาที</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="text-sm font-semibold text-black">200฿</p>
                                <input type="radio" value="quickie" {...register('timeSlot')} className="h-4 w-4" />
                            </div>
                        </label>

                        <label className="flex items-center justify-between rounded-md border border-black/10 px-3 py-3">
                            <div className="flex items-center gap-2">
                                <Clock3 className="h-4 w-4 text-neutral-700" />
                                <div>
                                    <p className="text-sm font-medium text-black">Express (เร็วกว่า)</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="text-sm font-semibold text-black">400฿</p>
                                <input type="radio" value="express" {...register('timeSlot')} className="h-4 w-4" />
                            </div>
                        </label>
                    </div>
                </div>

                {/* Payment */}
                <div className="mt-5 space-y-2">
                    <p className="text-sm font-semibold text-black">เลือกวิธีชำระเงิน</p>

                    <Controller
                        name="paymentMethod"
                        control={control}
                        render={({ field }) => (
                            <Select value={field.value} onValueChange={field.onChange}>
                                <SelectTrigger className="h-12 w-full rounded-md px-3">
                                    <SelectValue placeholder="พร้อมเพย์" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="promptpay">พร้อมเพย์</SelectItem>
                                    <SelectItem value="truemoney">TrueMoney</SelectItem>
                                    <SelectItem value="krungthai">กรุงไทย</SelectItem>
                                    <SelectItem value="thai-phaniat">ไทยพาณิชย์</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                </div>

                {/* Bottom bar */}
                <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white px-3 py-4">
                    <div className="mx-auto flex w-full max-w-md items-center gap-3">
                        <div className="flex-1">
                            <p className="text-xs text-neutral-500">ยอดชำระ</p>
                            <p className="text-lg font-semibold text-black">{total}฿</p>
                        </div>
                        <Link href="/screens/serviceoptions/customerservice/paymentsuccess">
                            <Button className="h-12 flex-1 rounded-lg bg-green-500 text-base font-medium hover:bg-green-600">
                                ยืนยันการสั่งซื้อ
                            </Button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
