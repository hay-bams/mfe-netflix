import {ReactNode, useEffect, useRef} from 'react';
import styled, {css} from 'styled-components';

import {
  ModalSizes,
  ModalStyledProps,
  ModalTitleContainerStyledProps,
  ModalInnerWrapperProps,
  ModalBodyProps,
  ModalOverflowProps,
} from './Modal.types';
import {modalSizes} from './Modal.styles';

import {ModalPortal} from '@/components/Portals/ModalPortal';
import {Backdrop} from '@/components/Backdrop';
import {useClickOutside} from '@/hooks/useClickOutside';
import {useDelayUnmount} from '@/hooks/useDelayUnmount';
import CloseIcon from '@/assets/icons/close.svg'

interface Props {
  open?: boolean;
  children?: ReactNode;
  onClose?: () => void;
  size?: ModalSizes;
  title?: ReactNode;
  withCloseButton?: boolean;
  centered?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
  overlayBlur?: number;
  overflow?: ModalOverflowProps;
  animationDuration?: number;
  background?: string
}

const ModalWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  inset: 0;
  height: 100vh;
  width: 100vw;
  z-index: 51;
`;

const ModalInnerWrapper = styled.div<ModalInnerWrapperProps>`
  display: flex;
  justify-content: center;
  padding: 48px 16px;
  align-items: ${(props) => (props.centered ? 'center' : 'flex-start')};
  height: 100%;
  overflow-y: ${(props) =>
    props.overflow === 'outside' ? 'scroll' : 'hidden'};
`;

const ModalContainer = styled.div<ModalStyledProps>`
  padding: 20px;
  background: ${(props) => props.background || '#fff'};
  min-height: 0px;
  width: ${(props) =>
    modalSizes[props.size] ? modalSizes[props.size].width : props.size};
  box-shadow: 1px 0px 10px 5px rgb(0 0 0 / 5%),
    -1px 0px 10px 5px rgb(0 0 0 / 5%), 0 1px 10px 5px rgb(0 0 0 / 5%);
`;

const ModalTitleContainer = styled.div<ModalTitleContainerStyledProps>`
  display: flex;
  justify-content: ${(props) => (props.title ? 'space-between' : 'flex-end')};
`;

const ModalTitle = styled.div``;

const CloseIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ModalBody = styled.div<ModalBodyProps>`
  margin-block: 20px;
  overflow-y: ${(props) =>
    props.overflow === 'outside' ? 'hidden' : 'scroll'};
  ${(props) =>
    css`
      ${props.overflow === 'inside' && 'max-height: calc(100vh - 185px)'}
    `};
  padding-bottom: 40px;
  position: relative;
`;

export const Modal = ({
  open = false,
  children,
  onClose = () => {},
  size = 'xs',
  title,
  withCloseButton = true,
  centered = false,
  overflow = 'outside',
  overlayBlur,
  overlayColor,
  overlayOpacity,
  animationDuration = 300,
  background 
}: Props) => {
  const modalRef = useRef<any>(null);
  useClickOutside(modalRef, onClose);
  const render = useDelayUnmount(open!, animationDuration!);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <ModalPortal>
      {render ? (
        <>
          <Backdrop
            overlayBlur={overlayBlur}
            overlayColor={overlayColor}
            overlayOpacity={overlayOpacity}
            animationDuration={animationDuration}
            show={open}
          />
          <ModalWrapper>
            <ModalInnerWrapper
              centered={centered}
              overflow={overflow}
              show={open}>
              <ModalContainer size={size} ref={modalRef} background={background}>
                <ModalTitleContainer title={title}>
                  {title ? <ModalTitle>{title}</ModalTitle> : null}
                  {withCloseButton ? (
                    <CloseIconContainer onClick={onClose}>
                      <CloseIcon />
                    </CloseIconContainer>
                  ) : null}
                </ModalTitleContainer>

                <ModalBody overflow={overflow}>{children || null}</ModalBody>
              </ModalContainer>
            </ModalInnerWrapper>
          </ModalWrapper>
        </>
      ) : null}
    </ModalPortal>
  );
};
