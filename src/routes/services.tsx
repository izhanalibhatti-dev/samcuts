import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ArrowRight, Scissors, Sparkles, Award, Wand2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Barber Services in Burnley | Skin Fades, Haircuts & Beard Trims, Sam's Cuts" },
      {
        name: "description",
        content:
          "Men's haircuts, skin fades, beard trims and full grooming in Burnley. Sharp, consistent barber services at Sam's Cuts on Colne Rd.",
      },
      { property: "og:title", content: "Barber Services in Burnley, Sam's Cuts" },
      {
        property: "og:description",
        content:
          "Skin fades, men's haircuts, beard trims and full grooming. Premium barber services in Burnley.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Scissors,
    name: "Men's Haircut",
    price: "£15",
    tag: "Everyday sharp",
    desc: "Precision men's haircuts in Burnley. Consultation, cut, style and finish, tailored to your face shape and how you wear your hair day to day.",
  },
  {
    icon: Sparkles,
    name: "Skin Fade",
    price: "£18",
    tag: "Most requested",
    desc: "Our signature service. Skin fade haircuts in Burnley delivered with seamless blends, from a tight skin fade to a soft taper. Every gradient is sharp.",
  },
  {
    icon: Award,
    name: "Beard Trim",
    price: "£10",
    tag: "Clean finish",
    desc: "Expert beard trims in Burnley. Shaped, lined and finished with care so the beard frames the cut and suits the jaw.",
  },
  {
    icon: Wand2,
    name: "Cut & Beard",
    price: "£23",
    tag: "Popular combo",
    desc: "Full haircut paired with a tailored beard trim. The most popular package at Sam's Cuts for men in Burnley.",
  },
  {
    icon: Sparkles,
    name: "Hot Towel Shave",
    price: "£20",
    tag: "Traditional ritual",
    desc: "Traditional hot towel straight razor shave. A proper barber experience in Burnley. Slow, precise and finished with balm.",
  },
  {
    icon: Award,
    name: "Full Grooming",
    price: "£35",
    tag: "Complete service",
    desc: "Cut, beard work and hot towel finish in one sitting. The complete grooming session at our Burnley barber shop.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

function ServicesPage() {
  return (
    <Layout>
      <section className="section-orbit py-24 px-6 lg:px-10 grain">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold">Services</span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-6">
            Barber Services in <span className="gradient-gold-text italic">Burnley</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Every service at Sam's Cuts is performed with the same standard. Precision,
            consistency and respect for the craft. Walk in today or call to book over phone.
          </p>
        </motion.div>
      </section>

      <section className="px-6 lg:px-10 pb-10">
        <div className="mx-auto max-w-7xl grid gap-4 lg:grid-cols-[0.85fr_1.45fr_0.7fr]">
          <div className="pole-badge pl-9 pr-6 py-6">
            <div className="text-[10px] uppercase tracking-[0.34em] text-gold">Craft Notes</div>
            <p className="mt-4 font-display text-3xl leading-[1.08] text-foreground">
              Less conveyor belt.
              <br />
              More finish.
            </p>
          </div>
          <div className="premium-panel px-8 py-6">
            <div className="text-[10px] uppercase tracking-[0.34em] text-gold">How We Work</div>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl">
              Consultation first, clean execution second, final mirror check last. Every service is designed to feel straightforward, sharp, and worth coming back for.
            </p>
          </div>
          <div className="premium-panel px-8 py-6">
            <div className="text-[10px] uppercase tracking-[0.34em] text-gold">Quick View</div>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <div className="flex justify-between"><span>Walk-ins</span><span className="text-gold">Welcome</span></div>
              <div className="flex justify-between"><span>Phone bookings</span><span className="text-gold">Available</span></div>
              <div className="flex justify-between"><span>From</span><span className="text-gold">£10</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-orbit pb-28 px-6 lg:px-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s, index) => (
            <motion.div
              key={s.name}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group premium-panel p-8 hover:border-gold transition-colors"
            >
              <div className="barber-stripe absolute inset-y-0 right-0 w-3 opacity-80" />
              <div className="mb-4 font-display text-4xl text-gold/25">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="mb-4 text-[10px] uppercase tracking-[0.34em] text-gold">{s.tag}</div>
              <div className="flex items-start justify-between mb-6">
                <s.icon className="text-gold" size={28} strokeWidth={1.2} />
                <span className="font-display text-2xl text-gold">{s.price}</span>
              </div>
              <h2 className="font-display text-2xl mb-3">{s.name}</h2>
              <div className="gold-divider mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="max-w-5xl mx-auto mt-20 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="footer-panel px-8 py-8">
            <div className="text-[10px] uppercase tracking-[0.34em] text-gold">What to Expect</div>
            <p className="editorial-quote mt-5 font-display text-3xl leading-[1.12] text-foreground">
              Service should feel calm, not rushed. The finish should look right from every angle.
            </p>
          </div>
          <div className="premium-panel px-8 py-8">
            <div className="text-[10px] uppercase tracking-[0.34em] text-gold">Note</div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Prices are a guide. Final price may vary depending on service length and style.
            </p>
            <a
              href="tel:+447413536353"
              className="mt-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-gold hover:gap-4 transition-all"
            >
              Call To Check Availability
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
