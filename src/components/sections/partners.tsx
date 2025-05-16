"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Partners = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-2">PARCEIROS</h2>
          <p className="text-gray-600">Instituições que apoiam este projeto</p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <motion.div className="w-40 h-24 md:w-80 md:h-44 flex items-center justify-center">
            <div className="bg-blue-50 p-4 rounded-lg w-full h-full flex items-center justify-center relative">
              <Image
                src="/aeb.png"
                alt="Agência Espacial Brasileira"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          <motion.div className="w-40 h-24 md:w-80 md:h-44 flex items-center justify-center">
            <div className="bg-blue-50 p-4 rounded-lg w-full h-full flex items-center justify-center relative">
              <Image
                src="/ifprlogo.png"
                alt="Agência Espacial Brasileira"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
