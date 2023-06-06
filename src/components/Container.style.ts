import styled from "@emotion/styled";

export const Layout = styled.div`
  height: auto;
`;
export const Main = styled.main`
  min-height: calc(100vh - 56px - 112px);
  display: flex;
  align-items: center;
  margin-top: 56px;

  .contents {
    padding: 6vw;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
`;
