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
        title="국민주권당에 가입하기"
        description="(가칭)국민주권당 창당준비위원회에 함께합니다."
      />
      <FormCards projects={projects} />
    </Container>
  );
}
