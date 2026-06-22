const stats = [
  { value: "3+", label: "live project types" },
  { value: "100%", label: "responsive focus" },
  { value: "24/7", label: "frontend learning" },
  { value: "10/10", label: "polish goal" }
];

export default function Stats() {
  return (
    <div className="border-y border-line bg-soft-panel/80 py-8 dark:bg-slate-900/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 text-center sm:px-6 md:grid-cols-4 md:px-8">
        {stats.map((stat, index) => (
          <div key={stat.label}
            className={`reveal reveal-delay-${Math.min(index, 3)} rounded-[20px] border border-line bg-panel px-2.5 py-[18px] shadow-soft sm:rounded-3xl sm:px-3 sm:py-5`}>
            <span className="block text-2xl font-black text-primary sm:text-[28px]">{stat.value}</span>
            <p className="mt-1 text-[13px] text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
