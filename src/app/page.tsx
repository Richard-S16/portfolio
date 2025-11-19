import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Experience />
      <Skills />
      <Education />
      
      <footer className="py-8 text-center text-gray-500 dark:text-gray-400 text-sm border-t border-gray-100 dark:border-gray-800 mt-12">
        <p>©{new Date().getFullYear()} Richard Schmidt. All rights reserved.</p>
      </footer>
    </main>
  );
}

