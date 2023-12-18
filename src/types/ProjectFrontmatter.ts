export interface ProjectFrontMatter {
  layout: string;
  name: string;
  about: string;
  stacks: Stack[];
  features: string[];
  preview: string;
  repositories: string[];
  published_date: string;
}

type Stack =
  | "reactjs"
  | "firebase"
  | "nextjs"
  | "javascript"
  | "typescript"
  | "php"
  | "prisma"
  | "mongodb"
  | "tailwind"
  | "trpc"
  | "zod"
  | "zustand"
  | "styled-components"
  | "next-auth"
  | "framer-motion";
