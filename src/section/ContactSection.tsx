"use client";

import {
  BriefcaseBusiness,
  Code2,
  Link2,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  UserRound,
  NotebookText,
} from "lucide-react";
import type { FormEvent } from "react";

const socialLinks = [
  { label: "LinkedIn", sublabel: "Connect", Icon: BriefcaseBusiness, href: "#contact" },
  { label: "GitHub", sublabel: "View work", Icon: Code2, href: "#contact" },
] as const;

const fieldClassName =
  "flex h-13 w-full items-center gap-4 rounded-xl border border-blue-300/25 bg-[#0e1b2b]/80 px-5 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-[#102238] focus:ring-4 focus:ring-blue-500/10 sm:text-base";

export default function ContactSection() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-[#070f16] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-10 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,.055) 1px, transparent 1px), radial-gradient(ellipse at 50% 0%, rgba(0,95,255,.18), transparent 44%), radial-gradient(ellipse at 15% 65%, rgba(0,89,212,.13), transparent 31%)",
          backgroundSize: "56px 56px, 56px 56px, auto, auto",
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute -left-72 top-36 size-[34rem] rounded-full border border-blue-500/35" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-56 top-48 size-[31rem] rounded-full border border-blue-500/30" />
      <div aria-hidden="true" className="pointer-events-none absolute left-[10%] top-72 size-2 rounded-full bg-blue-400 shadow-[0_0_18px_4px_rgba(59,130,246,.7)]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[10%] top-48 size-1.5 rounded-full bg-blue-400 shadow-[0_0_18px_4px_rgba(59,130,246,.72)]" />

      <div className="relative mx-auto max-w-7xl">
        <header className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-blue-400 sm:text-xs">
            <span aria-hidden="true" className="h-px w-14 bg-blue-500/65" />
            Let&apos;s connect
            <span aria-hidden="true" className="h-px w-14 bg-blue-500/65" />
          </p>
          <h2 id="contact-heading" className="mt-5 text-4xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            Have a project in mind<span className="text-blue-500">?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-blue-100/70 sm:text-xl sm:leading-8">
            I&apos;m always open to discussing new opportunities, interesting ideas or potential collaborations. Let&apos;s build something great together.
          </p>
        </header>

        <div className="mt-12 grid gap-7 lg:grid-cols-[1.55fr_1fr] lg:gap-8">
          <form onSubmit={handleSubmit} className="rounded-[22px] border border-blue-400/45 bg-[#0a1726]/85 p-6 shadow-[0_0_36px_rgba(0,102,255,.12),inset_0_1px_rgba(255,255,255,.035)] backdrop-blur-sm sm:p-10">
            <div className="space-y-5">
              <label className="block text-sm font-medium text-blue-50">
                <span className="mb-2 block">Name</span>
                <span className={fieldClassName}>
                  <UserRound aria-hidden="true" className="size-5 shrink-0 text-blue-200/75" />
                  <input aria-label="Your name" className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-slate-400" placeholder="Your name" type="text" name="name" />
                </span>
              </label>
              <label className="block text-sm font-medium text-blue-50">
                <span className="mb-2 block">Email</span>
                <span className={fieldClassName}>
                  <Mail aria-hidden="true" className="size-5 shrink-0 text-blue-200/75" />
                  <input aria-label="Your email" className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-slate-400" placeholder="you@yourname.com" type="email" name="email" />
                </span>
              </label>
              <label className="block text-sm font-medium text-blue-50">
                <span className="mb-2 block">Subject</span>
                <span className={fieldClassName}>
                  <NotebookText aria-hidden="true" className="size-5 shrink-0 text-blue-200/75" />
                  <input aria-label="Subject" className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-slate-400" placeholder="Project inquiry" type="text" name="subject" />
                </span>
              </label>
              <label className="block text-sm font-medium text-blue-50">
                <span className="mb-2 block">Message</span>
                <span className="flex min-h-34 gap-4 rounded-xl border border-blue-300/25 bg-[#0e1b2b]/80 px-5 py-4 transition focus-within:border-blue-400 focus-within:bg-[#102238] focus-within:ring-4 focus-within:ring-blue-500/10">
                  <MessageCircle aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-blue-200/75" />
                  <textarea aria-label="Message" className="min-h-24 w-full resize-y bg-transparent text-sm text-white outline-none placeholder:text-slate-400 sm:text-base" placeholder="Tell me about your project..." name="message" />
                </span>
              </label>
            </div>
            <button type="submit" className="mt-6 inline-flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-b from-[#3789ff] to-[#075cff] text-base font-semibold text-white shadow-[0_0_24px_rgba(31,111,255,.72),inset_0_1px_rgba(255,255,255,.35)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/40">
              <Send aria-hidden="true" className="size-5" />
              Send message
            </button>
          </form>

          <aside className="rounded-[22px] border border-blue-400/35 bg-[#091624]/85 p-6 shadow-[inset_0_1px_rgba(255,255,255,.03)] backdrop-blur-sm sm:p-10">
            <p className="inline-flex items-center gap-3 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              <span aria-hidden="true" className="size-3 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(59,130,246,.9)]" />
              Open to select projects
            </p>
            <div className="mt-8 space-y-7">
              <InfoRow icon={Mail} label="Email" value="hello@yourname.com" detail="Feel free to send me an email anytime." />
              <InfoRow icon={MapPin} label="Location" value="Available worldwide" detail="Remote work & global collaboration." />
            </div>
            <div className="my-8 h-px bg-blue-200/10" />
            <div className="flex gap-4">
              <span aria-hidden="true" className="grid size-14 shrink-0 place-items-center rounded-2xl bg-blue-500/10 text-blue-400">
                <Link2 className="size-7" />
              </span>
              <div>
                <h3 className="text-lg font-medium">Find me online</h3>
                <p className="mt-1 text-sm text-blue-100/65">Let&apos;s connect on social media.</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {socialLinks.map(({ label, sublabel, Icon, href }) => (
                <a key={label} href={href} className="flex min-w-0 items-center gap-2 rounded-xl border border-blue-300/25 px-3 py-3 transition hover:border-blue-400/60 hover:bg-blue-500/10">
                  <Icon aria-hidden="true" className="size-6 shrink-0 text-blue-400" />
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium text-white">{label}</span>
                    <span className="block text-[11px] text-blue-100/55">{sublabel}</span>
                  </span>
                </a>
              ))}
              <a href="#contact" className="flex min-w-0 items-center gap-2 rounded-xl border border-blue-300/25 px-3 py-3 transition hover:border-blue-400/60 hover:bg-blue-500/10">
                <span aria-hidden="true" className="text-2xl font-bold tracking-[-0.12em] text-blue-500">Bē</span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium text-white">Behance</span>
                  <span className="block text-[11px] text-blue-100/55">See designs</span>
                </span>
              </a>
            </div>
            <div className="mt-10 text-center">
              <span aria-hidden="true" className="mx-auto block h-px w-10 bg-blue-500" />
              <p className="mt-5 text-sm italic text-blue-100/70">Good ideas start with a conversation.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, label, value, detail }: { icon: typeof Mail; label: string; value: string; detail: string }) {
  return (
    <div className="flex gap-4">
      <span aria-hidden="true" className="grid size-14 shrink-0 place-items-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
        <Icon className="size-7" />
      </span>
      <div className="min-w-0 pt-0.5">
        <p className="text-sm text-blue-100/75">{label}</p>
        <p className="mt-1 text-lg font-medium text-white">{value}</p>
        <p className="mt-1 text-sm text-blue-100/65">{detail}</p>
      </div>
    </div>
  );
}
