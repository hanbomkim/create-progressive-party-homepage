import MyProfile from "@/components/About/MyProfile";
import Container from "@/components/Container";
import { AboutHeader, TitleContainer } from "@/components/Title.style";
import { QuoteEndIcon, QuoteStartIcon } from "@/styles/svg/Quote";

export default function About() {
  return (
    <Container>
      <TitleContainer flex={true}>
        <QuoteStartIcon />
        <AboutHeader>주권자 국민들의 정면돌파 정치!</AboutHeader>
        <QuoteEndIcon />
      </TitleContainer>
      <MyProfile />
    </Container>
  );
}
