import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Phone, Facebook, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sam's Cuts | Barber in Burnley, Walk In Today" },
      {
        name: "description",
        content:
          "Get in touch with Sam's Cuts, your local barber in Burnley. Walk-ins welcome and bookings taken over phone on 07413 536353.",
      },
      { property: "og:title", content: "Contact Sam's Cuts, Barber in Burnley" },
      {
        property: "og:description",
        content:
          "Phone, Facebook, address and opening times for Sam's Cuts barber on Colne Rd, Burnley.",
      },
    ],
  }),
  component: ContactPage,
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

function ContactPage() {
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
            <span className="text-xs uppercase tracking-[0.4em] text-gold">Contact</span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-6">
            Get in <span className="gradient-gold-text italic">Touch</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Walk in for a fresh cut or call ahead to book over phone at our Burnley shop on
            Colne Road.
          </p>
        </motion.div>
      </section>

      <section className="px-6 lg:px-10 pb-10">
        <div className="mx-auto max-w-7xl grid gap-4 lg:grid-cols-[0.9fr_1.35fr_0.75fr]">
          <div className="pole-badge pl-9 pr-6 py-6">
            <div className="text-[10px] uppercase tracking-[0.36em] text-gold">Quickest Route</div>
            <p className="mt-4 font-display text-3xl leading-[1.08] text-foreground">
              Call first.
              <br />
              Walk in second.
            </p>
          </div>
          <div className="premium-panel px-8 py-6">
            <div className="text-[10px] uppercase tracking-[0.36em] text-gold">How To Reach Us</div>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl">
              We keep it direct. Use the phone for bookings and wait checks, use Maps for directions, and use Facebook for updates and shop posts.
            </p>
          </div>
          <div className="premium-panel px-8 py-6">
            <div className="text-[10px] uppercase tracking-[0.36em] text-gold">Best Time</div>
            <div className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Midweek tends to be the easiest for walk-ins. Saturdays are busier, so call ahead.
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
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6"
        >
          <motion.a
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            href="tel:+447413536353"
            className="group pole-badge pl-10 pr-10 py-10 hover:border-gold transition-colors"
          >
            <Phone className="text-gold mb-6" size={28} strokeWidth={1.2} />
            <h2 className="font-display text-2xl mb-3">Call the Shop</h2>
            <div className="gold-divider mb-4" />
            <p className="text-muted-foreground text-sm mb-3">
              Walk-ins and bookings, over phone.
            </p>
            <p className="font-display text-2xl text-gold group-hover:gradient-gold-text">07413 536353</p>
          </motion.a>

          <motion.a
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            href="https://www.facebook.com/p/Sams-Cuts-61552116857669/"
            target="_blank"
            rel="noopener noreferrer"
            className="group premium-panel p-10 hover:border-gold transition-colors"
          >
            <Facebook className="text-gold mb-6" size={28} strokeWidth={1.2} />
            <h2 className="font-display text-2xl mb-3">Facebook</h2>
            <div className="gold-divider mb-4" />
            <p className="text-muted-foreground text-sm mb-3">See updates, shop posts, and contact details.</p>
            <p className="font-display text-2xl text-gold group-hover:gradient-gold-text">Sam's Cuts</p>
          </motion.a>

          <motion.a
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            href="https://www.google.com/maps/search/?api=1&query=Sam%27s%20Cuts%2C%20286%20Colne%20Rd%2C%20Burnley%20BB10%201DZ"
            target="_blank"
            rel="noopener noreferrer"
            className="group premium-panel p-10 hover:border-gold transition-colors"
          >
            <MapPin className="text-gold mb-6" size={28} strokeWidth={1.2} />
            <h2 className="font-display text-2xl mb-3">Visit</h2>
            <div className="gold-divider mb-4" />
            <p className="text-muted-foreground leading-relaxed">
              286 Colne Rd<br />Burnley<br />BB10 1DZ
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.24em] text-gold group-hover:tracking-[0.28em] transition-all">
              Open in Google Maps
            </p>
          </motion.a>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="footer-panel p-10"
          >
            <Clock className="text-gold mb-6" size={28} strokeWidth={1.2} />
            <h2 className="font-display text-2xl mb-3">Hours</h2>
            <div className="gold-divider mb-4" />
            <ul className="text-muted-foreground space-y-2">
              <li className="flex justify-between"><span>Tuesday to Friday</span><span>9:00 to 18:00</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>9:00 to 17:00</span></li>
              <li className="flex justify-between"><span>Sunday &amp; Monday</span><span className="text-gold/80">Closed</span></li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="footer-panel max-w-3xl mx-auto mt-16 text-center p-10"
        >
          <h3 className="font-display text-3xl mb-3">
            Walk in. Sit down. <span className="gradient-gold-text italic">Walk out sharp.</span>
          </h3>
          <p className="text-muted-foreground">
            We keep things simple at Sam's Cuts. Walk in when it suits you, or call ahead to
            book over phone.
          </p>
        </motion.div>
      </section>
    </Layout>
  );
}
