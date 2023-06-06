import styled from "styled-components";

export const SelectboxWrapper = styled.section`
  width: 100%;
  position: relative;
  margin-right: 5px;
`;

export const ToggleBtn = styled.button`
  text-align: inherit;
  border: 1px solid #e2e5ed;
  width: 100%;
  padding: 8px 12px;
  border-radius: 6px;

  &:focus {
    border-color: var(--outline);
    box-shadow: 0 0 0 2px rgb(112 205 216 / 20%);
    border-inline-end-width: 1px;
    outline: 0;
  }

  &:hover {
    transition: color 0.5s, border 0.5s;
    border-color: var(--outline);
    border-inline-end-width: 1px;
  }

  &:placeholder-shown {
    text-overflow: ellipsis;
  }
`;
export const Selectbox = styled.ul<{
  hide?: boolean;
}>`
  display: ${({ hide }) => (hide ? "none" : "block")};
  margin-top: 4px;
  width: 100%;
  border: 1px solid #e2e5ed;
  border-radius: 2px;
  position: absolute;
  z-index: 1;
  &:nth-child(1) {
    border-bottom: 1px solid #e2e5ed;
  }
`;
export const OptionWrap = styled.li`
  padding: 8px 12px;
  background-color: #fff;
  width: 100%;
  text-align: inherit;
  &:hover {
    transition: color 0.5s, border 0.5s, background-color 0.5s ease-in-out;
    background-color: #f4feff;
  }
`;
export const Option = styled.button`
  width: 100%;
  text-align: inherit;
  &:hover {
    transition: color 0.5s, border 0.5s, background-color 0.5s ease-in-out;
    color: var(--outline);
  }
`;
