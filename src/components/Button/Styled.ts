import styled from "styled-components";

export const ButtonRoot = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  font-size: 16px;
  width: 100%;
  border: none;
  outline: none;
  line-height: inherit;
  user-select: none;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background-color: var(--outline);
  box-shadow: 0 2px 0 rgb(5 145 255 / 10%);
  color: #fff;
  padding: 12px;
  border-radius: 4px;

  &:hover {
    transition: color 0.5s, background-color 0.5s;
    cursor: pointer;
    background-color: #93e5ef;
  }
`;
