"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import StailisticLogo from "@/components/ui/stailisticlogo";

type Modal = "login" | "signup" | null;

const blueBtn =
  "rounded-full bg-stailistictext-blue px-6 py-2.5 font-medium text-white hover:opacity-90";
const outlineBtn =
  "rounded-full border border-zinc-300 px-6 py-2.5 font-medium text-zinc-700 hover:bg-zinc-100";
const input =
  "w-full rounded-xl border border-zinc-300 px-4 py-2.5 outline-none focus:border-stailistictext-blue";

export default function Landing() {
  const [modal, setModal] = useState<Modal>(null);
  const router = useRouter();

  function submit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <header className="flex items-center justify-between px-8 py-5">
        <StailisticLogo isButton={false} />
        <div className="flex gap-3">
          <button className={outlineBtn} onClick={() => setModal("login")}>Login</button>
          <button className={blueBtn} onClick={() => setModal("signup")}>Get Started</button>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="text-6xl font-bold tracking-tight">
          ST<span className="italic text-stailistictext-blue">AI</span>LISTIC
        </h1>
        <p className="text-2xl text-zinc-700">Your personal outfit picker</p>
        <p className="max-w-md text-zinc-500">
          Upload your clothes, get outfit suggestions, and plan your looks for any occasion.
        </p>
        <div className="mt-2 flex gap-3">
          <button className={blueBtn} onClick={() => setModal("signup")}>Get Started</button>
          <button className={outlineBtn} onClick={() => setModal("login")}>Login</button>
        </div>
      </main>

      {modal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/30"
          onClick={() => setModal(null)}
        >
          <form
            onSubmit={submit}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl"
          >
            <button
              type="button"
              onClick={() => setModal(null)}
              className="absolute right-4 top-3 text-xl text-zinc-400 hover:text-zinc-700"
            >
              ×
            </button>
            <h2 className="mb-6 text-2xl font-semibold">
              {modal === "signup" ? "Create your account" : "Welcome back"}
            </h2>
            <div className="flex flex-col gap-3">
              {modal === "signup" && <input className={input} placeholder="Full Name" required />}
              <input className={input} type="email" placeholder="Email" required />
              <input className={input} type="password" placeholder="Password" required />
              <button className={blueBtn + " mt-2 w-full"}>
                {modal === "signup" ? "Create Account" : "Login"}
              </button>
            </div>
            <p className="mt-4 text-center text-sm text-zinc-500">
              {modal === "signup" ? "Already have an account? " : "Don't have an account? "}
              <button
                type="button"
                className="text-stailistictext-blue hover:underline"
                onClick={() => setModal(modal === "signup" ? "login" : "signup")}
              >
                {modal === "signup" ? "Login" : "Get Started"}
              </button>
            </p>
          </form>
        </div>
      )}
    </div>
  );
}
