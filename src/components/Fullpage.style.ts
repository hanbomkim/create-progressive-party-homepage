import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

export const CoverWrapper = styled.div<{
  props?: string;
  linearStyle?: boolean;
  mediaQuery?: boolean;
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
export const LandingTextWrapper = styled.div`
  position: absolute;
  display: flex;
  height: 11%;
  background: rgba(255, 255, 255, 0.4);
  justify-content: center;
  width: 100%;
  flex-direction: column;
  z-index: 100;
  /* gap: 1rem; */
  padding: 0 0 0 20%;
`;
export const HeaderText = styled.h2<{
  color?: string;
  fontSize?: string;
  mediaQuery?: boolean;
}>`
  font-weight: 700;
  font-size: ${({ fontSize, mediaQuery }) =>
    fontSize ? fontSize : mediaQuery ? "1rem" : "3rem"};
  color: ${({ color }) => (color ? color : "#375251")};
  /* line-height: 2em; */
`;
export const ContentText = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: #375251;
`;
export const LandingSlideWrapper = styled.div<{
  noGap?: boolean;
}>`
  padding-top: calc(100% - 85rem);
  display: flex;
  flex-direction: column;
  gap: ${({ noGap }) => (!noGap ? "1rem" : "0")};
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
  mediaQuery?: boolean;
}>`
  padding: ${({ mediaQuery }) =>
    mediaQuery ? "0.5rem 1rem" : "0.8rem 1.5rem"};
  font-size: ${({ mediaQuery }) => (mediaQuery ? "1.5rem" : "2rem")};
  margin-top: ${({ mediaQuery }) => (mediaQuery ? "0.5rem" : "1rem")};
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
  mediaQuery?: boolean;
}>`
  width: ${({ mediaQuery }) => (mediaQuery ? "100%" : "45%")};
  height: ${({ mediaQuery }) => (mediaQuery ? "100vh" : "auto")};
  position: ${({ mediaQuery }) => (mediaQuery ? "absolute" : "inherit")};
  text-align: ${({ mediaQuery }) => (mediaQuery ? "center" : "initial")};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
export const FlexLayout = styled.div<{
  mediaQuery?: boolean;
}>`
  display: flex;
  div {
    width: ${({ mediaQuery }) => (mediaQuery ? "100%" : "55%")};
  }
`;
