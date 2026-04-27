"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({ to, duration = 2 }: { to: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = to / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, to, duration]);

  return <span ref={ref}>{count}</span>;
}

const stats = [
  { value: 3, suffix: "+", label: "Ans d'expérience", sub: "Fondé à Sorel-Tracy" },
  { value: 200, suffix: "+", label: "Clients servis", sub: "Résidentiel & commercial" },
  { value: 40, suffix: "+", label: "Avis Google", sub: "Note moyenne 4.9/5" },
  { value: 100, suffix: "%", label: "Satisfaction garantie", sub: "On revient sinon" },
];

export default function Stats() {
  return (
    <section className="py-14 sm:py-20 bg-background">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            En chiffres
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy leading-tight">
            La confiance, ça se mesure
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="bg-white border border-card-border rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="font-heading font-black text-4xl sm:text-5xl text-navy mb-1">
                <CountUp to={s.value} />
                <span className="text-accent">{s.suffix}</span>
              </div>
              <div className="font-semibold text-navy text-sm mt-1">{s.label}</div>
              <div className="text-secondary text-xs mt-1">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
