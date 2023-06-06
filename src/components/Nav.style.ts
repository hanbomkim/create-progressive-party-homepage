import styled from "@emotion/styled";

export const NavContainer = styled.div<{
  fixed?: boolean;
}>`
  display: block;
  position: ${({ fixed }) => (fixed ? "fixed" : "inherit")};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.2);

  .container {
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: content-box;
    margin: 0 auto;
    padding: 0 22px;
    height: 56px;
  }
`;

export const NavTitle = styled.div`
  font-size: 1vw;
  font-weight: 700;
  color: #375251;
`;

export const MenuContainer = styled.div`
  display: flex;
`;

export const Links = styled.div`
  ul {
    display: flex;

    li {
      margin-left: 15px;
      font-weight: 700;
      font-size: 1vw;
      color: #375251;
      &:hover a {
        transition: color 0.5s, border 0.5s;
        opacity: 0.8;
        color: var(--outline);
      }

      &:active a {
        opacity: 1;
      }

      &[data-selected="true"] a {
        opacity: 1;
        color: var(--outline);
      }
    }
  }
`;
