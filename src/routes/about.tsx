import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import hairImage8724 from "../../Hair Images/IMG_8724.jpg";
import hairImage8725 from "../../Hair Images/IMG_8725.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sam's Cuts | Trusted Barber in Burnley" },
      {
        name: "description",
        content:
          "Meet Sam's Cuts, a trusted barber in Burnley known for sharp men's haircuts, skin fades and beard trims. Built on quality, consistency and detail.",
      },
      { property: "og:title", content: "About Sam's Cuts, Trusted Barber in Burnley" },
      {
        property: "og:description",
        content:
          "A premium barber shop in Burnley delivering precision haircuts, skin fades and grooming.",
      },
    ],
  }),
  component: AboutPage,
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

type AboutImageColumn = {
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
  body: string[];
  quote?: string;
  points?: Array<{
    title: string;
    description: string;
  }>;
};

const aboutImageColumns: AboutImageColumn[] = [
  {
    eyebrow: "The Shop",
    title: "Built around sharp, clean work",
    image: hairImage8724,
    imageAlt: "Fresh haircut finished at Sam's Cuts barber shop in Burnley",
    body: [
      "At Sam's Cuts, we're known for delivering high-quality men's haircuts in Burnley with precision and consistency. Whether it's a sharp skin fade or a clean trim, every cut is done with attention to detail.",
      "We've built a strong reputation as a trusted barber in Burnley by focusing on quality, professionalism, and making sure every client leaves looking their best.",
      "Our shop on Colne Road blends the heritage of traditional barbering with a modern, welcoming feel. The kind of place you'll want to come back to.",
    ],
    quote: "Good barbering should feel precise, relaxed, and unmistakably local.",
  },
  {
    eyebrow: "Our Standard",
    title: "Built on trust",
    image: hairImage8725,
    imageAlt: "Detailed barber haircut and fade work by Sam's Cuts Burnley",
    body: [
      "Clear conversation, clean finishing, and no cutting corners once the shape is there. That is the standard.",
    ],
    points: [
      { title: "Precision", description: "Every fade blended seamlessly. Every line clean." },
      { title: "Consistency", description: "The same sharp cut, every visit." },
      { title: "Respect", description: "We take time. We take pride. We take care." },
    ],
  },
];

function AboutPage() {
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
            <span className="text-xs uppercase tracking-[0.4em] text-gold">About Us</span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-6">
            Your Local <span className="gradient-gold-text italic">Barber</span> in Burnley
          </h1>
        </motion.div>
      </section>

      <section className="section-orbit pb-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Real Work"
            title={
              <>
                Inside <span className="gradient-gold-text italic">Sam's Cuts</span>
              </>
            }
          />
          <div className="mt-14 space-y-20">
            {aboutImageColumns.map((column, index) => (
              <AboutImageColumnSection key={column.title} column={column} index={index} />
            ))}
          </div>
          <div className="mt-20 border border-gold/20 bg-card px-7 py-8 text-center shadow-soft md:px-10">
            <div className="text-[10px] uppercase tracking-[0.36em] text-gold">See The Work</div>
            <p className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-[1.12] text-foreground md:text-4xl">
              The full haircut set lives in the gallery, so this page stays focused on the shop
              story.
            </p>
            <Link
              to="/gallery"
              className="mt-7 inline-flex border border-gold/80 px-7 py-3 text-[11px] uppercase tracking-[0.24em] text-gold transition-colors hover:bg-gold hover:text-background"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function AboutImageColumnSection({ column, index }: { column: AboutImageColumn; index: number }) {
  const reverse = index % 2 === 1;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <motion.figure
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className={[
          "luxury-ring photo-depth relative min-h-[420px] overflow-hidden border border-border bg-card shadow-soft md:min-h-[560px]",
          reverse ? "lg:order-2" : "",
        ].join(" ")}
      >
        <img
          src={column.image}
          alt={column.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          loading={index === 0 ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        <figcaption className="absolute bottom-6 left-6 right-6">
          <span className="inline-flex bg-background/80 px-4 py-2 text-[10px] uppercase tracking-[0.34em] text-gold backdrop-blur">
            {column.eyebrow}
          </span>
        </figcaption>
      </motion.figure>

      <motion.div
        initial={{ opacity: 0, x: reverse ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className={reverse ? "lg:order-1" : ""}
      >
        <div className="text-[10px] uppercase tracking-[0.38em] text-gold">{column.eyebrow}</div>
        <h2 className="mt-4 font-display text-4xl leading-[1.02] md:text-5xl">{column.title}</h2>
        <div className="mt-7 space-y-5 text-lg leading-relaxed text-muted-foreground">
          {column.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {column.quote ? (
          <div className="premium-panel mt-8 px-7 py-7">
            <p className="editorial-quote font-display text-3xl leading-[1.12] text-foreground">
              {column.quote}
            </p>
          </div>
        ) : null}

        {column.points ? (
          <motion.div
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="premium-panel mt-8 space-y-6 px-7 py-7"
          >
            {column.points.map((point) => (
              <motion.div
                key={point.title}
                variants={fadeUp}
                className="border-l-2 border-gold pl-5"
              >
                <h3 className="font-display text-xl mb-1">{point.title}</h3>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        ) : null}
      </motion.div>
    </div>
  );
}
