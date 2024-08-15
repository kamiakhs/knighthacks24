// React and Next.js
import React from "react";

// Layout Components
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Icons
import { Coins, Construction, Gavel, Hammer, Presentation } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Hammer className="h-6 w-6" />,
    title: "You create",
    description:
      "Spend time brainstorming and developing a solid project to solve a problem.",
  },
  {
    icon: <Presentation className="h-6 w-6" />,
    title: "You pitch",
    description:
      "Create a slide deck, a video demo, and present your project to the best of your ability.",
  },
  {
    icon: <Gavel className="h-6 w-6" />,
    title: "We'll judge",
    description:
      "Industry experts will judge your projects. The top winners of each division will receive a prize.  ",
  },
];

const FeatureSteps = () => {
  return (
    <Section className="border-b">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>
              How it&apos;ll work
            </Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>
              You may participate in two divisions - Code and No Code.
            </Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
            {featureText.map(({ icon, title, description }, index) => (
              <div className="flex flex-col gap-4" key={index}>
                {icon}
                <h4 className="text-xl text-primary">{title}</h4>
                <p className="text-base opacity-75">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FeatureSteps;
