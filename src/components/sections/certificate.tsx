"use client";
import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const CertificateSection = () => {
  return (
    <section id="certificado" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-6">
              Certificado
            </h2>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">
                    O que vou aprender?
                  </h3>
                  <p className="text-gray-600">
                    Você aprenderá programação Python, aplicações espaciais,
                    estrutura de dados, metodologias de empreendedorismo, gestão
                    de equipes e muito mais.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">
                    O certificado é gratuito?
                  </h3>
                  <p className="text-gray-600">
                    Sim, o certificado é totalmente gratuito. Ao concluir o
                    curso, você receberá um certificado oficial emitido pelo
                    Instituto Federal do Paraná.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">
                    Certificação
                  </h3>
                  <p className="text-gray-600">
                    O Instituto Federal do Paraná (IFPR) é uma instituição
                    pública federal voltada à educação superior, básica e
                    profissional, especializada na oferta gratuita de educação
                    profissional e irá ao final do curso emitir um certificado
                    de conclusão do curso em nível federal para cada aluno
                    concluinte.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-blue-50 rounded-lg p-2 md:p-8 overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-200 rounded-full opacity-50"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-200 rounded-full opacity-50"></div>

              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <Award className="h-20 w-20 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800 text-center mb-4">
                  Certificado Oficial
                </h3>
                <div className="bg-white rounded-lg p-2 md:p-6 shadow-lg">
                  <div className="border-2 border-blue-200 border-dashed p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-xs text-blue-600 font-bold">
                          IF
                        </span>
                      </div>
                      <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-xs text-blue-600 font-bold">
                          AEB
                        </span>
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-blue-800 mb-2">
                        CERTIFICADO
                      </h4>
                      <p className="text-gray-600 text-sm mb-4">
                        Certificamos que{" "}
                        <span className="font-semibold">NOME DO ALUNO</span>{" "}
                        concluiu com êxito o curso de
                      </p>
                      <p className="text-blue-800 font-bold mb-4">
                        CRIAÇÃO DE STARTUPS COM TECNOLOGIAS ESPACIAIS
                      </p>
                      <p className="text-gray-600 text-sm">
                        Com carga horária de 189 horas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
