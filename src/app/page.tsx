import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import VirtualStaging from "@/components/VirtualStaging";
import ExclusiveProperties from "@/components/ExclusiveProperties";
import HowItWorks from "@/components/HowItWorks";
import BlogArticles from "@/components/BlogArticles";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProperties />
      <VirtualStaging />
      <ExclusiveProperties />
      <HowItWorks />
      <BlogArticles />
      <Testimonials />
      <ContactCTA />
    </main>
  );
}
