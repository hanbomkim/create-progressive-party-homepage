import styled from "styled-components";

export const Mask = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 11;
`;

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 30;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const ModalContainer = styled.div`
  margin-top: 110px;
  width: 26rem;
  height: auto;
  border-radius: 4px;
  background-color: #fff;
  /* margin: 0 24px; */
  overflow: hidden;
  .daum_popup
    .focus_input
    .focus_content
    .mapping_auto_road
    .mapping_auto_jibun
    .use_suggest {
    height: 26rem;
  }
`;

export const ModalHeader = styled.div`
  /* display: flex;
  
  justify-content: space-between; */
  display: flex;
  align-items: center;
  justify-content: end;
  height: 40px;
  padding: 16px;
  border-bottom: 1px solid #0000001f;

  .material-symbols-outlined {
    padding: 4px;
    cursor: pointer;
  }
`;

export const ModalTitle = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
`;
export const ModalCloseButton = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
  .icon-close {
    width: 12px;
    height: 12px;
    fill: #ccc;
    transition: 0.3s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    border-color: #4096ff;
    border-inline-end-width: 1px;
    .icon-close {
      fill: #666;
    }
  }
`;

export const ModalBody = styled.div`
  height: 26rem;
  .info_body {
    height: 26rem;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid #0000001f;
  padding: 16px;

  & > div {
    width: 80px;
  }
`;
