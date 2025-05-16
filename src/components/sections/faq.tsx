"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Quem pode participar do curso?",
      answer:
        "O curso é aberto para qualquer pessoa interessada em empreendedorismo e tecnologias espaciais, independentemente do nível de conhecimento prévio.",
    },
    {
      question: "Quanto tempo tenho para concluir o curso?",
      answer:
        "O curso tem duração de 3 meses (189 horas), mas você terá acesso ao conteúdo por 6 meses após a inscrição.",
    },
    {
      question: "Preciso ter conhecimento prévio em programação?",
      answer:
        "Não é necessário conhecimento prévio em programação. O curso foi estruturado para atender desde iniciantes até pessoas com experiência.",
    },
    {
      question: "Como funciona a certificação?",
      answer:
        "Ao concluir todas as atividades do curso, você receberá um certificado oficial emitido pelo Instituto Federal do Paraná (IFPR).",
    },
    {
      question: "O curso é realmente gratuito?",
      answer:
        "Sim, o curso é totalmente gratuito, incluindo o certificado de conclusão.",
    },
    {
      question: "Terei acesso a mentorias durante o curso?",
      answer:
        "Sim, o curso inclui mentorias ao vivo com os professores e especialistas da área.",
    },
  ];

  return (
    <section id="faq" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-xl md:text-4xl font-bold text-blue-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-base text-gray-700 max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre o curso.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-blue-800 cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Ainda tem dúvidas? Entre em contato conosco
          </p>
          {/* <a
            href="mailto:contato@startupspace.com.br"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            contato@startupspace.com.br
          </a> */}
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
