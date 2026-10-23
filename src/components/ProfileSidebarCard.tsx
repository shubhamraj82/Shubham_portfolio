"use client";

import { useState, type ComponentType, type ReactNode } from "react";
import { FileDown, Plus, UserRound } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  GithubIcon,
  InstagramIcon,
  Linkedin01Icon,
  TwitterIcon,
} from "@hugeicons/core-free-icons";
import AnimatedList from "./AnimatedList";

type ProfileMenuItem = {
  label: string;
  icon?: typeof UserRound | typeof FileDown;
  brandIcon?: (typeof GithubIcon) | (typeof InstagramIcon) | (typeof Linkedin01Icon) | (typeof TwitterIcon);
};

type ProfileAnimatedListProps = {
  items: ProfileMenuItem[];
  onItemSelect: (item: ProfileMenuItem, index: number) => void;
  renderItem: (item: ProfileMenuItem, index: number, selected: boolean) => ReactNode;
  initialSelectedIndex?: number;
  animation?: string;
  animateOnce?: boolean;
  stagger?: number;
  selectOnHover?: boolean;
  enableArrowNavigation?: boolean;
  theme?: "dark";
  accentColor?: string;
  frame?: boolean;
  displayScrollbar?: boolean;
  showGradients?: boolean;
  gap?: number;
  radius?: number;
  width?: number;
  maxHeight?: number;
  itemClassName?: string;
};

const ProfileAnimatedList = AnimatedList as unknown as ComponentType<ProfileAnimatedListProps>;

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
    <aside className="h-[564px] w-[432px] cursor-auto rounded-none border border-[#28321E] bg-[#121612] px-7 pt-8 pb-12 text-[#F5F7F2] shadow-[0_12px_32px_rgba(0,0,0,0.32),0_0_24px_rgba(183,255,60,0.08)] [&_button]:cursor-pointer">
      <button
        type="button"
        onClick={() => setMessage("Shubham Raj profile selected")}
        className="flex w-full items-center gap-4 text-left rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        aria-label="Select Shubham Raj profile"
      >
        <span className="flex size-[64px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#28321E] to-[#121612] text-xl font-semibold text-[#F5F7F2] ring-2 ring-[#28321E]">
          SR
        </span>
        <span className="flex flex-col">
          <span className="text-[21px] leading-7">Shubham Raj</span>
          <span className="text-[16px] leading-6 text-[#A6ADA3]">
            @shubhamraj82
          </span>
        </span>
      </button>

      <button
        type="button"
        onClick={() => setMessage("Portfolio selected")}
        className="mt-7 flex h-[64px] w-full items-center justify-center gap-3 rounded-full bg-[#B7FF3C] font-serif text-[20px] font-medium uppercase tracking-[-0.03em] text-[#080A08] shadow-[0_4px_16px_rgba(183,255,60,0.16)] transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B7FF3C]"
      >
        <Plus aria-hidden="true" className="size-6 " />
        View portfolio
      </button>

      <nav aria-label="Portfolio sections" className="mt-5">
        <ProfileAnimatedList
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
                  className={`text-[17px] ${selected ? "text-[#F5F7F2]" : "text-[#A6ADA3]"}`}
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
          accentColor="#B7FF3C"
          frame={false}
          displayScrollbar={false}
          showGradients={false}
          gap={4}
          radius={10}
          width={376}
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
