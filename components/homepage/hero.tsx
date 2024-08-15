// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { Camera, Sparkle, Sparkles } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Logo from "@/public/logo.svg";

const Hero = () => {
  return (
    <Section>
      <Container className="flex flex-col items-center text-center">
        <Image
          src={Logo}
          width={172}
          height={72}
          alt="Company Logo"
          className="not-prose mb-6 dark:invert md:mb-8"
        />
        <h1 className="!mb-0">
          <Balancer>
            KnightHacks
          </Balancer>
        </h1>
        <h3 className="text-muted-foreground flex flex-col items-center gap-2">
          <Balancer>
            Kamiak&apos;s FIRST EVER hackathon, free of cost, brought to you by CS Club
          </Balancer>
          <Balancer>
            Saturday, 12/7/24 @ Commons
          </Balancer>
        </h3>
        <div className="not-prose mt-6 flex gap-2 md:mt-12">
          <Button asChild>
            <Link href="/">
              <Sparkles className="mr-2" />
              Preregister
            </Link>
          </Button>
          <Button variant={"ghost"} asChild>
            <Link href="/posts">Learn more -{">"}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
