/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        page: "var(--page)",
        text: "var(--text)",
        muted: "var(--muted)",
        panel: "var(--panel)",
        "soft-panel": "var(--soft-panel)",
        line: "var(--line)",
        primary: "var(--primary)",
        "primary-deep": "var(--primary-deep)",
        brandblue: "var(--blue)",
        violet2: "var(--violet)"
      },
      boxShadow: {
        soft: "var(--shadow)",
        card: "0 22px 45px rgba(15,23,42,0.1)",
        cardd: "0 25px 60px rgba(0,0,0,0.35)",
        glow: "0 18px 36px rgba(79,70,229,0.25)"
      },
      borderRadius: {
        "4xl": "28px",
        "5xl": "34px"
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22,1,0.36,1)",
        spring: "cubic-bezier(0.34,1.56,0.64,1)"
      },
      keyframes: {
        cardFloat: {
          "0%,100%": { transform: "translate3d(0,0,0) rotate(0deg)" },
          "50%": { transform: "translate3d(0,-14px,0) rotate(0.5deg)" }
        },
        faceFloat: {
          "0%,100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-8px,0)" }
        },
        slowFloat: {
          "0%,100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-12px,0)" }
        },
        spin360: { to: { transform: "rotate(360deg)" } },
        previewIn: {
          from: { opacity: "0", transform: "translateY(14px) scale(0.985)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" }
        },
        backdropIn: { from: { opacity: "0" }, to: { opacity: "1" } }
      },
      animation: {
        cardFloat: "cardFloat 5.8s ease-in-out infinite",
        faceFloat: "faceFloat 4.8s ease-in-out infinite",
        slowFloat: "slowFloat 7s ease-in-out infinite",
        spin360: "spin360 0.8s linear infinite",
        previewIn: "previewIn 0.4s cubic-bezier(0.22,1,0.36,1)",
        backdropIn: "backdropIn 0.25s ease"
      }
    }
  },
  plugins: []
};
