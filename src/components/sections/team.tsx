"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { Link as IconLink } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";
import Link from "next/link";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Rodolfo Barriviera",
      role: "Professor e Coordenador Nacional",
      image: "/wall-aeb.png?height=200&width=200",
      email: "rodolfo.barriviera@ifpr.edu.br",
      lattes: "http://lattes.cnpq.br/6966615403860909",
    },
    {
      name: "Anderson Emidio",
      role: "Professor",
      image: "/wall-aeb.png?height=200&width=200",
      email: "macedo.anderson@gmail.com",
      lattes: "http://lattes.cnpq.br/0959412411005289",
    },
    {
      name: "Antônio Augusto",
      role: "Professor",
      image: "/wall-aeb.png?height=200&width=200",
      email: "augusto.ferreira@ifpr.edu.br",
      lattes: "http://lattes.cnpq.br/8081604140365664",
    },
    {
      name: "Marlon Silvestre",
      role: "Professor",
      image: "/wall-aeb.png?height=200&width=200",
      email: "marlon.kierecz@ifpr.edu.br",
      lattes: "http://lattes.cnpq.br/9724373037298266",
    },
    {
      name: "Ricardo Luíz",
      role: "Professor",
      image: "/wall-aeb.png?height=200&width=200",
      email: "ricardo.tows@ifpr.edu.br",
      lattes: "http://lattes.cnpq.br/9008150713371234",
    },
    {
      name: "Rodrigo Barriviera",
      role: "Professor",
      image: "/wall-aeb.png?height=200&width=200",
      email: "rodrigo.barriviera@ifpr.edu.br",
      lattes: "http://lattes.cnpq.br/9458769391404977",
    },
    {
      name: "Willian Borges",
      role: "Professor",
      image: "/wall-aeb.png?height=200&width=200",
      email: "william.borges@ifpr.edu.br",
      lattes: "http://lattes.cnpq.br/1301478454424902",
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
      setCurrent((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, teamMembers.length, isDesktop]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="equipe" className="py-16 bg-blue-50">
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
            Nossa Equipe
          </h2>
          <p className="text-base text-gray-700 max-w-3xl mx-auto">
            Conheça os professores e coordenadores que irão guiar você nessa
            jornada de aprendizado e empreendedorismo.
          </p>
        </motion.div>

        {isDesktop ? (
          // Desktop Grid View
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={item}>
                <TeamMemberCard member={member} />
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
                  <TeamMemberCard member={teamMembers[current]} />
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white hover:bg-blue-50 text-blue-600 rounded-full p-2 z-10 shadow-md"
              onClick={prev}
              aria-label="Membro anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white hover:bg-blue-50 text-blue-600 rounded-full p-2 z-10 shadow-md"
              onClick={next}
              aria-label="Próximo membro"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false);
                    setCurrent(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index ? "bg-blue-600 w-6" : "bg-blue-200 w-2"
                  }`}
                  aria-label={`Ir para membro ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Extracted TeamMemberCard component for reuse
const TeamMemberCard = ({
  member,
}: {
  member: {
    name: string;
    role: string;
    image: string;
    email: string;
    lattes: string;
  };
}) => {
  return (
    <Card className="overflow-hidden h-full border-blue-100 hover:border-blue-300 transition-colors">
      <div className="aspect-square overflow-hidden bg-blue-100">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          className="w-full h-full object-cover transition-transform hover:scale-105"
          width={200}
          height={200}
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-blue-800">{member.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{member.role}</p>

        <div className="mt-2 flex flex-row gap-2">
          {member.email && (
            <Link href={`mailto:${member.email}`}>
              <Mail className="h-6 w-6 text-blue-400 hover:text-blue-500 cursor-pointer" />
            </Link>
          )}
          <Link href={member.lattes} target="_blank" rel="noopener noreferrer">
            <IconLink className="h-6 w-6 text-blue-400 hover:text-blue-500 cursor-pointer" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamSection;
