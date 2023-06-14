import styled from "@emotion/styled";

export const NavContainer = styled.header<{
  fixed?: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  /* box-shadow: 0 0 3px #000; */
  z-index: 20;
`;
export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 110px;
  padding: 0 16px;
`;

export const NavTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #375251;
`;

export const MenuContainer = styled.div`
  display: flex;
`;

export const Links = styled.div`
  ul {
    display: flex;
    gap: 5rem;

    li {
      margin-left: 15px;
      font-weight: 700;
      font-size: 1.2rem;
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
