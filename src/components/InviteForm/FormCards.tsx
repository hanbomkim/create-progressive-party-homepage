import { useRef } from "react";
import { ProjectCardsContainer } from "./FormCards.style";
import InviteForm from "./InviteForm";

export default function FormCards({ projects }) {
  const consultationRef = useRef<HTMLDivElement>(null);
  const handleRedirect = () => {
    consultationRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <ProjectCardsContainer>
      <InviteForm />
    </ProjectCardsContainer>
  );
}
