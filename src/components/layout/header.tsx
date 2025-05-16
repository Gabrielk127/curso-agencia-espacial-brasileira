"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Início", href: "/" },
    { name: "Curso", href: "#curso" },
    { name: "Equipe", href: "#equipe" },
    { name: "Certificado", href: "#certificado" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-blue-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-row gap-2"
          >
            <Image alt="Logo Agência Espacial Brasileira" src='/aeb-header.png' width={40} height={80} className="w-14"/>
            <Image alt="Logo Agência Espacial Brasileira" src='/ifpr-header.png' width={40} height={80} className="h-8"/>

          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-700 ${
                  pathname === item.href ? "text-blue-700" : "text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLSfq00RIPollGqeJsmqaYqWOpm9ZfP6-pITh1ziyYypT-xCuCQ/viewform'>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 cursor-pointer"
              >
              Inscreva-se
            </Button>
              </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t border-blue-100"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-medium transition-colors hover:text-blue-700 ${
                  pathname === item.href ? "text-blue-700" : "text-gray-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLSfq00RIPollGqeJsmqaYqWOpm9ZfP6-pITh1ziyYypT-xCuCQ/viewform'>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 w-full cursor-pointer"
              >
              Inscreva-se
            </Button>
              </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;

