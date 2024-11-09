"use client";

import { PropsWithChildren } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/modal";
import SharedButton from "../action/SharedButton";

export interface CommonModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

interface DefaultModalProps extends CommonModalProps {
  title: string;
  buttonText: string;
  onPress: () => void;
  buttonDisabled?: boolean;
  isDismissable?: boolean;
  ExtraButton?: React.ReactNode;
}

const DefaultModal = ({
  children,
  isOpen,
  onOpenChange,
  title,
  buttonText,
  buttonDisabled,
  onPress,
  isDismissable = true,
  ExtraButton,
}: PropsWithChildren<DefaultModalProps>) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      hideCloseButton
      shouldBlockScroll
      size="xs"
      isDismissable={isDismissable}
    >
      <ModalContent className="p-[40px]">
        {(onClose) => (
          <>
            <ModalHeader className="justify-center p-0">
              <p className="font-tenada text-center text-[30px] leading-[30px] text-primary-700 whitespace-pre-line">
                {title}
              </p>
            </ModalHeader>
            <ModalBody className="items-center justify-center p-0">
              {children}

              <SharedButton
                isColor
                text={buttonText}
                onClick={() => {
                  onPress();
                  onClose();
                }}
                buttonProps={{ disabled: buttonDisabled }}
              />

              {ExtraButton}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default DefaultModal;
