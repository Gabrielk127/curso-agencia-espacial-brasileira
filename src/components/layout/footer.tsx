"use client";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* <h3 className="text-xl font-bold mb-4 text-white">StartupSpace</h3> */}
            <p className="text-blue-200 mb-4">
              Crie todo o planejamento da sua startup com o apoio da Agência
              Espacial Brasileira (AEB) e Instituto Federal do Paraná (IFPR).
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              {/* <Link
                href="mailto:contato@startupspace.com.br"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="#curso"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Sobre o Curso
                </Link>
              </li>
              <li>
                <Link
                  href="#equipe"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Nossa Equipe
                </Link>
              </li>
              <li>
                <Link
                  href="#certificado"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Certificação
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* <h3 className="text-xl font-bold mb-4 text-white">Contato</h3> */}
            <p className="text-blue-200 mb-2">
              Agência Espacial Brasileira (AEB)
            </p>
            <p className="text-blue-200 mb-2">
              Instituto Federal do Paraná (IFPR)
            </p>
            {/* <p className="text-blue-200 mb-4">Email: contato@startupspace.com.br</p> */}
            {/* <p className="text-blue-200">
              © {new Date().getFullYear()} StartupSpace. Todos os direitos
              reservados.
            </p> */}
          </motion.div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-300 text-sm">
          <Link href="https://prof-rodolfo-barriviera.vercel.app/termos-de-uso">
            <p>Termos de uso</p>
          </Link>
          <Link href="https://prof-rodolfo-barriviera.vercel.app/politicas-de-privacidade">
            <p>Políticas de privacidade</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
