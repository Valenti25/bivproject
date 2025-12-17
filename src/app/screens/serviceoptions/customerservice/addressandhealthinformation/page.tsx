'use client';

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/app/components/ui/input-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { FieldDescription, FieldLabel } from '@/app/components/ui/field';
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';

type FormType = {
    fullName: string;
    phone: string;
    address: string;

    birthDate: string; // yyyy-mm-dd
    bloodGroup: string;

    chronicDisease: string;
    regularMeds: string;
    foodAllergy: string;
    otherAllergy: string;

    emergencyPhone: string;
    primaryHospital: string;

    consent: boolean;
};

export default function ServiceOptionsCustomerService() {
    const { register, control, handleSubmit, watch, setValue } = useForm<FormType>({
        defaultValues: {
            fullName: '',
            phone: '',
            address: '',

            birthDate: '',
            bloodGroup: '',

            chronicDisease: '',
            regularMeds: '',
            foodAllergy: '',
            otherAllergy: '',

            emergencyPhone: '',
            primaryHospital: '',

            consent: false,
        },
    });

    const consent = watch('consent');

    const onSubmit = (data: FormType) => {
        console.log('submit:', data);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* top bar */}
            <div className="sticky top-0 z-40 w-full bg-[#4b4b4b] px-3 py-3">
                <p className="text-center text-sm font-medium text-white">ที่อยู่และข้อมูลสุขภาพ</p>
            </div>

            <div className="container flex flex-col px-3 pb-28">
                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-full max-w-md space-y-6 py-4">
                    {/* ===== ที่อยู่ติดต่อ ===== */}
                    <div className="space-y-3">
                        <h2 className="text-center text-base font-semibold text-black">ที่อยู่ติดต่อ</h2>

                        <div className="space-y-2">
                            <FieldLabel className="text-sm text-black">ชื่อ-นามสกุล</FieldLabel>
                            <InputGroup className="flex h-12 items-center rounded-md text-[#333333]">
                                <InputGroupInput placeholder="นายสมมติ คนดี" {...register('fullName')} />
                                <InputGroupAddon />
                            </InputGroup>
                        </div>

                        <div className="space-y-2">
                            <FieldLabel className="text-sm text-black">เบอร์โทรศัพท์</FieldLabel>
                            <InputGroup className="flex h-12 items-center rounded-md text-[#333333]">
                                <InputGroupInput inputMode="numeric" placeholder="0611232231" {...register('phone')} />
                                <InputGroupAddon />
                            </InputGroup>
                        </div>

                        <div className="space-y-2">
                            <FieldLabel className="text-sm text-black">ที่อยู่</FieldLabel>
                            <InputGroup className="flex h-12 items-center rounded-md text-[#333333]">
                                <InputGroupInput placeholder="โรงพยาบาล, บ้านเลขที่, ถนน, ตำบล, อำเภอ, จังหวัด" {...register('address')} />
                                <InputGroupAddon />
                            </InputGroup>
                        </div>
                    </div>

                    {/* divider */}
                    <div className="flex items-center gap-3 py-2">
                        <span className="h-[1px] w-full bg-black/10" />
                        <p className="shrink-0 text-sm font-semibold text-black">ข้อมูลสุขภาพ</p>
                        <span className="h-[1px] w-full bg-black/10" />
                    </div>

                    <p className="text-xs text-neutral-500">*ข้อมูลนี้ใช้เพื่อประกอบการแจ้งเตือนกรณีเกิดเหตุฉุกเฉิน</p>

                    {/* ===== ข้อมูลสุขภาพ ===== */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <FieldLabel className="text-sm text-black">วัน/เดือน/ปีเกิด</FieldLabel>
                            <FieldDescription className="text-xs">เลือกวันเกิดของคุณ</FieldDescription>
                            <InputGroup className="flex h-12 items-center rounded-md text-[#333333]">
                                <InputGroupInput type="date" {...register('birthDate')} />
                                <InputGroupAddon />
                            </InputGroup>
                        </div>

                        <div className="space-y-2">
                            <FieldLabel className="text-sm text-black">กรุ๊ปเลือด</FieldLabel>
                            <Controller
                                name="bloodGroup"
                                control={control}
                                render={({ field }) => (
                                    <Select value={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger className="h-12 w-full rounded-md px-3">
                                            <SelectValue placeholder="เลือกกรุ๊ปเลือด" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="A">A</SelectItem>
                                            <SelectItem value="B">B</SelectItem>
                                            <SelectItem value="AB">AB</SelectItem>
                                            <SelectItem value="O">O</SelectItem>
                                            <SelectItem value="unknown">ไม่ทราบ</SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                        </div>

                        <div className="space-y-2">
                            <FieldLabel className="text-sm text-black">โรคประจำตัว</FieldLabel>
                            <InputGroup className="flex h-12 items-center rounded-md text-[#333333]">
                                <InputGroupInput placeholder="ระบุโรคประจำตัว (ถ้ามี)" {...register('chronicDisease')} />
                                <InputGroupAddon />
                            </InputGroup>
                        </div>

                        <div className="space-y-2">
                            <FieldLabel className="text-sm text-black">ยาที่ใช้ประจำ</FieldLabel>
                            <InputGroup className="flex h-12 items-center rounded-md text-[#333333]">
                                <InputGroupInput placeholder="ระบุยาที่ใช้ประจำ (ถ้ามี)" {...register('regularMeds')} />
                                <InputGroupAddon />
                            </InputGroup>
                        </div>

                        <div className="space-y-2">
                            <FieldLabel className="text-sm text-black">อาหารที่แพ้</FieldLabel>
                            <InputGroup className="flex h-12 items-center rounded-md text-[#333333]">
                                <InputGroupInput placeholder="ระบุอาหารที่แพ้ (ถ้ามี)" {...register('foodAllergy')} />
                                <InputGroupAddon />
                            </InputGroup>
                        </div>

                        <div className="space-y-2">
                            <FieldLabel className="text-sm text-black">แพ้อะไรเพิ่มเติม</FieldLabel>
                            <InputGroup className="flex h-12 items-center rounded-md text-[#333333]">
                                <InputGroupInput placeholder="เช่น ยา, เกสร, ฝุ่น ฯลฯ" {...register('otherAllergy')} />
                                <InputGroupAddon />
                            </InputGroup>
                        </div>

                        <div className="space-y-2">
                            <FieldLabel className="text-sm text-black">เบอร์ฉุกเฉิน</FieldLabel>
                            <InputGroup className="flex h-12 items-center rounded-md text-[#333333]">
                                <InputGroupInput inputMode="numeric" placeholder="ระบุเบอร์ติดต่อฉุกเฉิน" {...register('emergencyPhone')} />
                                <InputGroupAddon />
                            </InputGroup>
                        </div>

                        <div className="space-y-2">
                            <FieldLabel className="text-sm text-black">โรงพยาบาลประจำ (ถ้ามี)</FieldLabel>
                            <InputGroup className="flex h-12 items-center rounded-md text-[#333333]">
                                <InputGroupInput placeholder="ระบุโรงพยาบาลที่รักษาประจำ" {...register('primaryHospital')} />
                                <InputGroupAddon />
                            </InputGroup>
                        </div>

                        {/* consent */}
                        <label className="flex items-start gap-2 rounded-md border border-black/10 bg-white px-3 py-3">
                            <input type="checkbox" className="mt-1 h-4 w-4" checked={consent} onChange={(e) => setValue('consent', e.target.checked)} />
                            <span className="text-xs text-neutral-600">ข้าพเจ้ายินยอมให้ Biv จัดเก็บและใช้ข้อมูลส่วนบุคคลเพื่อการให้บริการ ตามนโยบายความเป็นส่วนตัว</span>
                        </label>
                    </div>

                    {/* bottom button */}
                    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white px-3 py-5">
                        <div className="mx-auto w-full max-w-md">
                            <Link href="/screens/serviceoptions/customerservice/payment">
                                <Button
                                    type="submit"
                                    disabled={!consent}
                                    className="h-12 w-full rounded-lg bg-green-500 text-base font-medium hover:bg-green-600 disabled:opacity-50"
                                >
                                    ยืนยัน
                                </Button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
