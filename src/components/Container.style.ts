import styled from "@emotion/styled";

export const Layout = styled.div`
  height: auto;
`;
export const Main = styled.main`
  min-height: calc(100vh - 110px - 112px);
  display: flex;
  align-items: center;
  margin-top: 110px;

  .contents {
    padding: 2rem 1rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
`;
