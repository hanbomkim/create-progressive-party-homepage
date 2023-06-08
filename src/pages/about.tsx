import MyProfile from "@/components/About/MyProfile";
import Container from "@/components/Container";
import { Mobile, Pc } from "@/components/ResponsiveComponents";
import { AboutHeader, TitleContainer } from "@/components/Title.style";
import { QuoteEndIcon, QuoteStartIcon } from "@/styles/svg/Quote";

export default function About() {
  return (
    <Container>
      <TitleContainer flex={true}>
        <QuoteStartIcon />
        <Mobile>
          <AboutHeader>(가칭) 국민주권당 창당 추진 선언문</AboutHeader>
        </Mobile>
        <Pc>
          <AboutHeader>(가칭) 국민주권당 창당 추진 선언문</AboutHeader>
        </Pc>
        <QuoteEndIcon />
      </TitleContainer>
      <Mobile>
        <MyProfile />
      </Mobile>
      <Pc>
        <MyProfile />
      </Pc>
    </Container>
  );
}
