import { CloseIcon } from "@/styles/svg/Close";
import { PropsWithChildren, useEffect } from "react";

import { Portal } from "../Portal";
import {
  Mask,
  ModalBody,
  ModalCloseButton,
  ModalContainer,
  ModalHeader,
  ModalWrapper,
} from "./Styled";

export type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
};

const Modal = (props: PropsWithChildren<ModalProps>) => {
  const { isOpen, title, children, onClose } = props;

  useEffect(() => {
    if (!isOpen) return;

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = oldOverflow;
    };
  }, [isOpen]);

  return (
    <Portal>
      {isOpen && (
        <div>
          <Mask onClick={onClose} />
          <ModalWrapper>
            <ModalContainer>
              <ModalHeader>
                {/* <ModalTitle>{title}</ModalTitle> */}
                <ModalCloseButton onClick={onClose} tabIndex={-1}>
                  <CloseIcon />
                </ModalCloseButton>
              </ModalHeader>
              <ModalBody>{children}</ModalBody>
              {/* <ModalFooter>
                  <div>
                    <Button onClick={onClose}>확인</Button>
                  </div>
                </ModalFooter> */}
            </ModalContainer>
          </ModalWrapper>
        </div>
      )}
    </Portal>
  );
};

export default Modal;
