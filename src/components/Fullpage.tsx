import { LandingCheckIcon } from "@/styles/svg/Check";
import { Section, SectionsContainer } from "react-fullpage";
import { useMediaQuery } from "react-responsive";
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
  const isWideScreen = useMediaQuery({ maxWidth: 1370 });
  const isTextScreen = useMediaQuery({ maxWidth: 767 });
  let options = {
    anchors: ["sectionOne", "sectionTwo", "sectionThree", "sectionFour"],
  };

  return (
    <SectionsContainer {...options}>
      <div>
        <Section>
          <LandingTextWrapper>
            <LandingSlideWrapper noGap={true}>
              <HeaderText mediaquery={isTextScreen}>
                주권자 국민의 정면돌파 직접정치
              </HeaderText>
              <HeaderText mediaquery={isTextScreen}>
                국민주권당 창당을 시작합니다!
              </HeaderText>
              {/* <ContentText>주권자 국민의 정면돌파 직접정치</ContentText> */}
              {/* <ContentText>국민주권당 창당을 시작합니다!</ContentText> */}

              <RoutingButton
                mediaquery={isTextScreen.toString()}
                href={"/invite-proposer"}
              >
                (가칭) 국민주권당 발기인 참여
              </RoutingButton>
            </LandingSlideWrapper>
          </LandingTextWrapper>
          <CoverWrapper>
            <CoverImage src={landing1stImage} alt="landing" />
          </CoverWrapper>
        </Section>
        <Section>
          <FlexLayout mediaquery={isWideScreen}>
            <CoverWrapper
              mediaquery={isWideScreen}
              props="55%"
              linearStyle={true}
            >
              <CoverImage src={landing4thImage} alt="landing" />
            </CoverWrapper>
            <LandingRightTextWrapper mediaquery={isWideScreen}>
              <LandingSlideWrapper>
                <HeaderText color="#009d8d" fontSize="3.5rem">
                  국민주권 철저히 실현!
                </HeaderText>
                <ContentText>
                  <LandingCheckIcon />
                  철저한 민주개혁
                </ContentText>
                <ContentText>
                  <LandingCheckIcon />
                  함께 사는 공동체
                </ContentText>
                <ContentText>
                  <LandingCheckIcon />
                  국익 우선 자주외교
                </ContentText>
                <ContentText>
                  <LandingCheckIcon />
                  한반도 평화·번영·통일
                </ContentText>
              </LandingSlideWrapper>
            </LandingRightTextWrapper>
          </FlexLayout>
        </Section>
        <Section>
          <FlexLayout mediaquery={isWideScreen}>
            <CoverWrapper
              mediaquery={isWideScreen}
              props="55%"
              linearStyle={true}
            >
              <CoverImage src={landing2ndImage} alt="landing" />
            </CoverWrapper>
            <LandingRightTextWrapper mediaquery={isWideScreen}>
              <LandingSlideWrapper>
                <HeaderText color="#009d8d" fontSize="3.5rem">
                  윤석열 퇴진, 탄핵!
                </HeaderText>
                <ContentText>
                  <LandingCheckIcon />
                  1호 공약 ‘윤석열 탄핵’
                </ContentText>
                <ContentText>
                  <LandingCheckIcon />
                  국힘당·정치검찰·보수언론 기득권동맹 해체
                </ContentText>
                <ContentText>
                  <LandingCheckIcon />
                  민주개혁 견인, 반국힘당 연대
                </ContentText>
              </LandingSlideWrapper>
            </LandingRightTextWrapper>
          </FlexLayout>
        </Section>
        <Section>
          <FlexLayout mediaquery={isWideScreen}>
            <CoverWrapper
              mediaquery={isWideScreen}
              props="55%"
              linearStyle={true}
            >
              <CoverImage src={landing3rdImage} alt="landing" />
            </CoverWrapper>
            <LandingRightTextWrapper mediaquery={isWideScreen}>
              <LandingSlideWrapper>
                <HeaderText color="#009d8d" fontSize="3.5rem">
                  당원 직접민주주의
                </HeaderText>
                <ContentText>
                  <LandingCheckIcon />
                  공직 후보 100% 당원 투표
                </ContentText>
                <ContentText>
                  <LandingCheckIcon />
                  당원 발의, 숙의로 정책 결정
                </ContentText>
              </LandingSlideWrapper>
            </LandingRightTextWrapper>
          </FlexLayout>
        </Section>
      </div>
    </SectionsContainer>
  );
};

export default Fullpage;
