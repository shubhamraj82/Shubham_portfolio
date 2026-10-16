"use client";

import { useState } from "react";
import { FileDown, Plus, UserRound } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  GithubIcon,
  InstagramIcon,
  Linkedin01Icon,
  TwitterIcon,
} from "@hugeicons/core-free-icons";
import AnimatedList from "./AnimatedList";

const menuItems = [
  { label: "About me", icon: UserRound },
  { label: "GitHub", brandIcon: GithubIcon },
  { label: "Instagram", brandIcon: InstagramIcon },
  { label: "Twitter", brandIcon: TwitterIcon },
  { label: "LinkedIn", brandIcon: Linkedin01Icon },
  { label: "Download resume", icon: FileDown },
];

export default function ProfileSidebarCard() {
  const [message, setMessage] = useState("");

  return (
    <aside className="h-[564px] w-[432px] cursor-auto rounded-2xl border-2 border-sky-300/70 bg-[#171717]/65 px-7 pt-8 pb-12 text-[#f4f4f5] shadow-[0_5px_0_rgba(37,99,235,0.55),0_18px_40px_rgba(2,132,199,0.28),inset_0_1px_0_rgba(255,255,255,0.28)] backdrop-blur-xl [&_button]:cursor-pointer">
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
          <span className="text-[16px] leading-6 text-[#9296a2]">
            @shubhamraj82
          </span>
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

      <nav aria-label="Portfolio sections" className="mt-5">
        <AnimatedList
          items={menuItems}
          onItemSelect={(item) => {
            setMessage(`${item.label} selected`);
          }}
          renderItem={(item, _index, selected) => {
            const Icon = "icon" in item ? item.icon : null;
            return (
              <>
                {item.brandIcon ? (
                  <HugeiconsIcon
                    icon={item.brandIcon}
                    aria-hidden="true"
                    className="size-6 shrink-0"
                    size={24}
                    strokeWidth={1.8}
                  />
                ) : Icon ? (
                  <Icon
                    aria-hidden="true"
                    className="size-6 shrink-0 stroke-[1.8]"
                  />
                ) : null}
                <span
                  className={`text-[17px] ${selected ? "text-white" : "text-[#dedede]"}`}
                >
                  {item.label}
                </span>
              </>
            );
          }}
          initialSelectedIndex={-1}
          animation="pop"
          animateOnce
          stagger={0.04}
          selectOnHover
          enableArrowNavigation
          theme="dark"
          accentColor="#7dd3fc"
          frame={false}
          displayScrollbar={false}
          showGradients={false}
          gap={4}
          radius={10}
          width="100%"
          maxHeight={282}
          itemClassName="!min-h-[47px] !py-2"
        />
      </nav>
      <p className="sr-only" aria-live="polite">
        {message}
      </p>
    </aside>
  );
}
