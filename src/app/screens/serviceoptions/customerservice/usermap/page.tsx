"use client";

import React, { useMemo, useState } from "react";
import { X, Map, ArrowRight, Pencil, Plus } from "lucide-react";

type AddressItem = {
  id: string;
  label: string; // เช่น บ้าน, บริษัท
  name: string; // เช่น นายสมชาย ตะวัน
  phone: string; // 061...
  addressLine: string; // โรงพยาบาล... 00/4 หมู่...
};

export default function AddressSelectPage() {
  const [activeTab, setActiveTab] = useState<"my" | "location">("my");
  const [selectedId, setSelectedId] = useState<string>("a1");

  const myAddresses: AddressItem[] = useMemo(
    () => [
      {
        id: "a1",
        label: "บ้าน",
        name: "นายสมชาย คงดี",
        phone: "0611232231",
        addressLine: "โรงพยาบาล... 00/4 หมู่0 ซอย0 หมู่บ้าน สร้างสุข",
      },
      {
        id: "a2",
        label: "บ้าน",
        name: "นายสมชาย คงดี",
        phone: "0611232231",
        addressLine: "โรงพยาบาล... 00/4 หมู่0 ซอย0 หมู่บ้าน สร้างสุข",
      },
    ],
    []
  );

  const recentAddresses: AddressItem[] = useMemo(
    () => [
      {
        id: "r1",
        label: "บ้าน",
        name: "นายสมชาย คงดี",
        phone: "0611232231",
        addressLine: "โรงพยาบาล... 00/4 หมู่0 ซอย0 หมู่บ้าน สร้างสุข",
      },
      {
        id: "r2",
        label: "บ้าน",
        name: "นายสมชาย คงดี",
        phone: "0611232231",
        addressLine: "โรงพยาบาล... 00/4 หมู่0 ซอย0 หมู่บ้าน สร้างสุข",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
        <div className="mx-auto flex h-14 w-full max-w-md items-center justify-between px-4">
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full hover:bg-neutral-100 active:scale-[0.98]"
            onClick={() => history.back()}
            aria-label="close"
          >
            <X className="h-5 w-5 text-neutral-800" />
          </button>

          <div className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
            <Map className="h-4 w-4 text-emerald-600" />
            <span>ค้นหาที่อยู่ในแผนที่</span>
          </div>

          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full bg-neutral-900 text-white active:scale-[0.98]"
            aria-label="next"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="mx-auto w-full max-w-md px-4 pb-3">
          <div className="grid grid-cols-2 overflow-hidden rounded-full bg-neutral-100 p-1">
            <button
              type="button"
              onClick={() => setActiveTab("my")}
              className={[
                "h-9 rounded-full text-sm font-medium transition",
                activeTab === "my"
                  ? "bg-white text-neutral-900 shadow-sm"
                  : "text-neutral-500",
              ].join(" ")}
            >
              ที่อยู่ของฉัน
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("location")}
              className={[
                "h-9 rounded-full text-sm font-medium transition",
                activeTab === "location"
                  ? "bg-white text-neutral-900 shadow-sm"
                  : "text-neutral-500",
              ].join(" ")}
            >
              ตำแหน่ง
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto w-full max-w-md px-4 pb-8 pt-4">
        {/* My addresses section */}
        <SectionHeader
          title="ที่อยู่ของฉัน"
          actionText="ดูทั้งหมด"
          onAction={() => console.log("view all")}
          hidden={activeTab !== "my"}
        />

        {activeTab === "my" && (
          <div className="space-y-3">
            {myAddresses.map((item) => (
              <AddressCard
                key={item.id}
                item={item}
                onEdit={() => console.log("edit", item.id)}
              />
            ))}

            <button
              type="button"
              className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 text-sm font-semibold text-white active:scale-[0.99]"
              onClick={() => console.log("add new address")}
            >
              <Plus className="h-4 w-4" />
              เพิ่มที่อยู่ใหม่
            </button>
          </div>
        )}

        {/* Recent section */}
        <div className="mt-6">
          <div className="mb-2 text-sm font-semibold text-neutral-900">
            ที่อยู่ที่เคยใช้
          </div>

          <div className="space-y-3">
            {recentAddresses.map((item) => (
              <SelectableAddressRow
                key={item.id}
                item={item}
                selected={selectedId === item.id}
                onSelect={() => setSelectedId(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Small UI pieces ---------- */

function SectionHeader({
  title,
  actionText,
  onAction,
  hidden,
}: {
  title: string;
  actionText?: string;
  onAction?: () => void;
  hidden?: boolean;
}) {
  if (hidden) return null;
  return (
    <div className="mb-2 flex items-center justify-between">
      <div className="text-sm font-semibold text-neutral-900">{title}</div>
      {actionText ? (
        <button
          type="button"
          onClick={onAction}
          className="text-xs font-medium text-emerald-600"
        >
          {actionText}
        </button>
      ) : null}
    </div>
  );
}

function AddressCard({
  item,
  onEdit,
}: {
  item: {
    label: string;
    name: string;
    phone: string;
    addressLine: string;
  };
  onEdit?: () => void;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-xs font-semibold text-neutral-900">
            ถนนสวยดี {item.label}
          </div>
          <div className="mt-2 text-xs text-neutral-900">{item.name}</div>
          <div className="mt-1 text-xs text-neutral-900">{item.phone}</div>
          <div className="mt-1 text-xs text-neutral-500 line-clamp-2">
            {item.addressLine}
          </div>
        </div>

        <button
          type="button"
          onClick={onEdit}
          className="grid h-9 w-9 place-items-center rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50"
          aria-label="edit"
        >
          <Pencil className="h-4 w-4 text-neutral-700" />
        </button>
      </div>
    </div>
  );
}

function SelectableAddressRow({
  item,
  selected,
  onSelect,
}: {
  item: AddressItem;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={[
        "w-full rounded-2xl border p-4 text-left transition",
        selected ? "border-emerald-300 bg-emerald-50/40" : "border-neutral-200 bg-white",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-xs font-semibold text-neutral-900">
            ถนนสวยดี {item.label}
          </div>
          <div className="mt-2 text-xs text-neutral-900">{item.name}</div>
          <div className="mt-1 text-xs text-neutral-900">{item.phone}</div>
          <div className="mt-1 text-xs text-neutral-500 line-clamp-2">
            {item.addressLine}
          </div>
        </div>

        <div
          className={[
            "mt-1 h-4 w-4 rounded-full border",
            selected ? "border-emerald-500 bg-emerald-500" : "border-neutral-300 bg-white",
          ].join(" ")}
          aria-hidden
        />
      </div>
    </button>
  );
}
