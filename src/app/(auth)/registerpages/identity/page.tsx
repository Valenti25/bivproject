'use client';

import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FieldDescription, FieldLabel } from '@/components/ui/field';
import Image from 'next/image';
import { Progress } from '@/components/ui/progress';
import { ArrowLeftIcon } from 'lucide-react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
type FormType = {
  idCardFront: FileList | null;
  idCardFront2: FileList | null;
  licenseType: string;
  agency1: string;
  agency2: string;
  agency3: string;
  selfieWithId: FileList | null;
};

export default function RegisterServicePage() {
  const { register, control } = useForm<FormType>({
    defaultValues: {
      idCardFront: null,
      idCardFront2: null,
      licenseType: '',
      agency1: '',
      agency2: '',
      agency3: '',
      selfieWithId: null,
    },
  });

  return (
    <div className="container flex flex-col justify-center px-3 pb-24">
      <div className="mb-3 mt-3 flex w-full items-center justify-between">
        <Link href="/landingpage">
          <Button type="button" className="h-[40px] w-[40px] shrink-0 cursor-pointer rounded-full bg-black text-white" onClick={() => history.back()}>
            <ArrowLeftIcon />
          </Button>
        </Link>
        <Progress className="mx-3 h-3" value={33} />
        <span>1/4</span>
      </div>

      <form method="post" encType="multipart/form-data" className="space-y-8">
        <div>
          <FieldLabel className="text-base">รูปบัตรประชาชน</FieldLabel>
          <FieldDescription className='mb-4'>โปรดแนบไฟล์บัตรประชาชนและรูปถ่ายคู่บัตรเพื่อยืนยันตัวตน</FieldDescription>
          <Image src="/images/register-serviceimages/user_id_card.png" width={400} height={400} className="rounded-sm" alt="" />
          <InputGroup className="mt-1 flex h-12 w-full items-center rounded-sm text-[#333333]">
            <InputGroupInput type="file" aria-label="อัปโหลดบัตรประชาชน" className="flex-1" {...register('idCardFront')} />
            <InputGroupAddon />
          </InputGroup>
        </div>

        <div>
          <FieldLabel className="text-base">รูปบัตรประชาชน</FieldLabel>
          <FieldDescription className='mb-4'>โปรดแนบไฟล์บัตรประชาชนและรูปถ่ายคู่บัตรเพื่อยืนยันตัวตน</FieldDescription>
          <Image src="/images/register-serviceimages/user_id_card.png" width={400} height={400} className="rounded-sm" alt="" />
          <InputGroup className="mt-1 flex h-12 w-full items-center rounded-sm text-[#333333]">
            <InputGroupInput type="file" aria-label="อัปโหลดบัตรประชาชน (ชุดที่ 2)" className="flex-1" {...register('idCardFront2')} />
            <InputGroupAddon />
          </InputGroup>
        </div>

        <div className="my-3 flex items-center justify-center">
          <span className="h-[1px] w-full bg-[#62748e]/20" />
          <h1 className="w-full px-3">ข้อมูลใบอนุญาติ</h1>
          <span className="h-[1px] w-full bg-[#62748e]/20" />
        </div>

        <div className="w-full space-y-3">
          <FieldLabel className="text-base">ประเภทใบอนุญาต</FieldLabel>
          <Controller
            name="licenseType"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-full rounded-sm px-3 py-5.5">
                  <SelectValue />
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
            )}
          />

          <FieldLabel className="text-base">หน่วยงานที่ออกใบอนุญาต</FieldLabel>
          <InputGroup className="flex h-12 items-center text-[#333333]">
            <InputGroupInput type="search" placeholder="หน่วยงานที่ออกใบอนุญาต" {...register('agency1')} />
            <InputGroupAddon />
          </InputGroup>

          <FieldLabel className="text-base">หน่วยงานที่ออกใบอนุญาต</FieldLabel>
          <InputGroup className="flex h-12 items-center text-[#333333]">
            <InputGroupInput type="search" placeholder="หน่วยงานที่ออกใบอนุญาต" {...register('agency2')} />
            <InputGroupAddon />
          </InputGroup>

          <FieldLabel className="text-base">หน่วยงานที่ออกใบอนุญาต</FieldLabel>
          <InputGroup className="flex h-12 items-center text-[#333333]">
            <InputGroupInput type="search" placeholder="หน่วยงานที่ออกใบอนุญาต" {...register('agency3')} />
            <InputGroupAddon />
          </InputGroup>

          <FieldLabel className="text-base">รูปถ่ายคู่บัตรประชาชน</FieldLabel>
          <FieldDescription>โปรดถือบัตรประชาชนของตนเองและถ่ายให้เห็นรายละเอียดชัดเจน</FieldDescription>
          <Image src="/images/register-serviceimages/user_id_card.png" width={400} height={400} className="rounded-sm" alt="" />
          <InputGroup className="mt-1 flex h-12 w-full items-center rounded-sm text-[#333333]">
            <InputGroupInput type="file" aria-label="อัปโหลดรูปคู่บัตร" className="flex-1" {...register('selfieWithId')} />
            <InputGroupAddon />
          </InputGroup>
        </div>
        <Link href="/registerpages/servicearea">
          <div className="fixed inset-x-0 py-6 items-center justify-center bottom-0 z-50 border-black/5 bg-white border-t-black/10 border-t px-3 ">
            <Button type="submit" className="h-12 bg-green-500 w-full cursor-pointer hover:bg-green-600 rounded-lg text-base font-medium shadow-lg transition-all">
              Next
            </Button>
          </div>
        </Link>

      </form>
    </div>
  );
}
