import Container from "@/components/Container";
import dynamic from "next/dynamic";
const FormCards = dynamic(() => import("@/components/InviteForm/FormCards"), {
  ssr: false,
});
const Title = dynamic(() => import("@/components/Title"), { ssr: false });

export default function inviteProposer({ projects }) {
  return (
    <Container>
      <Title
        title="발기인 동의서"
        description="본인은 (가칭)국민주권당 창당준비위원회 발기인에 동의합니다."
      />
      <FormCards projects={projects} />
    </Container>
  );
}
