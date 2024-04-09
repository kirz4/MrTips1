"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "SimplesWeb",
    description: "Solucione seus problemas de forma eficiente com SimplesWeb",
    image: "/images/SimplesWeb.png",
    tag: ["Todos", "Websites"],
    gitUrl: "https://github.com/Satsuj1n/SimplesWeb",
    previewUrl: "https://simples-web.vercel.app",
  },
  {
    id: 2,
    title: "Druvago",
    description: "Front-end de site de camping",
    image: "/images/druvago.png",
    tag: ["Todos", "Websites"],
    gitUrl: "https://github.com/Satsuj1n/druvago",
    previewUrl: "https://druvago.shop",
  },
  {
    id: 3,
    title: "Calculadora",
    description: "Calculadora Digital em HTML e CSS",
    image: "/images/calculadora.png",
    tag: ["Todos", "Apps"],
    gitUrl: "https://github.com/Satsuj1n/Calculadora",
    previewUrl: "https://calculadora-bice-nine.vercel.app",
  },
  {
    id: 4,
    title: "Relogio Analogico",
    description: "Relogio Analogico em HTML e CSS",
    image: "/images/relogio.png",
    tag: ["Todos", "Apps"],
    gitUrl: "https://github.com/Satsuj1n/Relogio-Analogico",
    previewUrl: "https://relogio-analogico-lovat.vercel.app",
  },
  {
    id: 5,
    title: "Weather App",
    description: "Aplicativo com implementação de API em Javscript",
    image: "/images/api.png",
    tag: ["Todos", "Apps"],
    gitUrl: "https://github.com/Satsuj1n/Weather-App-API",
    previewUrl: "https://weather-app-api-five.vercel.app",
  },
  {
    id: 6,
    title: "Pedra Papel Tesoura",
    description: "Jogo em Javascript",
    image: "/images/ppt.png",
    tag: ["Todos", "Apps"],
    gitUrl: "https://github.com/Satsuj1n/Pedra-Papel-Tesoura",
    previewUrl: "https://pedra-papel-tesoura-phi-seven.vercel.app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Meus Projetos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Websites"
          isSelected={tag === "Websites"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Apps"
          isSelected={tag === "Apps"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
