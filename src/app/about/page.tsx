import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import OurValues from "@/components/OurValues";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <OurValues />
      <Team />
      <Testimonials />
    </main>
  );
}
