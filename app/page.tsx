import ContactForm from "@/components/contact-form";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <section className="py-24">
      <div className="container max-w-4xl">
        <Intro />
        <Projects />
        <Skills />
        <ContactForm />
      </div>
    </section>
  );
}
