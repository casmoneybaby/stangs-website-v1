"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { buildSteps, toppings, sauces } from "../data/siteData";

export default function BuildYourDog() {
  const [activeStep, setActiveStep] = useState(0);
  const [selections, setSelections] = useState<Record<number, string>>({});
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [selectedSauces, setSelectedSauces] = useState<string[]>([]);

  const handleSelect = (stepIndex: number, value: string) => {
    setSelections((prev) => ({ ...prev, [stepIndex]: value }));
    if (stepIndex < buildSteps.length - 1) {
      setTimeout(() => setActiveStep(stepIndex + 1), 250);
    }
  };

  const toggleTopping = (t: string) => {
    setSelectedToppings((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  };

  const toggleSauce = (s: string) => {
    setSelectedSauces((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const baseName = selections[0] || "Your Dog";
  const bunName = selections[1] || "";

  return (
    <section id="build" className="py-20 sm:py-28 bg-charcoal relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ketchup/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-mustard/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-bold tracking-wide uppercase bg-mustard/15 text-mustard rounded-full">
            <Sparkles size={14} />
            Interactive
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Build Your <span className="text-mustard">Perfect Dog</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Pick your base, bun, toppings, and sauce. Watch your creation come to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Builder Steps */}
          <div className="space-y-6">
            {buildSteps.map((step, si) => (
              <motion.div
                key={si}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: si * 0.1 }}
                className={`rounded-2xl border transition-all ${
                  activeStep === si
                    ? "bg-white/10 border-white/20"
                    : "bg-white/5 border-white/10"
                }`}
              >
                <button
                  onClick={() => setActiveStep(si)}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                      selections[si] || (si === 2 && selectedToppings.length) || (si === 3 && selectedSauces.length)
                        ? "bg-mustard text-charcoal"
                        : activeStep === si
                        ? "bg-ketchup text-white"
                        : "bg-white/10 text-white/50"
                    }`}
                  >
                    {selections[si] || (si === 2 && selectedToppings.length) || (si === 3 && selectedSauces.length) ? (
                      <Check size={14} />
                    ) : (
                      step.step
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-white">{step.title}</p>
                    {selections[si] && si < 2 && (
                      <p className="text-sm text-mustard">{selections[si]}</p>
                    )}
                    {si === 2 && selectedToppings.length > 0 && (
                      <p className="text-sm text-mustard">
                        {selectedToppings.length} selected
                      </p>
                    )}
                    {si === 3 && selectedSauces.length > 0 && (
                      <p className="text-sm text-mustard">
                        {selectedSauces.length} selected
                      </p>
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {activeStep === si && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        {si < 2 ? (
                          <div className="flex flex-wrap gap-2">
                            {step.options.map((opt) => (
                              <button
                                key={opt}
                                onClick={() => handleSelect(si, opt)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 ${
                                  selections[si] === opt
                                    ? "bg-mustard text-charcoal"
                                    : "bg-white/10 text-white hover:bg-white/20"
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        ) : si === 2 ? (
                          <div className="flex flex-wrap gap-2">
                            {toppings.map((t) => (
                              <button
                                key={t}
                                onClick={() => toggleTopping(t)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 ${
                                  selectedToppings.includes(t)
                                    ? "bg-pickle text-white"
                                    : "bg-white/10 text-white hover:bg-white/20"
                                }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        ) : (
                          <div className="flex flex-wrap gap-2">
                            {sauces.map((s) => (
                              <button
                                key={s}
                                onClick={() => toggleSauce(s)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 ${
                                  selectedSauces.includes(s)
                                    ? "bg-ketchup text-white"
                                    : "bg-white/10 text-white hover:bg-white/20"
                                }`}
                              >
                                {s}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Preview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-black/20">
              <div className="text-center mb-6">
                <h3 className="text-xl font-black text-charcoal mb-1">
                  {baseName}
                </h3>
                {bunName && (
                  <p className="text-sm text-gray-500">on a {bunName}</p>
                )}
              </div>

              {/* Visual dog representation */}
              <div className="relative w-full h-40 flex items-center justify-center mb-6">
                <div className="relative">
                  {/* Bun bottom */}
                  <motion.div
                    animate={{
                      scale: selections[0] ? [1, 1.02, 1] : 1,
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-56 h-10 bg-bun-dark rounded-full relative z-10"
                  />
                  {/* Sausage */}
                  <motion.div
                    animate={{
                      y: selections[0] ? 0 : 10,
                      opacity: selections[0] ? 1 : 0.3,
                    }}
                    className={`w-52 h-7 rounded-full absolute left-2 -top-3 z-20 ${
                      selections[0]?.includes("Beyond")
                        ? "bg-pickle-light"
                        : selections[0]?.includes("Hot Link")
                        ? "bg-ketchup"
                        : "bg-charcoal-light"
                    }`}
                  />
                  {/* Bun top */}
                  <motion.div
                    animate={{
                      y: selections[0] ? 0 : -5,
                    }}
                    className="w-56 h-10 bg-bun rounded-t-full absolute -top-7 left-0 z-30"
                  />

                  {/* Toppings indicators */}
                  {selectedToppings.map((t, i) => (
                    <motion.div
                      key={t}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="absolute -top-6 z-40 px-2 py-0.5 text-[10px] font-bold bg-pickle text-white rounded-full"
                      style={{
                        left: `${15 + i * 45}px`,
                        top: `-28px`,
                      }}
                    >
                      {t.split(" ")[0]}
                    </motion.div>
                  ))}

                  {/* Sauce drips */}
                  {selectedSauces.map((s, i) => (
                    <motion.div
                      key={s}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      className={`absolute w-3 rounded-full z-[25] origin-top ${
                        s.includes("Mustard")
                          ? "bg-mustard"
                          : s.includes("Ketchup")
                          ? "bg-ketchup"
                          : s.includes("Cheese")
                          ? "bg-mustard-light"
                          : "bg-charcoal-light"
                      }`}
                      style={{
                        left: `${30 + i * 40}px`,
                        top: `-4px`,
                        height: `${18 + (i % 3) * 8}px`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Selection summary */}
              <div className="space-y-3">
                {selectedToppings.length > 0 && (
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Toppings
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedToppings.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 text-xs font-semibold bg-pickle/10 text-pickle rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {selectedSauces.length > 0 && (
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Sauces
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedSauces.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-1 text-xs font-semibold bg-ketchup/10 text-ketchup rounded-md"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Reset */}
              {(Object.keys(selections).length > 0 || selectedToppings.length > 0 || selectedSauces.length > 0) && (
                <button
                  onClick={() => {
                    setSelections({});
                    setSelectedToppings([]);
                    setSelectedSauces([]);
                    setActiveStep(0);
                  }}
                  className="mt-6 w-full py-2.5 text-sm font-semibold text-gray-400 hover:text-charcoal border border-gray-200 hover:border-gray-300 rounded-xl transition-colors"
                >
                  Start Over
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
