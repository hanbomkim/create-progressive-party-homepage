import { Section, SectionsContainer } from "react-fullpage";
import landing1stImage from "../../public/imgs/landing1stImage.jpg";
import landing2ndImage from "../../public/imgs/landing2ndImage.jpg";
import landing3rdImage from "../../public/imgs/landing3rdImage.jpg";
import landing4thImage from "../../public/imgs/landing4thImage.jpg";
import {
  ContentText,
  CoverImage,
  CoverWrapper,
  FlexLayout,
  HeaderText,
  LandingRightTextWrapper,
  LandingSlideWrapper,
  LandingTextWrapper,
  RoutingButton,
} from "./Fullpage.style";

const Fullpage = () => {
  let options = {
    anchors: ["sectionOne", "sectionTwo", "sectionThree", "sectionFour"],
  };

  return (
    <SectionsContainer {...options}>
      <div>
        <Section>
          <LandingTextWrapper>
            <LandingSlideWrapper>
              <HeaderText>(가칭)국민주권당과 함께 해주세요</HeaderText>
              <ContentText>새로운 시대는 새로운 정치를 부릅니다.</ContentText>
              <ContentText>
                답답한 정치 현실을 주권자 국민의 직접정치로 정면돌파해 나갑니다.
              </ContentText>
              <ContentText>
                언제나 (가칭)국민주권당은 국민 곁에 있습니다.
              </ContentText>
              <RoutingButton href={"/invite-proposar"}>
                (가칭)국민주권당 창당 발기인 참여하기
              </RoutingButton>
            </LandingSlideWrapper>
          </LandingTextWrapper>
          <CoverWrapper>
            <CoverImage src={landing1stImage} alt="landing" />
          </CoverWrapper>
        </Section>
        <Section>
          <FlexLayout>
            <CoverWrapper props="55%" linearStyle={true}>
              <CoverImage src={landing4thImage} alt="landing" />
            </CoverWrapper>
            <LandingRightTextWrapper>
              <LandingSlideWrapper>
                <HeaderText color="#009d8d" fontSize="2.5vw">
                  국민이 모든 것의 주인입니다
                </HeaderText>
                <ContentText>
                  국민은 촛불항쟁을 거치며 국민이 나라의 주인이며 주권자로서
                </ContentText>
                <ContentText>
                  사회를 바꿀 권리와 힘이 우리 안에 있음을 확인했습니다.
                </ContentText>
                <ContentText>
                  기성 정치를 넘어 직접 나라의 운명을 책임지고 사회 전반을
                  변화시키려 나서고 있습니다.
                </ContentText>
                <ContentText>
                  이제 국민은 정치에서도 주인이 되어야 합니다.
                </ContentText>
                <ContentText>
                  대리정치가 아닌 국민의 직접 정치가 필요합니다.
                </ContentText>
              </LandingSlideWrapper>
            </LandingRightTextWrapper>
          </FlexLayout>
        </Section>
        <Section>
          <FlexLayout>
            <CoverWrapper props="55%" linearStyle={true}>
              <CoverImage src={landing2ndImage} alt="landing" />
            </CoverWrapper>
            <LandingRightTextWrapper>
              <LandingSlideWrapper>
                <HeaderText color="#009d8d" fontSize="2.5vw">
                  정치가 국민을 따라가지 못하고 있습니다
                </HeaderText>
                <ContentText>
                  국민은 기성 정치인들이 좋은 정치를 해주길 바라며 믿고 지지하고
                  응원해보기도 했습니다.
                </ContentText>
                <ContentText>
                  국민이 바라는 것을 청원을 통해 직접 전달하기도 했습니다.
                </ContentText>
                <ContentText>
                  더 이상 청원을 통해 우리 삶의 절박한 문제를 해결할 수 없음을
                  절감하고 있습니다.
                </ContentText>
                <ContentText>
                  대한민국을 바꾸기 위해 국민이 직접 촛불을 들고 박근혜 정권을
                  끌어내렸듯이,
                </ContentText>
                <ContentText>
                  이젠 정치를 바꾸기 위해 국민이 직접 나섭니다.
                </ContentText>
              </LandingSlideWrapper>
            </LandingRightTextWrapper>
          </FlexLayout>
        </Section>
        <Section>
          <FlexLayout>
            <CoverWrapper props="55%" linearStyle={true}>
              <CoverImage src={landing3rdImage} alt="landing" />
            </CoverWrapper>
            <LandingRightTextWrapper>
              <LandingSlideWrapper>
                <HeaderText color="#009d8d" fontSize="2.5vw">
                  평범한 시민들의 위대한 여정이 시작됩니다
                </HeaderText>
                <ContentText>
                  (가칭)국민주권당은 화려하기보다는 소박하고 진실되게 국민만
                  믿고 우직하게 걸어가겠습니다.
                </ContentText>
                <ContentText>
                  국민들이 원하고 좋아하는 일을 하나라도 더 찾아 해결해 가겠다는
                  다짐을 합니다.
                </ContentText>
                <ContentText>
                  여의도 정치 문법을 거부하고 국민이 갖는 보편적 상식을 판단의
                  기준으로 삼아
                </ContentText>
                <ContentText>위대한 국민을 위해 전진해 가겠습니다.</ContentText>
              </LandingSlideWrapper>
            </LandingRightTextWrapper>
          </FlexLayout>
        </Section>
      </div>
    </SectionsContainer>
  );
};

export default Fullpage;
