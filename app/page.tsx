"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const signaturePours = [
  {
    title: "Citrus Bloom",
    notes: "Ethiopian heirloom with mandarin zest, jasmine, and cocoa nibs.",
    price: "$6",
    vibe: "Bright + floral",
  },
  {
    title: "Maple Drift",
    notes: "Washed Colombia, amber maple, toasted pecan, and cacao.",
    price: "$6.5",
    vibe: "Smooth + caramel",
  },
  {
    title: "Midnight Rookie",
    notes: "Sumatra and Peru blend with cedar, dark chocolate, and sea salt.",
    price: "$6.75",
    vibe: "Bold + layered",
  },
];

const rituals = [
  {
    title: "Morning Bar",
    detail: "Slow pour and seasonal fruit pairings for an unhurried start.",
  },
  {
    title: "Community Table",
    detail: "Shared seating, rotating roasters, and weekly tasting notes.",
  },
  {
    title: "Studio Nights",
    detail: "Vinyl sets, art pop-ups, and late-night espresso flights.",
  },
];

export default function Home() {
  const heroArtRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroArtRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(".steam", {
        y: -18,
        opacity: 0,
        duration: 2.2,
        repeat: -1,
        ease: "power1.out",
        stagger: 0.6,
      });
      gsap.to(".bean", {
        y: -10,
        rotate: 6,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.25,
      });
    }, heroArtRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="page-shell min-h-screen">
      <div className="ambient-grid min-h-screen">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-20 pt-10 sm:px-10">
          <nav className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--espresso)] text-sm font-semibold text-[color:var(--mist)]">
                RC
              </div>
              <div>
                <p className="font-display text-xl text-[color:var(--espresso)]">
                  Rookie Cafe
                </p>
                <p className="text-[11px] uppercase tracking-[0.35em] text-[color:var(--sage)]">
                  Coffee House
                </p>
              </div>
            </div>
            <div className="hidden items-center gap-8 text-sm font-medium text-[color:var(--cacao)] md:flex">
              <a className="transition hover:text-[color:var(--espresso)]" href="#menu">
                Menu
              </a>
              <a className="transition hover:text-[color:var(--espresso)]" href="#rituals">
                Rituals
              </a>
              <a className="transition hover:text-[color:var(--espresso)]" href="#visit">
                Visit
              </a>
            </div>
            <button className="button-primary rounded-full px-5 py-3 text-sm font-semibold">
              Reserve a table
            </button>
          </nav>

          <main className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              <span className="tag w-fit rounded-full px-4 py-2 text-xs uppercase tracking-[0.3em] text-[color:var(--sage)]">
                Small batch roastery
              </span>
              <h1 className="font-display section-title text-4xl leading-tight text-[color:var(--espresso)] sm:text-5xl lg:text-6xl">
                Rookie Cafe is the slow-brewed ritual for curious mornings.
              </h1>
              <p className="max-w-xl text-base leading-7 text-[color:var(--cacao)] sm:text-lg">
                We pair carefully sourced beans with bright rituals, vinyl afternoons, and a
                kitchen that smells like cardamom. Step in for pour-overs, stay for the
                community table.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="button-primary rounded-full px-6 py-3 text-sm font-semibold">
                  Order ahead
                </button>
                <button className="button-secondary rounded-full px-6 py-3 text-sm font-semibold">
                  Explore the space
                </button>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Roasts weekly", value: "12" },
                  { label: "Origin partners", value: "18" },
                  { label: "Brew methods", value: "7" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-card rounded-2xl px-4 py-4 text-sm"
                  >
                    <p className="font-display text-2xl text-[color:var(--espresso)]">
                      {stat.value}
                    </p>
                    <p className="text-[color:var(--cacao)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <div ref={heroArtRef} className="relative">
              <div className="glass-card relative overflow-hidden rounded-[32px] p-8">
                <div className="absolute left-8 top-8 flex flex-col gap-3">
                  <span className="tag rounded-full px-3 py-2 text-xs text-[color:var(--espresso)]">
                    Limited roast
                  </span>
                  <span className="tag rounded-full px-3 py-2 text-xs text-[color:var(--espresso)]">
                    Tasting flight
                  </span>
                </div>
                <div className="relative mx-auto mt-10 flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72">
                  <div className="hero-orb absolute inset-0 rounded-full" aria-hidden="true" />
                  <div className="relative z-10 flex h-44 w-44 items-center justify-center rounded-full bg-[color:var(--mist)] shadow-2xl">
                    <div className="h-24 w-24 rounded-full bg-[color:var(--espresso)]" />
                  </div>
                  <div className="steam absolute left-16 top-4 h-16 w-4 rounded-full opacity-60" />
                  <div className="steam absolute left-28 top-2 h-20 w-4 rounded-full opacity-40" />
                  <div className="steam absolute left-40 top-6 h-14 w-4 rounded-full opacity-50" />
                </div>
                <div className="mt-10 grid grid-cols-3 gap-3">
                  {["Caramel", "Citrus", "Cacao"].map((note, index) => (
                    <div
                      key={note}
                      className="bean rounded-full bg-[color:var(--latte)] px-3 py-2 text-center text-xs font-semibold text-[color:var(--espresso)]"
                      style={{ rotate: `${index * 6 - 6}deg` }}
                    >
                      {note}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>

          <section id="menu" className="grid gap-10">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--sage)]">
                  Signature menu
                </p>
                <h2 className="font-display section-title text-3xl text-[color:var(--espresso)] sm:text-4xl">
                  Rookie pours that wake up the city.
                </h2>
              </div>
              <button className="button-secondary rounded-full px-5 py-2 text-sm font-semibold">
                Full menu
              </button>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {signaturePours.map((item) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="glass-card flex h-full flex-col gap-4 rounded-3xl p-6"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl text-[color:var(--espresso)]">
                      {item.title}
                    </h3>
                    <span className="text-sm font-semibold text-[color:var(--terracotta)]">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-[color:var(--cacao)]">
                    {item.notes}
                  </p>
                  <span className="tag w-fit rounded-full px-3 py-1 text-xs text-[color:var(--sage)]">
                    {item.vibe}
                  </span>
                </motion.article>
              ))}
            </div>
          </section>

          <section id="rituals" className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="glass-card rounded-3xl p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--sage)]">
                The Rookie Rituals
              </p>
              <h2 className="font-display section-title mt-3 text-3xl text-[color:var(--espresso)] sm:text-4xl">
                A coffee shop shaped by rituals, not rushes.
              </h2>
              <p className="mt-4 text-base leading-7 text-[color:var(--cacao)]">
                Every detail is tuned for lingering. From the aroma bar to the sound system,
                Rookie Cafe is designed for the quiet focus of a journal session or the soft
                energy of a late-afternoon catch-up.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="tag rounded-full px-4 py-2 text-xs text-[color:var(--espresso)]">
                  Handcrafted syrups
                </span>
                <span className="tag rounded-full px-4 py-2 text-xs text-[color:var(--espresso)]">
                  Vinyl listening nook
                </span>
                <span className="tag rounded-full px-4 py-2 text-xs text-[color:var(--espresso)]">
                  Seasonal bakery
                </span>
              </div>
            </div>
            <div className="grid gap-4">
              {rituals.map((ritual) => (
                <motion.div
                  key={ritual.title}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="glass-card rounded-2xl p-5"
                >
                  <h3 className="font-display text-xl text-[color:var(--espresso)]">
                    {ritual.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--cacao)]">
                    {ritual.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="visit" className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-card rounded-3xl p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--sage)]">
                Visit Rookie Cafe
              </p>
              <h2 className="font-display section-title mt-3 text-3xl text-[color:var(--espresso)] sm:text-4xl">
                Find your corner in the warm light.
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--sage)]">
                    Hours
                  </p>
                  <p className="mt-2 text-base text-[color:var(--espresso)]">
                    Mon - Fri: 7am - 8pm
                  </p>
                  <p className="text-base text-[color:var(--espresso)]">
                    Sat - Sun: 8am - 9pm
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--sage)]">
                    Location
                  </p>
                  <p className="mt-2 text-base text-[color:var(--espresso)]">
                    140 Juniper Lane
                  </p>
                  <p className="text-base text-[color:var(--espresso)]">
                    Harbor District
                  </p>
                </div>
              </div>
              <button className="button-primary mt-6 rounded-full px-6 py-3 text-sm font-semibold">
                Get directions
              </button>
            </div>
            <div className="glass-card relative overflow-hidden rounded-3xl p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--latte)] via-transparent to-[color:var(--terracotta)] opacity-70" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--sage)]">
                    Weekly lineup
                  </p>
                  <h3 className="font-display mt-3 text-2xl text-[color:var(--espresso)]">
                    Rookie Sessions
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--cacao)]">
                    Live vinyl, latte art lab, and tasting circles every Thursday night.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "6 PM Latte Lab",
                    "7 PM Vinyl Set",
                    "8 PM Tasting Flight",
                  ].map((slot) => (
                    <span
                      key={slot}
                      className="tag rounded-full px-3 py-2 text-xs text-[color:var(--espresso)]"
                    >
                      {slot}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="glass-card flex flex-col items-start justify-between gap-6 rounded-[32px] px-8 py-10 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--sage)]">
                Rookie Club
              </p>
              <h2 className="font-display section-title mt-3 text-3xl text-[color:var(--espresso)]">
                Join for seasonal drops and early tastings.
              </h2>
            </div>
            <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input
                className="w-full rounded-full border border-[color:var(--latte)] bg-white/70 px-4 py-3 text-sm"
                placeholder="Email address"
                type="email"
              />
              <button className="button-primary rounded-full px-6 py-3 text-sm font-semibold">
                Join now
              </button>
            </div>
          </section>
        </div>
      </div>
      <footer className="border-t border-[color:var(--latte)] bg-white/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-[color:var(--cacao)] sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <span>Rookie Cafe. Slow mornings, faster hearts.</span>
          <div className="flex flex-wrap gap-5">
            <a className="hover:text-[color:var(--espresso)]" href="#menu">
              Menu
            </a>
            <a className="hover:text-[color:var(--espresso)]" href="#rituals">
              Rituals
            </a>
            <a className="hover:text-[color:var(--espresso)]" href="#visit">
              Visit
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
