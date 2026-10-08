"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SKILLS, SkillNames } from "@/data/constants";
import { config } from "@/data/config";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";


// Pilih skill yang mau ditampilkan di About (urutan = urutan tampil)
const FEATURED: SkillNames[] = [
  SkillNames.TS,
  SkillNames.NESTJS,
  SkillNames.POSTGRES,
  SkillNames.PRISMA,
  SkillNames.DOCKER,
];

const AboutSection = () => {
  return (
    <SectionWrapper
      id="about"
      className="flex w-full min-h-screen flex-col justify-center py-24"
    >
      <SectionHeader
        id="about"
        title="About Me"
        desc="The thoughts, curiosities, and stories behind the work"
        className="static mb-14"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pointer-events-auto mx-auto grid w-full max-w-5xl items-center gap-10 px-4 md:grid-cols-[280px_1fr] md:gap-14"
      >
        <div className="relative mx-auto aspect-[4/5] w-56 overflow-hidden rounded-2xl border border-border/60 md:w-full">
          <Image
            src={config.aboutPhoto}
            alt={config.author}
            fill
            sizes="(min-width: 768px) 280px, 224px"
            className="object-cover"
          />
        </div>

        <div>
        <Card
        className={cn(
            "bg-card text-card-foreground border-border",
            "hover:border-primary/20 transition-colors duration-300",
            "shadow-sm hover:shadow-md"
        )}
        >
        <CardContent className="space-y-4 pt-6 text-base leading-relaxed text-muted-foreground">
            {config.about.map((p, i) => (
            <p key={i}>{p}</p>
            ))}
        </CardContent>
        </Card>

          <ul className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {FEATURED.map((name) => {
              const skill = SKILLS[name];
              if (!skill) return null;
              return (
                <li
                  key={skill.name}
                  style={{ "--skill": skill.color } as CSSProperties}
                  className="group flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-secondary/20 p-3 backdrop-blur-sm transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[var(--skill)]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={skill.icon}
                    alt={skill.label}
                    width={32}
                    height={32}
                    loading="lazy"
                    className="size-8 object-contain"
                  />
                  <span className="text-center text-xs font-medium text-foreground/80">
                    {skill.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default AboutSection;