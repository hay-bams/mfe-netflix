export type ModalSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'auto' | string;

export type ModalStyledSizes = Record<'size', ModalSizes>

interface ModalSizeDimensionValue {
  width: string
}

export interface ModalStyledProps {
  size: ModalSizes;
  background?: string
}

export type ModalSizeDimension = Record<ModalSizes, ModalSizeDimensionValue>

// export type ModalStyledProps = ModalStyledSizes;

export type ModalOverflowProps = 'outside' | 'inside'

export interface ModalInnerWrapperProps {
  centered?: boolean;
  overflow: ModalOverflowProps;
  show?: boolean;
  animationDuration?: number;
  
}

export interface ModalBodyProps {
  overflow: ModalOverflowProps
}

export interface ModalTitleContainerStyledProps {
  title?: any;
}
