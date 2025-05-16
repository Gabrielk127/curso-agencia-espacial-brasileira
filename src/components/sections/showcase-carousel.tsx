"use client";

import { motion } from "framer-motion";
import MultiCardCarousel from "@/components/carousel/multi-card-carousel";

const carouselCards = [
  {
    image: "/showcase/aplicacoes-e-dados.png",
    title: "Aplicações e dados",
  },
  {
    image: "/showcase/desenvolvimento-de-startup.png",
    title: "Desenvolvimento de Startup",
  },
  {
    image: "/showcase/direito.png",
    title: "Direito",
  },
  {
    image: "/showcase/estudo-de-caso.png",
    title: "Estudo de Caso",
  },
  {
    image: "/showcase/ia-aplicada-1.png",
    title: "IA Aplicada 1",
  },
  {
    image: "/showcase/metodologia.png",
    title: "Metodologia",
  },
  {
    image: "/showcase/microeletronica.png",
    title: "Micro Eletrônica",
  },
  {
    image: "/showcase/nanosatelite.png",
    title: "Nano Satélites",
  },
  {
    image: "/showcase/python.png",
    title: "Python",
  },
  {
    image: "/showcase/startup.png",
    title: "Startup",
  },
  {
    image: "/showcase/unicornio.png",
    title: "Unicórnio",
  },
];

export default function ShowcaseCarousel() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Conheça Nossos Temas
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore os principais tópicos abordados no curso e descubra como
            eles podem transformar sua jornada empreendedora.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <MultiCardCarousel cards={carouselCards} autoplaySpeed={6000} />
        </motion.div>
      </div>
    </section>
  );
}
