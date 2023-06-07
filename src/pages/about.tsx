import MyProfile from "@/components/About/MyProfile";
import Container from "@/components/Container";
import { AboutHeader, TitleContainer } from "@/components/Title.style";
import { QuoteEndIcon, QuoteStartIcon } from "@/styles/svg/Quote";

export default function About() {
  return (
    <Container>
      <TitleContainer flex={true}>
        <QuoteStartIcon />
        <AboutHeader>(가칭) 국민주권당 창당 추진 선언문</AboutHeader>
        <QuoteEndIcon />
      </TitleContainer>
      <MyProfile />
    </Container>
  );
}
