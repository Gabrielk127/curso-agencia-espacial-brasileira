"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

export function CTASection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="high-contrast-border bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-white/30 rounded-full -mr-16 sm:-mr-32 -mt-16 sm:-mt-32" />
          <div className="absolute bottom-0 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-white/30 rounded-full -ml-16 sm:-ml-32 -mb-16 sm:-mb-32" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:gap-8">
            <div className="w-full text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 mb-3 md:mb-4">
                Comece sua jornada empreendedora agora mesmo
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-[900px] mx-auto">
                Inscreva-se gratuitamente e tenha acesso a todo o conteúdo do
                curso, mentorias e certificação oficial pelo Instituto Federal
                do Paraná.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 text-lg font-bold cursor-pointer"
              >
                Quero me Inscrever
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
