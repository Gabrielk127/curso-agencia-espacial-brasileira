"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Comece sua jornada empreendedora agora mesmo
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Inscreva-se gratuitamente e tenha acesso a todo o conteúdo do curso,
            mentorias e certificação oficial pelo Instituto Federal do Paraná.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLSfq00RIPollGqeJsmqaYqWOpm9ZfP6-pITh1ziyYypT-xCuCQ/viewform'>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg font-bold"
              >
              QUERO ME INSCREVER
            </Button>
              </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
