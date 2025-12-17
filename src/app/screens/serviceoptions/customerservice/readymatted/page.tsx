"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { MapPin, ChevronLeft, X, Phone } from "lucide-react";
import { Button } from "@/app/components/ui/button";

type Props = {
  customerName?: string;
  phone?: string;
  address?: string;

  serviceName?: string;
  total?: number;

  itemTitle?: string;
  item1?: { name: string; price: number };
  item2?: { name: string; price: number };

  paymentLabel?: string;

  // status
  onCloseStatus?: () => void;

  // provider
  providerName?: string;
  providerMeta?: string; // e.g. "อายุ 22"
  providerPlate?: string; // ทะเบียนรถ
  providerCar?: string; // รุ่นรถ
  etaText?: string; // "00:00 น."
  providerAddress?: string;

  onCall?: () => void;
  onChat?: () => void;
};

function StepDot({ active }: { active: boolean }) {
  return (
    <span
      className={[
        "h-3 w-3 rounded-full",
        active ? "bg-green-500" : "bg-neutral-300",
      ].join(" ")}
    />
  );
}

function StepLine({ active }: { active: boolean }) {
  return <span className={["h-1 flex-1 rounded-full", active ? "bg-green-500" : "bg-neutral-300"].join(" ")} />;
}

export default function ServiceMatchedPage({
  customerName = "คุณ สมหญิง",
  phone = "01234567891",
  address = "โรงพยาบาล... 00/4 หมู่ 0 ละลม พุทพิน สุราษฎร์ฯ",

  serviceName = "Biv Ride",
  total = 400,

  itemTitle = "1 บริการ",
  item1 = { name: "ไปทำงาน", price: 200 },
  item2 = { name: "Quickie (20-40) นาที", price: 200 },

  paymentLabel = "promptpay",

  onCloseStatus,

  providerName = "สมชาย ใจดี",
  providerMeta = "อายุ 22",
  providerPlate = "ทะเบียนรถ : กข 1234",
  providerCar = "รถเก๋ง",
  etaText = "00:00 น.",
  providerAddress = "สุราษฎร์ฯ",
  onCall,
  onChat,
}: Props) {
  const steps = useMemo(
    () => [
      { label: "รอคนขับ", active: true },
      { label: "กำลังมาถึง", active: true },
      { label: "ให้บริการ", active: false },
      { label: "เสร็จสิ้น", active: false },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* top banner */}
      <div className="w-full bg-green-500 px-3 py-3">
        <p className="text-sm font-semibold text-white">เจอผู้ให้บริการแล้ว!</p>
      </div>

      {/* header row */}
      <div className="px-3 py-3 flex items-start gap-3">
        <Link href="#" className="shrink-0">
          <button
            type="button"
            className="h-10 w-10 rounded-full border border-black/10 bg-white flex items-center justify-center"
          >
            <ChevronLeft className="h-5 w-5 text-black" />
          </button>
        </Link>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-black">{customerName}</p>
            <p className="text-sm font-semibold text-black">{phone}</p>
          </div>

          <div className="mt-2 flex items-start gap-2 text-xs text-neutral-600">
            <MapPin className="mt-0.5 h-4 w-4" />
            <p className="leading-relaxed">{address}</p>
          </div>
        </div>
      </div>

      {/* order summary */}
      <div className="mx-3 rounded-md border border-black/10 bg-white">
        <div className="flex items-center justify-between px-3 py-3">
          <div>
            <p className="text-sm font-semibold text-black">{serviceName}</p>
            <p className="text-xs text-neutral-500">ยอดชำระทั้งหมด</p>
          </div>
          <p className="text-sm font-semibold text-black">{total}฿</p>
        </div>

        <div className="h-[1px] w-full bg-black/10" />

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

          <div className="mt-4 rounded-md border border-black/10 px-3 py-2">
            <div className="flex items-center justify-between">
              <p className="text-xs text-neutral-500">ช่องทางการชำระเงิน</p>
              <p className="text-xs font-semibold text-green-600">{paymentLabel}</p>
            </div>
          </div>
        </div>
      </div>

      {/* status card */}
      <div className="mx-3 mt-4 overflow-hidden rounded-md border border-black/10 bg-white">
        <div className="flex items-center justify-between bg-green-500 px-3 py-3">
          <p className="text-sm font-semibold text-black">สถานะการให้บริการของคุณ</p>

          <button
            type="button"
            className="h-8 w-8 rounded-full bg-white/30 flex items-center justify-center"
            onClick={onCloseStatus}
            aria-label="close"
          >
            <X className="h-4 w-4 text-black" />
          </button>
        </div>

        <div className="px-3 py-3">
          <p className="text-xs text-neutral-600">
            ผู้ดูแลกำลังเดินทางไปหาคุณ <br />
            คาดว่าจะถึงประมาณ 19:00-19:30 น.
          </p>

          {/* stepper */}
          <div className="mt-4">
            <div className="flex items-center gap-2">
              <StepDot active={steps[0].active} />
              <StepLine active={steps[1].active} />
              <StepDot active={steps[1].active} />
              <StepLine active={steps[2].active} />
              <StepDot active={steps[2].active} />
              <StepLine active={steps[3].active} />
              <StepDot active={steps[3].active} />
            </div>

            <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-600">
              <span>{steps[0].label}</span>
              <span>{steps[1].label}</span>
              <span>{steps[2].label}</span>
              <span>{steps[3].label}</span>
            </div>
          </div>

          {/* provider card */}
          <div className="mt-4 rounded-md border border-black/10 bg-white px-3 py-3">
            <div className="flex items-start gap-3">
              {/* avatar */}
              <div className="h-12 w-12 overflow-hidden rounded-md bg-neutral-200" />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-black">{providerName}</p>
                    <p className="text-xs text-neutral-600">{providerMeta}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-neutral-500">คาดว่าจะถึง</p>
                    <p className="text-sm font-semibold text-black">{etaText}</p>
                  </div>
                </div>

                <p className="mt-2 text-xs text-neutral-600">{providerCar}</p>
                <p className="text-xs text-neutral-600">{providerPlate}</p>

                <div className="mt-3 flex items-start gap-2 text-xs text-neutral-600">
                  <MapPin className="mt-0.5 h-4 w-4" />
                  <p className="leading-relaxed">{providerAddress}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* floating chat */}
      <button
        type="button"
        onClick={onChat}
        className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-green-500 shadow-lg flex items-center justify-center"
        aria-label="chat"
      >
        <span className="text-white text-xl">💬</span>
      </button>

      {/* bottom action (call) */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white px-3 py-4">
        <div className="mx-auto w-full max-w-md">
          <Button
            type="button"
            className="h-12 w-full rounded-lg bg-green-500 text-base font-medium hover:bg-green-600"
            onClick={onCall}
          >
            <Phone className="mr-2 h-4 w-4" />
            โทรหาผู้ดูแล
          </Button>
        </div>
      </div>
    </div>
  );
}
