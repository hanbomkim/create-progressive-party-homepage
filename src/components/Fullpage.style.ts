import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

export const CoverWrapper = styled.div<{
  props?: string;
  linearStyle?: boolean;
}>`
  position: relative;
  width: ${({ props }) => (props ? props : "100%")};
  &::before {
    position: absolute;
    content: "";
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    /* background-color: rgba(255, 255, 255, 0.5); */
    background: ${({ linearStyle }) =>
      linearStyle
        ? "linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))"
        : "rgba(255, 255, 255, 0.5)"};
  }
`;
export const CoverImage = styled(Image)`
  width: 100%;
  height: 1079px;
  max-height: 1079px;
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
  gap: 1rem;
  padding: 0 0 0 20.5vw;
`;
export const HeaderText = styled.h2<{
  color?: string;
  fontSize?: string;
}>`
  font-weight: 700;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "3vw")};
  color: ${({ color }) => (color ? color : "#375251")};
  line-height: 2em;
`;
export const ContentText = styled.p`
  font-size: 1.5vw;
  font-weight: 600;
  color: #375251;
`;
export const LandingSlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
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
export const RoutingButton = styled(Link)`
  background-color: #04c3afad;
  cursor: pointer;
  margin-top: 1vh;
  color: white;
  border-radius: 6px;
  width: fit-content;
  font-weight: 700;
  padding: 1.1em;
  font-size: 0.8vw;
  &:hover {
    background-color: #04c3af8a;
  }
`;
export const LandingRightTextWrapper = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
`;
export const FlexLayout = styled.div`
  display: flex;
`;
