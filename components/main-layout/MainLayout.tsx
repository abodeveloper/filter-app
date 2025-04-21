import React from "react";
import Container from "../container/Container";
import { Typography } from "../typography/Typography";
import { Stepper } from "../stepper/Stepper";

const steps = [
  {
    title: "Create account",
    description: "Create an account to get started.",
    status: "completed" as const,
  },
  {
    title: "Personal information",
    description: "Complete your personal information.",
    status: "current" as const,
  },
  {
    title: "Choose a university",
    description: "Choose the university of your choice.",
    status: "upcoming" as const,
  },
];

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="border border-b-headerBorderB py-2.5">
        <Container>
          <Typography
            variant="body"
            size="md"
            weight="medium"
            className="text-textPrimary"
          >
            Complete application
          </Typography>
          <Typography
            variant="body"
            size="xs"
            weight="medium"
            className="text-textSecondary mt-1"
          >
            Check your information and fill in the other fields.
          </Typography>
        </Container>
      </div>
      <div className="border-b border-b-borderColor">
        <Container>
          <Stepper steps={steps} />
        </Container>
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
