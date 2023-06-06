import styled from "@emotion/styled";

export const TitleContainer = styled.div<{
  flex?: boolean;
}>`
  margin-bottom: 40px;
  display: ${({ flex }) => (flex ? "flex" : "inherit")};
  text-align: center;
  justify-content: center;

  h1 {
    font-size: 30px;
    font-weight: 600;
  }

  p {
    font-size: 18px;
    color: var(--text-base-90);
  }
`;
export const AboutHeader = styled.h1`
  font-size: 2em;
  font-weight: 600;
  line-height: 2;
`;
