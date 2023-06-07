import styled from "@emotion/styled";

export const TitleContainer = styled.div<{
  flex?: boolean;
}>`
  margin-bottom: 40px;
  display: ${({ flex }) => (flex ? "flex" : "inherit")};
  text-align: center;
  justify-content: center;

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
  }

  p {
    font-size: 1.5rem;
    color: var(--text-base-90);
  }
`;
export const AboutHeader = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 2;
`;
