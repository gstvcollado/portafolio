import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skill from "../components/Skills/Skills";
import ReactIcon from "../components/icon/React";
import JsIcon from "../components/icon/Js";
import HtmlIcon from "../components/icon/Html";
import CssIcon from "../components/icon/Css";
import TailwindCSSIcon from "../components/icon/Tailwind";
import PhpIcon from "../components/icon/Php";
import LaravelIcon from "../components/icon/Laravel";
import MysqlIcon from "../components/icon/Mysql";
import PostgresqlIcon from "../components/icon/Postgresql";
import VsCodeIcon from "../components/icon/Vscode";
import GitIcon from "../components/icon/Git";
import PosmanIcon from "../components/icon/Postman";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
export default function Home() {
  const links = [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Sobre mi" },
    { href: "/skills", label: "Skills" },
    { href: "/proyect", label: "Proyectos" },
    { href: "/contact", label: "Contacto" },
  ];

  const cards = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML", "CSS", "TailwindCSS"],
      icons: [
        <ReactIcon className="text-3xl" />,
        <JsIcon className="text-3xl" />,
        <HtmlIcon className="text-3xl" />,
        <CssIcon className="text-3xl" />,
        <TailwindCSSIcon className="text-3xl" />,
      ],
    },
    {
      title: "Backend",
      skills: ["PHP", "Laravel"],
      icons: [
        <PhpIcon className="text-3xl" />,
        <LaravelIcon className="text-3xl" />,
      ],
    },
    {
      title: "Bases de Datos",
      skills: ["MySQL", "PostgreSQL"],
      icons: [
        <MysqlIcon className="text-3xl" />,
        <PostgresqlIcon className="text-3xl" />,
      ],
    },
    {
      title: "Herramientas",
      skills: ["Git", "Postman", "VSCode"],
      icons: [
        <GitIcon className="text-3xl" />,
        <PosmanIcon className="text-3xl" />,
        <VsCodeIcon className="text-3xl" />,
      ],
    },
  ];

  return (
    <div>
      <Navbar links={links} />
      <Hero />
      <About />
      <Skill cards={cards} />
      <Contact />
      <Footer />
    </div>
  );
}
