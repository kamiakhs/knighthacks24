import Image from "next/image";
import { Main, Section, Container } from "@/components/craft";
import Hero from "@/components/homepage/hero";
import FAQ from "@/components/homepage/faqs";
import Navbar from "@/components/navbar";
import Footer from "@/components/homepage/footer";
import CTA from "@/components/homepage/cta";
import Sponsors from "@/components/homepage/sponsors";
import FeatureSteps from "@/components/homepage/feature-steps";

export default function Home() {
  return (
    <>
      <Main>
        <Navbar />
        <Section>
          <Container>
            <Hero />
          </Container>
          <Container>
            <FeatureSteps />
          </Container>
          <Container>
            <FAQ />
          </Container>
          <Container>
            <Sponsors />
          </Container>
          <Container>
            <CTA />
          </Container>
        </Section>
        <Footer />
      </Main>
    </>
  );
}
