"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Users,
  Rocket,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

const CourseFeatures = () => {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-blue-600" />,
      title: "Conhecimento Técnico",
      description:
        "Você aprenderá a combinar conhecimento técnico avançado, estratégias empresariais e compreensão dos aspectos legais e humanos.",
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "Metodologia Empreendedora",
      description:
        "Conceitos básicos de empreendedorismo, Liderança, Gestão de equipe e Inovação tecnológica.",
    },
    {
      icon: <Rocket className="h-10 w-10 text-blue-600" />,
      title: "Tecnologias Espaciais",
      description:
        "Atue de forma eficaz em áreas inovadoras e tecnológicas, com uma ênfase especial em tecnologias espaciais e suas aplicações.",
    },
  ];

  const ref = useRef(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Carousel state
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay || isDesktop) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === features.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, features.length, isDesktop]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  return (
    <section
      id="curso"
      className="py-16 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-xl md:text-4xl font-bold text-blue-900 mb-4">
            Veja algumas das disciplinas do curso que terá acesso
          </h2>
          <p className="text-base text-gray-700 max-w-3xl mx-auto">
            Você aprenderá a combinar conhecimento técnico avançado, estratégias
            empresariais e compreensão dos aspectos legais e humanos para atuar
            de forma eficaz em áreas inovadoras e tecnológicas, com uma ênfase
            especial em tecnologias espaciais e suas aplicações.
          </p>
        </motion.div>

        {isDesktop ? (
          // Desktop Grid View
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          // Mobile Carousel View
          <div className="relative max-w-md mx-auto">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="bg-white rounded-lg shadow-lg p-8"
                >
                  <div className="mb-4">{features[current].icon}</div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3">
                    {features[current].title}
                  </h3>
                  <p className="text-gray-600">
                    {features[current].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white hover:bg-blue-50 text-blue-600 rounded-full p-2 z-10 shadow-md"
              onClick={prev}
              aria-label="Recurso anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white hover:bg-blue-50 text-blue-600 rounded-full p-2 z-10 shadow-md"
              onClick={next}
              aria-label="Próximo recurso"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false);
                    setCurrent(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index ? "bg-blue-600 w-6" : "bg-blue-200 w-2"
                  }`}
                  aria-label={`Ir para recurso ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseFeatures;
