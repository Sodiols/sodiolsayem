"use client";

export default function WhatsAppButton() {
  const phoneNumber = "8801626974965";
  const message =
    "Hello, I visited your portfolio website and I want to talk with you.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_24px_50px_rgba(37,211,102,0.45)]"
      aria-label="Chat on WhatsApp"
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.02 3C8.86 3 3.04 8.7 3.04 15.72c0 2.4.7 4.72 2.02 6.73L3 29l6.75-1.98A13.25 13.25 0 0 0 16.02 28C23.18 28 29 22.3 29 15.28 29 8.7 23.18 3 16.02 3Zm0 22.84c-2 0-3.95-.52-5.65-1.5l-.4-.23-4 .98 1.08-3.8-.26-.4a10.25 10.25 0 0 1-1.62-5.52c0-5.82 4.86-10.55 10.85-10.55 5.98 0 10.85 4.73 10.85 10.55 0 5.82-4.87 10.47-10.85 10.47Zm5.94-7.82c-.32-.16-1.9-.92-2.2-1.02-.3-.12-.52-.16-.74.16-.22.31-.84 1.02-1.04 1.23-.19.22-.38.24-.7.08-.32-.16-1.36-.49-2.6-1.55-.96-.84-1.6-1.88-1.8-2.2-.18-.31-.02-.48.14-.64.14-.14.32-.37.48-.55.16-.18.22-.31.32-.52.1-.22.05-.4-.03-.56-.08-.16-.74-1.75-1.02-2.4-.27-.64-.54-.55-.74-.56h-.64c-.22 0-.56.08-.86.4-.3.31-1.14 1.1-1.14 2.67s1.17 3.1 1.34 3.31c.16.22 2.3 3.43 5.58 4.8.78.33 1.39.53 1.86.68.78.24 1.5.2 2.06.12.63-.09 1.9-.76 2.17-1.5.27-.73.27-1.36.19-1.5-.08-.14-.3-.22-.62-.38Z" />
      </svg>
    </a>
  );
}