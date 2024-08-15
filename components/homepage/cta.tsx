// React and Next.js imports
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "@/components/ui/button";

// Custom components
import { Section, Container } from "@/components/craft";
import { Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <Section className="px-4">
      <Container className="flex flex-col items-center gap-6 rounded-lg border bg-accent/50 p-6 text-center md:rounded-xl md:p-12">
        <h2 className="!my-0">What are you waiting for?</h2>
        <h3 className="!mb-0 text-muted-foreground">
          <Balancer>
            Worst case scenario you learn more about programming, get to
            collaborate with friends, and eat free food. Best case = win prizes?
          </Balancer>
        </h3>
        <div className="not-prose mx-auto flex items-center gap-2">
          <Button className="w-fit" asChild>
            <Link href="#">
              <Sparkles className="mr-2" />
              Preregister
            </Link>
          </Button>
          <Button className="w-fit" variant="link" asChild>
            <Link href="#">Learn more {"->"}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default CTA;
