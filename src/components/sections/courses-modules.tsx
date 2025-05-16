"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Database,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

const CourseModules = () => {
  const modules = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "PYTHON",
      description:
        "Linguagens de Programação Python, desde o Funcionamento a Aplicações",
    },
    {
      icon: <Database className="h-8 w-8 text-blue-600" />,
      title: "Aplicações Espaciais e Dados",
      description:
        "Estudos de casos de aplicações espaciais e Estrutura de dados",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
      title: "Metodologia Empreendedora Com Foco Em Startups",
      description:
        "Conceitos básicos de empreendedorismo, Liderança, Gestão de equipe, Inovação tecnológica",
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
      setCurrent((prev) => (prev === modules.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, modules.length, isDesktop]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === modules.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === 0 ? modules.length - 1 : prev - 1));
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 bg-white">
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
            Módulos do Curso
          </h2>
          <p className="text-base text-gray-700 max-w-3xl mx-auto">
            Conheça os principais módulos que você irá estudar durante o curso
            para desenvolver suas habilidades em tecnologia e empreendedorismo.
          </p>
        </motion.div>

        {isDesktop ? (
          // Desktop Grid View
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {modules.map((module, index) => (
              <motion.div key={index} variants={item}>
                <Card className="h-full border-blue-100 hover:border-blue-300 transition-colors pt-6">
                  <CardHeader className="pb-2">
                    <div className="mb-4">{module.icon}</div>
                    <CardTitle className="text-xl text-blue-800">
                      {module.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{module.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
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
                >
                  <Card className="border-blue-100 ">
                    <CardHeader className="pb-2 pt-2">
                      <div className="mb-4">{modules[current].icon}</div>
                      <CardTitle className="text-xl text-blue-800">
                        {modules[current].title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        {modules[current].description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white hover:bg-blue-50 text-blue-600 rounded-full p-2 z-10 shadow-md"
              onClick={prev}
              aria-label="Módulo anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white hover:bg-blue-50 text-blue-600 rounded-full p-2 z-10 shadow-md"
              onClick={next}
              aria-label="Próximo módulo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {modules.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false);
                    setCurrent(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index ? "bg-blue-600 w-6" : "bg-blue-200 w-2"
                  }`}
                  aria-label={`Ir para módulo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center">
            <div className="h-px w-12 bg-blue-300 mr-4"></div>
            <h3 className="text-xl font-semibold text-blue-800">
              Duração do Curso
            </h3>
            <div className="h-px w-12 bg-blue-300 ml-4"></div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-blue-800 mb-2">Duração</h4>
              <p className="text-gray-700">
                O curso tem uma duração de 3 meses, 189 horas.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-blue-800 mb-2">Online</h4>
              <p className="text-gray-700">Aulas gravadas e lives ao-vivo!</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-blue-800 mb-2">
                Certificado
              </h4>
              <p className="text-gray-700">
                Certificação oficial pelo IFPR ao concluir o curso.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseModules;
