import { CheckIcon } from "@/styles/svg/Check";
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
            <LandingSlideWrapper noGap={true}>
              <HeaderText>주권자 국민의 정면돌파 직접정치</HeaderText>
              <HeaderText>국민주권당 창당을 시작합니다!</HeaderText>
              {/* <ContentText>주권자 국민의 정면돌파 직접정치</ContentText> */}
              {/* <ContentText>국민주권당 창당을 시작합니다!</ContentText> */}

              <RoutingButton href={"/invite-proposer"}>
                (가칭) 국민주권당 발기인 참여
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
                <HeaderText color="#009d8d" fontSize="3.3vw">
                  국민주권 철저히 실현!
                </HeaderText>
                <ContentText>
                  <CheckIcon />
                  철저한 민주개혁
                </ContentText>
                <ContentText>
                  <CheckIcon />
                  함께 사는 공동체
                </ContentText>
                <ContentText>
                  <CheckIcon />
                  국익 우선 자주외교
                </ContentText>
                <ContentText>
                  <CheckIcon />
                  한반도 평화·번영·통일
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
                <HeaderText color="#009d8d" fontSize="3.3vw">
                  윤석열 퇴진, 탄핵!
                </HeaderText>
                <ContentText>
                  <CheckIcon />
                  1호 공약 ‘윤석열 탄핵’
                </ContentText>
                <ContentText>
                  <CheckIcon />
                  국힘당·정치검찰·보수언론 기득권동맹 해체
                </ContentText>
                <ContentText>
                  <CheckIcon />
                  민주개혁 견인, 반국힘당 연대
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
                <HeaderText color="#009d8d" fontSize="3.3vw">
                  당원 직접민주주의
                </HeaderText>
                <ContentText>
                  <CheckIcon />
                  공직 후보 100% 당원 투표
                </ContentText>
                <ContentText>
                  <CheckIcon />
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
