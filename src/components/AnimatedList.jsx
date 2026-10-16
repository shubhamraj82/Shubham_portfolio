"use client";

import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  File01Icon,
  Folder01Icon,
  Image01Icon,
  Note01Icon,
  Video01Icon,
} from "@hugeicons/core-free-icons";
import "./AnimatedList.css";

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

const THEMES = {
  dark: {
    "--al-frame": "rgba(23, 23, 23, 0.72)",
    "--al-frame-edge": "rgba(255,255,255,.1)",
    "--al-tile": "linear-gradient(180deg,#302e36 0%,#211f26 100%)",
    "--al-tile-edge": "rgba(255,255,255,.08)",
    "--al-ink": "#f4f4f5",
    "--al-muted": "rgba(244,244,245,.58)",
    "--al-thumb": "rgba(255,255,255,.2)",
    "--al-ring": "rgba(147,197,253,.82)",
    "--al-ring-fill": "rgba(59,130,246,.12)",
  },
  light: {
    "--al-frame": "rgba(245,245,245,.82)",
    "--al-frame-edge": "rgba(24,24,27,.1)",
    "--al-tile": "linear-gradient(180deg,#fff 0%,#f4f4f5 100%)",
    "--al-tile-edge": "rgba(24,24,27,.08)",
    "--al-ink": "#27272a",
    "--al-muted": "rgba(39,39,42,.58)",
    "--al-thumb": "rgba(24,24,27,.2)",
    "--al-ring": "rgba(37,99,235,.72)",
    "--al-ring-fill": "rgba(37,99,235,.08)",
  },
};

const DEFAULT_ITEMS = [
  { icon: Folder01Icon, title: "Brand assets", description: "24 files", meta: "2m" },
  { icon: Image01Icon, title: "Launch hero.png", description: "2.4 MB", meta: "18m" },
  { icon: Video01Icon, title: "Product tour.mp4", description: "148 MB", meta: "1h" },
  { icon: Note01Icon, title: "Pricing notes", description: "1,240 words", meta: "3h" },
  { icon: File01Icon, title: "Release notes", description: "Version 2.4", meta: "1w" },
];

const HIDDEN = {
  pop: "translate3d(0,12px,0) scale(.94)",
  slide: "translate3d(0,22px,0)",
  fade: "translate3d(0,4px,0)",
};
const size = (value) => (typeof value === "number" ? `${value}px` : value);

export default function AnimatedList({
  items = DEFAULT_ITEMS,
  onItemSelect,
  renderItem,
  initialSelectedIndex = -1,
  selectOnHover = true,
  enableArrowNavigation = true,
  loop = false,
  animation = "pop",
  animateOnce = false,
  stagger = 0.05,
  showGradients = true,
  fadeSize = 56,
  displayScrollbar = true,
  frame = true,
  theme = "dark",
  accentColor,
  radius = 14,
  gap = 8,
  width = 420,
  maxHeight = 440,
  className = "",
  itemClassName = "",
  style,
}) {
  const rootRef = useRef(null);
  const viewportRef = useRef(null);
  const itemRefs = useRef([]);
  const [selected, setSelected] = useState(initialSelectedIndex);
  const [entered, setEntered] = useState(animation === "none");
  const [reducedMotion, setReducedMotion] = useState(false);
  const baseId = useId();

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!animateOnce) setEntered(animation === "none");
    if (animation === "none") {
      setEntered(true);
      return;
    }
    const root = rootRef.current;
    if (!root || typeof IntersectionObserver === "undefined") {
      setEntered(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setEntered(true),
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, [animateOnce, animation]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || !enableArrowNavigation) return;
    const onKeyDown = (event) => {
      const count = items.length;
      if (!count) return;
      let next = null;
      if (event.key === "ArrowDown") next = selected < 0 ? 0 : selected + 1;
      if (event.key === "ArrowUp") next = selected < 0 ? count - 1 : selected - 1;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = count - 1;
      if (event.key === "Enter" && selected >= 0) {
        onItemSelect?.(items[selected], selected);
        return;
      }
      if (next === null) return;
      event.preventDefault();
      next = loop ? (next + count) % count : Math.max(0, Math.min(count - 1, next));
      setSelected(next);
      itemRefs.current[next]?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    };
    viewport.addEventListener("keydown", onKeyDown);
    return () => viewport.removeEventListener("keydown", onKeyDown);
  }, [enableArrowNavigation, items, loop, onItemSelect, selected]);

  const motionStyle = (index) =>
    entered || animation === "none" || reducedMotion
      ? undefined
      : { opacity: 0, transform: HIDDEN[animation] ?? HIDDEN.pop, transitionDelay: `${index * stagger}s` };
  const cssVars = {
    ...(THEMES[theme] ?? THEMES.dark),
    "--al-radius": `${Math.max(0, radius)}px`,
    "--al-gap": `${Math.max(0, gap)}px`,
    "--al-width": size(width),
    "--al-accent": accentColor || "var(--al-ring)",
    "--al-fade-size": `${fadeSize}px`,
    ...style,
  };

  return (
    <div ref={rootRef} className={`animated-list${frame ? " animated-list--framed" : ""} ${className}`.trim()} style={cssVars}>
      <div
        ref={viewportRef}
        className={`animated-list__viewport${displayScrollbar ? "" : " animated-list__viewport--bare"}${showGradients ? " animated-list__viewport--faded" : ""}`}
        role="listbox"
        tabIndex={0}
        aria-activedescendant={selected >= 0 ? `${baseId}-${selected}` : undefined}
        style={{ maxHeight: size(maxHeight) }}
      >
        <div className="animated-list__track">
          {items.map((item, index) => {
            const entry = item && typeof item === "object" ? item : { title: item };
            const isSelected = index === selected;
            return (
              <div
                key={entry.id ?? index}
                ref={(element) => { itemRefs.current[index] = element; }}
                id={`${baseId}-${index}`}
                className={`animated-list__item ${itemClassName}`.trim()}
                role="option"
                aria-selected={isSelected}
                data-selected={isSelected ? "" : undefined}
                style={motionStyle(index)}
                onPointerEnter={selectOnHover ? () => setSelected(index) : undefined}
                onClick={() => { setSelected(index); onItemSelect?.(item, index); }}
              >
                {renderItem ? renderItem(item, index, isSelected) : <>
                  {(entry.image || entry.icon) && <span className="animated-list__lead">
                    {entry.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={entry.image} alt="" draggable={false} />
                    ) : <HugeiconsIcon icon={entry.icon} size={19} strokeWidth={1.8} />}
                  </span>}
                  <span className="animated-list__text"><span className="animated-list__title">{entry.title}</span>{entry.description && <span className="animated-list__description">{entry.description}</span>}</span>
                  {entry.meta && <span className="animated-list__meta">{entry.meta}</span>}
                </>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
