import PropertyHero from "@/components/PropertyHero";
import AllProperties from "@/components/AllProperties";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
export default function PropertiesPage() {
  return (
    <main>
      <PropertyHero />
      <AllProperties />
      <Testimonials />
      <ContactCTA />
    </main>
  );
}
