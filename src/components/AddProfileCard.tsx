"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { Image as ImageIcon, CloudUpload } from "lucide-react";

export default function AddProfileCard() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileName, setProfileName] = useState("");
  const [isKidsProfile, setIsKidsProfile] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [saved, setSaved] = useState(false);

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    setImageUrl(URL.createObjectURL(file));
    setSaved(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaved(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="h-[564px] w-[432px] rounded-2xl border-2 border-sky-300/70 bg-[#171717]/65 px-10 pt-9 pb-8 text-white shadow-[0_5px_0_rgba(37,99,235,0.55),0_18px_40px_rgba(2,132,199,0.28),inset_0_1px_0_rgba(255,255,255,0.28)] backdrop-blur-xl"
    >
      <h2 className="text-[24px] font-semibold leading-8">Add profile</h2>

      <div className="mt-5 flex h-[98px] items-center gap-6">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          aria-label="Choose profile image"
          className="flex size-[98px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#242424] text-white transition-colors hover:bg-[#303030] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageUrl}
              alt="Profile preview"
              className="size-full object-cover"
            />
          ) : (
            <ImageIcon
              aria-hidden="true"
              className="size-7"
              strokeWidth={1.8}
            />
          )}
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="sr-only"
          aria-label="Upload profile image"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="flex h-[54px] flex-1 items-center justify-center gap-2 bg-[#242424] text-[16px] text-[#dedede] transition-colors hover:bg-[#303030] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <CloudUpload aria-hidden="true" className="size-[18px]" />
          Upload image
        </button>
      </div>

      <label className="mt-[38px] block">
        <span className="sr-only">Profile name</span>
        <input
          type="text"
          value={profileName}
          onChange={(event) => {
            setProfileName(event.target.value);
            setSaved(false);
          }}
          placeholder="Profile name"
          className="h-[68px] w-full border-2 border-[#454545] bg-[#222222] px-7 text-[16px] text-white outline-none transition-colors placeholder:text-[#929292] focus:border-[#a2e52d]"
        />
      </label>

      <button
        type="button"
        role="switch"
        aria-checked={isKidsProfile}
        onClick={() => setIsKidsProfile((value) => !value)}
        className="mt-[30px] flex items-center gap-4 text-left text-[16px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        <span
          className={`relative h-4 w-[50px] border-2 transition-colors ${isKidsProfile ? "border-[#a2e52d]" : "border-[#454545]"}`}
        >
          <span
            className={`absolute -top-[5px] size-[26px] rounded-full transition-all ${isKidsProfile ? "left-[22px] bg-[#a2e52d]" : "left-[-3px] bg-[#555555]"}`}
          />
        </span>
        Kid’s profile
      </button>

      <p className="mt-5 text-[16px] leading-[26px] text-white">
        A profile with curated content and features,
        <br />
        and a simplified user interface.
      </p>

      <button
        type="submit"
        className="mt-[34px] h-[54px] w-full rounded-full bg-gradient-to-b from-[#247cff] to-[#0755e8] font-serif text-[18px] font-medium uppercase tracking-[-0.03em] text-white shadow-[inset_0_1px_rgba(255,255,255,.4),0_7px_14px_rgba(25,92,230,.3)] transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {saved ? "Saved" : "Save"}
      </button>
    </form>
  );
}
