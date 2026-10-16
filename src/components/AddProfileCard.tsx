"use client";

import type { ComponentType, ReactNode } from "react";
import { BarChart3, CalendarDays } from "lucide-react";
import AnimatedList from "./AnimatedList";

type EducationEntry = {
  title: string;
  degree?: string;
  period: string;
  mark?: string;
  grade?: string;
};

type EducationAnimatedListProps = {
  items: EducationEntry[];
  renderItem: (item: EducationEntry, index: number, selected: boolean) => ReactNode;
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
  className?: string;
};

const EducationAnimatedList = AnimatedList as unknown as ComponentType<EducationAnimatedListProps>;

const education = [
  {
    title: "Kalinga Institute of Industrial Technology, Bhubaneswar",
    degree: "Bachelor of Technology · Computer Science and Communication Engineering",
    period: "Sep 2022 – Jul 2026",
    mark: "KIIT",
  },
  {
    title: "12th Grade · Surendranath Centenary School",
    period: "2020 – 2022",
    grade: "83.43%",
  },
  {
    title: "10th Grade · Surendranath Centenary School",
    period: "2009 – 2020",
    grade: "88.34%",
  },
];

function SchoolMark({ kiit = false }: { kiit?: boolean }) {
  if (kiit) {
    return (
      <div className="flex size-[72px] shrink-0 flex-col items-center justify-center text-[#00ed68]" aria-label="KIIT">
        <span className="text-[22px] font-bold leading-none">KIIT</span>
        <span aria-hidden="true" className="mt-1 text-[38px] leading-[30px]">◉</span>
        <span aria-hidden="true" className="text-[14px] leading-none tracking-[2px]">✹</span>
      </div>
    );
  }

  return (
    <div className="relative flex size-[68px] shrink-0 items-center justify-center overflow-hidden rounded-md bg-[#e5e5e5]" aria-hidden="true">
      <span className="absolute right-2 top-2 size-10 rounded-full bg-[#82a1c4]" />
      <span className="absolute bottom-2 left-2 size-8 rounded-full bg-[#214c63]/80" />
    </div>
  );
}

export default function AddProfileCard() {
  return (
    <section className="h-[564px] w-[432px] rounded-2xl border-2 border-sky-300/70 bg-[#171717]/65 px-9 pt-8 pb-6 text-white shadow-[0_5px_0_rgba(37,99,235,0.55),0_18px_40px_rgba(2,132,199,0.28),inset_0_1px_0_rgba(255,255,255,0.28)] backdrop-blur-xl">
      <h2 className="font-serif text-[28px] font-semibold leading-9">My Education</h2>

      <EducationAnimatedList
        items={education}
        renderItem={(item, index) => (
          <div className={`flex w-full items-center gap-4 font-serif ${index === 0 ? "min-h-[132px]" : "min-h-[76px]"}`}>
            <SchoolMark kiit={index === 0} />
            <div className="min-w-0">
              <h3 className="text-[16px] font-bold leading-[1.25] whitespace-normal">{item.title}</h3>
              {item.degree && <p className="mt-1 text-[13px] leading-[1.3] text-white/85">{item.degree}</p>}
              <p className="mt-2 flex items-center gap-2 text-[14px] leading-5 text-white/90">
                <CalendarDays aria-hidden="true" className="size-[18px] shrink-0" />
                {item.period}
              </p>
              {item.grade && (
                <p className="mt-1 flex items-center gap-2 text-[14px] leading-5 text-white/90">
                  <BarChart3 aria-hidden="true" className="size-[18px] shrink-0" />
                  Grade: {item.grade}
                </p>
              )}
            </div>
          </div>
        )}
        initialSelectedIndex={0}
        animation="pop"
        animateOnce
        stagger={0.08}
        selectOnHover
        enableArrowNavigation
        theme="dark"
        accentColor="#7dd3fc"
        frame={false}
        displayScrollbar={false}
        showGradients={false}
        gap={8}
        radius={7}
        width={356}
        maxHeight={460}
        itemClassName="!px-4 !py-3"
        className="mt-2"
      />
    </section>
  );
}
