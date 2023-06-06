import MyProfile from "@/components/About/MyProfile";
import Container from "@/components/Container";
import { AboutHeader, TitleContainer } from "@/components/Title.style";
import { QuoteEndIcon, QuoteStartIcon } from "@/styles/svg/Quote";

export default function About() {
  return (
    <Container>
      <TitleContainer flex={true}>
        <QuoteStartIcon />
        <AboutHeader>
          국민을 생각하는 정치
          <br />
          국민주권당이 하겠습니다
        </AboutHeader>
        <QuoteEndIcon />
      </TitleContainer>
      <MyProfile />
    </Container>
  );
}
