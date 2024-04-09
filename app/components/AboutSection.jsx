"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Next.js</li>
        <li>Python</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Java</li>
        <li>C</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Podion</li>
        <li>Leonardo da vinci</li>
        <li>Unb (Ciência da Computação)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Alura</li>
        <li>JavaScript Mastery Next.js Course</li>
        <li>Curso FelipeDeschamp</li>
        <li>Bro Code</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt="imagem do sobre"
          className="rounded-[50px]"
          src="/images/about-image.jpg"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Minha História</h2>
          <p className="text-base lg:text-lg">
            Sou apaixonado por aprendizado, especialmente em computação, com
            foco em Fullstack. Pratico musculação, o que me traz disciplina e
            saúde. Tenho habilidades em comunicação, paciência e clareza ao
            explicar conceitos, sendo útil para colegas e projetos de equipe.
            Sempre buscando aprender e crescer em todas as áreas da minha vida.
          </p>
          <div className="flex flex-row justify-start mt-8 text-xl">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educação{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificados{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
