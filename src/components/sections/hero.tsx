"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-4xl lg:text-4xl font-bold text-blue-900 leading-tight mb-6"
            >
              CRIE SUA PRÓPRIA <span className="text-blue-600">STARTUP </span>
              GRATUITAMENTE
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative md:hidden mb-12"
            >
              <div className="relative w-full h-[200px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/hero.jpg"
                    alt="Ilustração de uma startup espacial"
                    className="w-full h-full object-cover"
                    fill
                  />
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-2 rounded-lg shadow-lg"
              >
                <p className="text-lg font-bold">3 meses</p>
                <p className="text-sm">189 horas de curso</p>
              </motion.div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-md md:text-xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Crie todo o planejamento da sua startup com o apoio da Agência
              Espacial Brasileira (AEB) e Instituto Federal do Paraná (IFPR) a
              partir do conhecimento das tecnologias emergentes e dados dos
              satélites brasileiros.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-lg h-12 cursor-pointer">
                Quero me Inscrever
              </Button>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg h-12 cursor-pointer"
              >
                Conheça o Curso <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8"
            >
              <p className="text-sm text-gray-500 mb-2">
                ACOMPANHE NAS REDES SOCIAIS
              </p>
              <div className="flex justify-center lg:justify-start space-x-4">
                <Link
                  href="https://instagram.com"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  INSTAGRAM
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  LINKEDIN
                </Link>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:flex"
          >
            <div className="relative w-full h-[400px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/hero.jpg"
                  alt="Ilustração de uma startup espacial"
                  className="w-full h-full object-cover"
                  fill
                />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg"
            >
              <p className="text-xl font-bold">3 meses</p>
              <p className="text-sm">189 horas de curso</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    </section>
  );
};

export default Hero;
