"use client";

import { useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  BriefcaseBusiness as Linkedin,
  ChevronDown,
  Code2 as Github,
  Mail,
  MessageSquare,
  Send,
  Sparkles,
  User,
  X,
} from "lucide-react";
import "./contact.css";

const socials = [
  {
    label: "Email",
    value: "your.email@gmail.com",
    href: "mailto:your.email@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/your-profile",
    href: "https://linkedin.com/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/your-username",
    href: "https://github.com/",
    icon: Github,
  },
  {
    label: "X / Twitter",
    value: "@yourusername",
    href: "https://x.com/",
    icon: X,
  },
];

const planetPositions = [
  "left-[10%] top-[13%] h-12 w-12 sm:h-16 sm:w-16",
  "right-[9%] top-[28%] h-8 w-8 sm:h-10 sm:w-10",
  "bottom-[16%] right-[12%] h-9 w-9 sm:h-12 sm:w-12",
];

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [expandedSocial, setExpandedSocial] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const sceneRef = useRef<HTMLDivElement>(null);
  const sceneIsVisible = useInView(sceneRef, { amount: 0.15 });
  const shouldAnimateScene = !reduceMotion && sceneIsVisible;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hi,\n\n${message}\n\nFrom: ${name}\nReply to: ${email}`,
    );
    setStatus("Opening your email application...");
    window.location.href = `mailto:your.email@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate min-h-screen overflow-hidden bg-[#080A08] text-[#F5F7F2]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_50%,rgba(183,255,60,0.14),transparent_45%)]" />
        <div className="portal-grid absolute inset-0 opacity-[0.12]" />
      </div>

      <div className="mx-auto grid min-h-screen max-w-[1440px] items-center gap-6 px-6 py-16 sm:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-0 lg:px-16 lg:py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="relative z-10"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#28321E] bg-white/[0.03] px-4 py-2 text-sm text-[#A6ADA3]"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#B7FF3C]" />
            Get in touch
          </motion.div>
          <motion.h2
            id="contact-heading"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-5xl font-medium leading-[1.05] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[82px]"
          >
            Let&apos;s create
            <br />
            something{" "}
            <span className="portal-gradient font-semibold">unreal.</span>
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-6 max-w-md text-sm leading-7 text-[#A6ADA3] sm:text-base"
          >
            Have a project in mind, a collaboration idea, or just want to say
            hi? I&apos;d love to hear from you. Let&apos;s turn your next big
            idea into something extraordinary.
          </motion.p>

          <div className="mt-8 max-w-md">
            {socials.map((social, index) => {
              const Icon = social.icon;
              const isExpanded = expandedSocial === social.label;
              const panelId = `contact-${social.label.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}`;
              return (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, x: reduceMotion ? 0 : -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.12 }}
                  className="border-b border-[#28321E] first:pt-2"
                >
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={panelId}
                    onClick={() => setExpandedSocial(isExpanded ? null : social.label)}
                    className="group flex w-full items-center gap-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF3C] focus-visible:ring-offset-4 focus-visible:ring-offset-[#080A08]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#B7FF3C]/30 bg-[#B7FF3C]/[0.05] text-[#B7FF3C] transition-colors group-hover:bg-[#B7FF3C]/15">
                      <Icon size={21} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-[#A6ADA3]">
                        {social.label}
                      </span>
                      <span className="mt-1 block truncate text-sm text-[#F5F7F2] transition-colors group-hover:text-[#B7FF3C] sm:text-base">
                        {social.value}
                      </span>
                    </span>
                    <motion.span
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.22 }}
                      className="text-[#A6ADA3] transition-colors group-hover:text-[#B7FF3C]"
                    >
                      <ChevronDown size={18} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="details"
                        id={panelId}
                        role="region"
                        aria-label={`${social.label} contact details`}
                        initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="flex items-center justify-between gap-4 pb-4 pl-16">
                          <p className="text-xs leading-relaxed text-[#A6ADA3] sm:text-sm">
                            {social.label === "Email" ? "Have a project or question? Send me a note." : `Find me on ${social.label}.`}
                          </p>
                          <a
                            href={social.href}
                            target={social.label === "Email" ? undefined : "_blank"}
                            rel={social.label === "Email" ? undefined : "noreferrer"}
                            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#B7FF3C]/25 bg-[#B7FF3C]/[0.07] px-3 py-2 text-xs font-medium text-[#B7FF3C] transition hover:border-[#B7FF3C]/50 hover:bg-[#B7FF3C]/[0.13] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF3C]"
                          >
                            Open <ArrowRight size={13} />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex items-center gap-3 text-sm text-[#B7FF3C]"
          >
            <span className="h-px w-10 bg-[#B7FF3C]" />
            Let&apos;s build something amazing together.
          </motion.p>
        </motion.div>

        <div className="relative flex min-h-[470px] items-center justify-center sm:min-h-[600px] lg:min-h-[700px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute h-[75%] w-[75%] rounded-full bg-[#B7FF3C]/[0.06] blur-[90px]"
          />
          <div
            ref={sceneRef}
            className="portal-scene relative flex aspect-square w-full max-w-[660px] items-center justify-center"
          >
            <motion.div
              animate={shouldAnimateScene ? { rotate: 360 } : undefined}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              className="portal-orbit absolute h-[60%] w-[110%] rounded-[50%] border border-[#B7FF3C]/60"
            />
            <motion.div
              animate={shouldAnimateScene ? { rotate: -360 } : undefined}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="portal-orbit portal-orbit-two absolute h-[49%] w-[108%] rounded-[50%] border-2 border-[#B7FF3C]/40"
            />
            <motion.div
              animate={shouldAnimateScene ? { rotate: 360 } : undefined}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="portal-orbit portal-orbit-three absolute h-[95%] w-[95%] rounded-full border border-[#28321E]/40"
            />
            <motion.div
              animate={shouldAnimateScene ? { y: [0, -10, 0] } : undefined}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="portal-sphere relative aspect-square w-[64%] overflow-hidden rounded-full"
            >
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_22%,#F5F7F2_0%,#B7FF3C_5%,#667A3C_22%,#121612_50%,#080A08_75%)]" />
              <div className="portal-cracks absolute inset-0 rounded-full opacity-80" />
              <div className="absolute inset-0 rounded-full border border-[#B7FF3C]/60 shadow-[inset_-30px_-20px_65px_rgba(0,0,0,0.9),inset_5px_0_35px_rgba(183,255,60,0.35)]" />
            </motion.div>
            {planetPositions.map((position, index) => (
              <motion.div
                key={position}
                animate={
                  shouldAnimateScene
                    ? { y: [0, index % 2 === 0 ? -16 : 12, 0] }
                    : undefined
                }
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`portal-planet absolute rounded-full ${position}`}
              />
            ))}
            {Array.from({ length: 12 }).map((_, index) => (
              <motion.span
                key={index}
                className="pointer-events-none absolute h-1 w-1 rounded-full bg-[#B7FF3C]"
                style={{
                  left: `${8 + ((index * 37) % 84)}%`,
                  top: `${7 + ((index * 23) % 86)}%`,
                  boxShadow: "0 0 9px rgba(183,255,60,0.8)",
                }}
                animate={
                  shouldAnimateScene
                    ? { y: [0, -14, 0], opacity: [0.2, 0.9, 0.2] }
                    : undefined
                }
                transition={{
                  duration: 3 + (index % 3),
                  delay: index * 0.15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="relative z-10 w-[83%] max-w-[350px] rounded-[26px] border border-[#28321E] bg-[#121612]/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.55),0_0_28px_rgba(183,255,60,0.08)] backdrop-blur-2xl sm:p-7"
            >
              <div className="mb-5 flex items-center gap-2 text-xs text-[#A6ADA3]">
                <span className="h-2 w-2 rounded-full bg-[#B7FF3C]" />
                Drop a message
                <Sparkles size={14} className="ml-auto text-[#B7FF3C]" />
              </div>
              <h3 className="mb-6 text-2xl font-medium leading-tight sm:text-[27px]">
                Have a project
                <br />
                in mind?
              </h3>
              <form onSubmit={handleSubmit} className="space-y-2.5">
                <label className="flex items-center gap-3 rounded-xl border border-[#28321E] bg-[#080A08]/80 px-3.5 focus-within:border-[#B7FF3C]/70">
                  <User size={17} className="shrink-0 text-[#A6ADA3]" />
                  <input
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your name"
                    aria-label="Your name"
                    className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-[#A6ADA3]/60"
                  />
                </label>
                <label className="flex items-center gap-3 rounded-xl border border-[#28321E] bg-[#080A08]/80 px-3.5 focus-within:border-[#B7FF3C]/70">
                  <Mail size={17} className="shrink-0 text-[#A6ADA3]" />
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Your email"
                    aria-label="Your email"
                    className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-[#A6ADA3]/60"
                  />
                </label>
                <label className="flex items-start gap-3 rounded-xl border border-[#28321E] bg-[#080A08]/80 px-3.5 focus-within:border-[#B7FF3C]/70">
                  <MessageSquare
                    size={17}
                    className="mt-3 shrink-0 text-[#A6ADA3]"
                  />
                  <textarea
                    required
                    rows={3}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Tell me about your project..."
                    aria-label="Your message"
                    className="w-full resize-y bg-transparent py-3 text-sm outline-none placeholder:text-[#A6ADA3]/60"
                  />
                </label>
                <motion.button
                  whileHover={reduceMotion ? undefined : { scale: 1.015 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#B7FF3C] py-3.5 text-sm font-semibold text-[#080A08] shadow-[0_4px_18px_rgba(183,255,60,0.14)] transition-shadow hover:shadow-[0_4px_22px_rgba(183,255,60,0.2)]"
                >
                  Send Message
                  <Send
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </motion.button>
                {status && (
                  <p role="status" className="text-xs text-[#B7FF3C]">
                    {status}
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
