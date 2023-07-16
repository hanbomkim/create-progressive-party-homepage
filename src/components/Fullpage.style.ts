import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

export const CoverWrapper = styled.div<{
  props?: string;
  linearStyle?: boolean;
  mediaquery?: boolean;
}>`
  position: relative;
  height: 100vh;
  width: ${({ props }) => (props ? props : "100%")};
  opacity: 0.3;
`;
export const CoverImage = styled(Image)`
  max-width: 100%;
  height: 100%;
  width: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FlexTemporary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const LandingTextWrapper = styled.div`
  position: absolute;
  margin-top: 110px;
  display: flex;
  height: 11%;
  background: rgba(255, 255, 255, 0.4);
  justify-content: center;
  width: 100%;
  align-items: center;
  flex-direction: column;
  z-index: 100;
  /* gap: 1rem; */
`;
export const HeaderText = styled.h2<{
  color?: string;
  fontSize?: string;
  mediaquery?: boolean;
}>`
  font-weight: 700;
  font-size: ${({ fontSize, mediaquery }) =>
    fontSize ? fontSize : mediaquery ? "2.5rem" : "2.5rem"};
  color: ${({ color }) => (color ? color : "#375251")};
  /* line-height: ${({ mediaquery }) => (mediaquery ? "4rem" : "4rem")}; */
`;
export const ContentText = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: #375251;
`;
export const LandingSlideWrapper = styled.div<{
  noGap?: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: ${({ noGap }) => (!noGap ? "1rem" : "0.5rem")};
  /* gap: 1em; */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 3;
      transform: translateZ(0);
    }
  }
  animation: fadeInUp 1.2s ease-in-out;
`;
export const RoutingButton = styled(Link)<{
  mediaquery?: string;
}>`
  padding: ${({ mediaquery }) => (mediaquery === "true" ? "1.5rem" : "1.5rem")};
  font-size: ${({ mediaquery }) =>
    mediaquery === "true" ? "1.5rem" : "1.5rem"};
  margin-top: ${({ mediaquery }) =>
    mediaquery === "true" ? "0.5rem" : "1rem"};
  background-color: var(--outline);
  cursor: pointer;
  color: white;
  border-radius: 6px;
  width: fit-content;
  font-weight: 700;
  &:hover {
    transition: color 0.5s, background-color 0.5s;
    cursor: pointer;
    background-color: #93e5ef;
  }
`;
export const LandingRightTextWrapper = styled.div<{
  mediaquery?: boolean;
}>`
  width: ${({ mediaquery }) => (mediaquery ? "100%" : "45%")};
  height: ${({ mediaquery }) => (mediaquery ? "100vh" : "auto")};
  position: ${({ mediaquery }) => (mediaquery ? "absolute" : "inherit")};
  text-align: ${({ mediaquery }) => (mediaquery ? "center" : "initial")};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
export const FlexLayout = styled.div<{
  mediaquery?: boolean;
}>`
  display: flex;
  div {
    width: ${({ mediaquery }) => (mediaquery ? "100%" : "55%")};
  }
`;
