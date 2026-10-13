"use client";

import { useState } from "react";
import {
  BriefcaseBusiness,
  FileDown,
  Folder,
  Mail,
  Plus,
  Settings,
  UserRound,
} from "lucide-react";

const menuItems = [
  { label: "About me", icon: UserRound },
  { label: "Projects", icon: Folder },
  { label: "Skills & tech", icon: Settings },
  { label: "Experience", icon: BriefcaseBusiness },
  { label: "Contact", icon: Mail },
  { label: "Download resume", icon: FileDown },
];

export default function ProfileSidebarCard() {
  const [selectedItem, setSelectedItem] = useState("");
  const [message, setMessage] = useState("");

  return (
    <aside className="h-[564px] w-[432px] cursor-auto rounded-2xl bg-[#121212] px-7 pt-8 pb-12 text-[#f4f4f5] shadow-2xl [&_button]:cursor-pointer">
      <button
        type="button"
        onClick={() => setMessage("Shubham Raj profile selected")}
        className="flex w-full items-center gap-4 text-left rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        aria-label="Select Shubham Raj profile"
      >
        <span className="flex size-[64px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-slate-400 via-slate-600 to-slate-800 text-xl font-semibold text-white ring-2 ring-white/10">
          SR
        </span>
        <span className="flex flex-col">
          <span className="text-[21px] leading-7">Shubham Raj</span>
          <span className="text-[16px] leading-6 text-[#9296a2]">@shubhamraj82</span>
        </span>
      </button>

      <button
        type="button"
        onClick={() => setMessage("Portfolio selected")}
        className="mt-7 flex h-[64px] w-full items-center justify-center gap-3 rounded-xl bg-[#1687ff] text-[20px] font-medium text-white transition-colors hover:bg-[#3698ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white uppercase"
      >
        <Plus aria-hidden="true" className="size-6 " />
        View portfolio
      </button>

      <nav aria-label="Portfolio sections" className="mt-5 space-y-1">
        {menuItems.map(({ label, icon: Icon }) => (
          <button
            key={label}
            type="button"
            aria-pressed={selectedItem === label}
            onClick={() => {
              setSelectedItem(label);
              setMessage(`${label} selected`);
            }}
            className={`flex min-h-[44px] w-full items-center gap-5 rounded-md border px-1 text-left text-[18px] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${selectedItem === label ? "border-white/35 bg-white/[0.08] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_3px_0_rgba(0,0,0,0.55),0_5px_12px_rgba(0,0,0,0.3)]" : "border-transparent text-[#dedede] hover:text-white"}`}
          >
            <Icon aria-hidden="true" className="size-7 shrink-0 stroke-[1.8]" />
            <span>{label}</span>
          </button>
        ))}
      </nav>
      <p className="sr-only" aria-live="polite">{message}</p>
    </aside>
  );
}
