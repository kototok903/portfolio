import ContactForm from "@/components/contact-form";
import Intro from "@/components/intro";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <section className="py-24">
      <div className="container max-w-4xl">
        <Intro />
        <Projects />
        <ContactForm />
      </div>
    </section>
  );
}
