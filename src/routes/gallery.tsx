import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import hairImage8721 from "../../Hair Images/IMG_8721.jpg";
import hairImage8722 from "../../Hair Images/IMG_8722.jpg";
import hairImage8723 from "../../Hair Images/IMG_8723.jpg";
import hairImage8724 from "../../Hair Images/IMG_8724.jpg";
import hairImage8725 from "../../Hair Images/IMG_8725.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Our Work | Skin Fades & Haircuts Gallery, Sam's Cuts Burnley" },
      {
        name: "description",
        content:
          "See our recent work. Men's fade haircuts, skin fades and beard trims from Sam's Cuts barber in Burnley.",
      },
      { property: "og:title", content: "Gallery, Sam's Cuts Burnley" },
      {
        property: "og:description",
        content: "Real photos of haircuts, skin fades and beard work by Sam's Cuts, Burnley.",
      },
    ],
  }),
  component: GalleryPage,
});

const galleryImages = [
  {
    src: hairImage8724,
    alt: "Fresh men's haircut at Sam's Cuts barber shop in Burnley",
    label: "Fresh Finish",
    detail: "Clean shape, sharp finish, ready to leave the chair.",
    height: 540,
  },
  {
    src: hairImage8721,
    alt: "Clean fade haircut from Sam's Cuts barber in Burnley",
    label: "Fade Detail",
    detail: "Balanced blend with tidy edges and a natural shape.",
    height: 470,
  },
  {
    src: hairImage8722,
    alt: "Finished men's haircut by Sam's Cuts Burnley",
    label: "Client Ready",
    detail: "A cut that looks sharp in the shop and works day to day.",
    height: 560,
  },
  {
    src: hairImage8723,
    alt: "Modern men's haircut at Sam's Cuts barber shop Burnley",
    label: "Modern Cut",
    detail: "Texture, weight and finish checked from every angle.",
    height: 500,
  },
  {
    src: hairImage8725,
    alt: "Detailed haircut and fade work by Sam's Cuts Burnley",
    label: "Sharp Standard",
    detail: "The kind of detail that makes the final mirror check matter.",
    height: 430,
  },
];

function GalleryPage() {
  const [featuredImage, ...supportingImages] = galleryImages;

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
            <span className="text-xs uppercase tracking-[0.4em] text-gold">Our Work</span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-6">
            <span className="gradient-gold-text italic">Real cuts.</span> Real clients.
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            A look at recent work from the chair. Fades, trims and beard work at our Burnley barber
            shop.
          </p>
        </motion.div>
      </section>

      <section className="px-6 lg:px-10 pb-10">
        <div className="mx-auto max-w-7xl grid gap-4 lg:grid-cols-[0.9fr_1.45fr_0.7fr]">
          <div className="pole-badge pl-9 pr-6 py-6">
            <div className="text-[10px] uppercase tracking-[0.36em] text-gold">Gallery Mood</div>
            <p className="mt-4 font-display text-3xl leading-[1.08] text-foreground">
              Real cuts.
              <br />
              Real finish.
            </p>
          </div>
          <div className="premium-panel px-8 py-6">
            <div className="text-[10px] uppercase tracking-[0.36em] text-gold">
              What Belongs Here
            </div>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl">
              Use clear, confident photos from the chair. Focus on shape, fade blends, beard lines,
              and the final finish rather than random room shots.
            </p>
          </div>
          <div className="premium-panel px-8 py-6">
            <div className="text-[10px] uppercase tracking-[0.36em] text-gold">Best Shots</div>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <div>Side profile fades</div>
              <div>Beard line detail</div>
              <div>Before/after pairs</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-orbit pb-28 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.figure
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="photo-depth group relative mb-6 min-h-[560px] overflow-hidden border border-gold/20 bg-card shadow-soft"
          >
            <img
              src={featuredImage.src}
              alt={featuredImage.alt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/82 via-background/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent" />
            <figcaption className="absolute bottom-0 left-0 max-w-2xl p-7 md:p-10">
              <div className="text-[10px] uppercase tracking-[0.38em] text-gold">
                {featuredImage.label}
              </div>
              <h2 className="mt-4 font-display text-4xl leading-[1.02] text-foreground md:text-6xl">
                Real work from the chair.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                {featuredImage.detail}
              </p>
            </figcaption>
          </motion.figure>

          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]">
            {supportingImages.map((image, i) => (
              <motion.figure
                key={image.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="photo-depth group relative mb-6 break-inside-avoid overflow-hidden border border-border bg-card shadow-soft"
                style={{ height: `${image.height}px` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-95" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[10px] uppercase tracking-[0.34em] text-gold">
                    {image.label}
                  </span>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    {image.detail}
                  </p>
                </figcaption>
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-gold/70 via-transparent to-transparent" />
              </motion.figure>
            ))}
          </div>

          <div className="footer-panel mx-auto mt-12 max-w-3xl p-8 text-center">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Every photo here is real work from Sam's Cuts in Burnley. As new cuts are
              photographed, this gallery can grow without changing the page structure.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
