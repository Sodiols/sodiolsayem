"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (typeof window === "undefined" || !window.emailjs) {
      setStatus({ type: "error", message: "❌ EmailJS is not loaded." });
      return;
    }
    const form = event.currentTarget;
    const formData = new FormData(form);
    const emailValue = formData.get("email");
    const templateParams = {
      tname: "Sayem", name: formData.get("name"), email: emailValue,
      reply_to: emailValue, message: formData.get("message")
    };
    try {
      setSending(true);
      window.emailjs.init({ publicKey: "ah4lYEwvMfUC_N4FX" });
      await window.emailjs.send("service_upwxh9w", "template_dbdwm4z", templateParams);
      setStatus({ type: "success", message: "✨ Thanks! Your message has been sent." });
      form.reset();
    } catch (error) {
      setStatus({ type: "error", message: error?.text || "❌ Failed to send message. Check EmailJS settings." });
    } finally {
      setSending(false);
    }
  };

  const inputCls = "w-full rounded-[14px] border border-line bg-panel px-[18px] py-3.5 text-text outline-none transition focus:border-primary/50 focus:shadow-[0_0_0_4px_rgba(79,70,229,0.12)]";

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-24 sm:px-6 md:px-8">
      <div className="reveal rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6 shadow-soft dark:from-slate-900 dark:via-slate-950 dark:to-indigo-950 sm:p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <span className="font-semibold text-indigo-700 dark:text-indigo-300">Get in touch</span>
            <h2 className="mt-1 text-3xl font-bold">
              Let&apos;s create <br /><span className="gradient-text">something great</span>
            </h2>
            <p className="mt-4 text-muted">
              I&apos;m available for frontend projects, portfolio websites, landing pages, and clean UI development.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4"><i className="fas fa-envelope w-6 text-primary" /><span>itssayem2023@gmail.com</span></div>
              <div className="flex items-center gap-4"><i className="fas fa-phone-alt w-6 text-primary" /><span>+880 1626 974965</span></div>
              <div className="flex items-center gap-4"><i className="fab fa-discord w-6 text-primary" /><span>flexr.prime</span></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input type="text" name="name" placeholder="Full name" className={inputCls} required />
            <input type="email" name="email" placeholder="Email address" className={inputCls} required />
            <textarea name="message" rows="3" placeholder="Tell me about your project..." className={inputCls} required />
            <button type="submit" disabled={sending}
              className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white shadow-md transition-all hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70">
              {sending ? "Sending..." : "Send message"} <i className="fas fa-paper-plane ml-2" />
            </button>
            {status.message && (
              <p className={`mt-2 text-center text-sm ${status.type === "success" ? "text-green-600" : "text-red-500"}`}>{status.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
