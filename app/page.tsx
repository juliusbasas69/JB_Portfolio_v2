import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Competencies } from "@/components/competencies";
import { TechStack } from "@/components/tech-stack";
import { Journey } from "@/components/journey";
//import { Projects } from '@/components/projects'
// import { Experience } from '@/components/experience'
// import { CurrentFocus } from '@/components/current-focus'
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Competencies />
        <TechStack />
        <Journey />
        {/*<Projects />
        <Experience />
        <CurrentFocus /> */}
        <Certifications />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
