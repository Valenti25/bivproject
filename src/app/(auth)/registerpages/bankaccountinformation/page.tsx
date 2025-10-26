import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
// import { z } from "zod";
// import { useForm } from "react-hook-form"
import {
  // Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import Image from "next/image"
// import { useState } from "react"
export const metadata = {
  robots: { index: false, follow: true },
};

export default function RegisterServicePage() {
  return (
    <div className="container px-3 flex flex-col justify-center">

      <div className="mb-3 flex w-full items-center justify-between">
        <div className="flex justify-start">
          <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-amber-400 text-black">d</div>
        </div>
        <div className="mx-2 flex h-4 w-full items-center justify-center rounded-full border bg-yellow-200">
          <div className="text-black">wwwwwwwww</div>
        </div>
        <span className="bg-amber-700">1/2</span>
      </div>

      {/* <form> */}
      <div>
        <FieldLabel className='text-base'>รูปบัตรประชาชน</FieldLabel>
        <FieldDescription>โปรดแนบไฟล์บัตรประชาชนและรูปถ่ายคู่บัตรเพื่อยืนยันตัวตน</FieldDescription>
        <Image src="/images/register-serviceimages/user_id_card.png" width={400} height={400} className="rounded-sm" alt="" />
        <InputGroup className="mt-1 flex items-center rounded-sm text-[#333333] w-full">
          <InputGroupInput type="file" placeholder="จังหวัด" aria-label="ค้นหา" className="flex-1" />
          <InputGroupAddon />
        </InputGroup>
      </div>

      <div>
        <FieldLabel className='text-base'>รูปบัตรประชาชน</FieldLabel>
        <FieldDescription>โปรดแนบไฟล์บัตรประชาชนและรูปถ่ายคู่บัตรเพื่อยืนยันตัวตน</FieldDescription>
        <Image src="/images/register-serviceimages/user_id_card.png" width={400} height={400} className="rounded-sm" alt="" />
        <InputGroup className="mt-1 flex items-center rounded-sm text-[#333333] w-full"> {/* CHANGED */}
          <InputGroupInput type="file" placeholder="จังหวัด" aria-label="ค้นหา" className="flex-1" /> {/* CHANGED */}
          <InputGroupAddon />
        </InputGroup>
      </div>

      <div className="flex items-center my-3 justify-center">
        <span className="h-[1px] w-full bg-[#62748e]/20" />
        <h1 className="mx-3 w-full">ข้อมูลใบอนุญาติ</h1>
        <span className="h-[1px] w-full bg-[#62748e]/20" />
      </div>

      <div className="w-full space-y-3">
        <Select>
          <SelectTrigger className="w-full rounded-sm">
            <SelectValue placeholder="เลือกประเภทใบอนุญาต" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="engineering">Engineering</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
            <SelectItem value="sales">Sales</SelectItem>
            <SelectItem value="support">Customer Support</SelectItem>
            <SelectItem value="hr">Human Resources</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
            <SelectItem value="operations">Operations</SelectItem>
          </SelectContent>
        </Select>

        <InputGroup className="flex items-center text-[#333333]">
          <InputGroupInput type="search" placeholder="หน่วยงานที่ออกใบอนุญาต" />
          <InputGroupAddon />
        </InputGroup>

        <InputGroup className="flex items-center text-[#333333]">
          <InputGroupInput type="search" placeholder="หน่วยงานที่ออกใบอนุญาต" />
          <InputGroupAddon />
        </InputGroup>

        <InputGroup className="flex items-center text-[#333333]">
          <InputGroupInput type="search" placeholder="หน่วยงานที่ออกใบอนุญาต" />
          <InputGroupAddon />
        </InputGroup>

        <FieldLabel className='text-base'>รูปถ่ายคู่บัตรประชาชน</FieldLabel>
        <FieldDescription>โปรดถือบัตรประชาชนของตนเองและถ่ายให้เห็นรายละเอียดชัดเจน</FieldDescription>
        <Image src="/images/register-serviceimages/user_id_card.png" width={400} height={400} className="rounded-sm" alt="" />
        <InputGroup className="mt-1 flex items-center rounded-sm text-[#333333] w-full">
          <InputGroupInput type="file" placeholder="จังหวัด" aria-label="ค้นหา" className="flex-1" />
          <InputGroupAddon />
        </InputGroup>
      </div>
      {/* </form> */}
    </div>
  );
}
