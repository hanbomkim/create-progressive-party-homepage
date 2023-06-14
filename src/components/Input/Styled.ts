import styled from "styled-components";

export const InputRoot = styled.input`
  box-sizing: border-box;
  margin: 0;
  padding: 8px 12px;
  color: rgba(0, 0, 0, 0.88);
  font-size: 1.2rem;
  line-height: 1.5714285714285714;
  list-style: none;
  font-family: inherit;
  position: relative;
  display: inline-block;
  width: 100%;
  height: 70px;
  min-width: 0;
  background-color: #fff;
  background-image: none;
  border-width: 1px;
  border-style: solid;
  border-color: #e2e5ed;
  border-radius: 6px;
  transition: color 0.5s, border 0.5s;
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
