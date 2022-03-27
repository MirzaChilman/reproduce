import React, { HTMLAttributes, ReactNode } from 'react';

import { ButtonType } from '@utils/types';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: ButtonType;
}

const className =
  'py-4 px-8 rounded-lg w-full py-[10px] lg:py-4 lg:w-40 text-xs lg:text-sm rounded font-bold leading-normal focus:outline-none transition-all';

const PrimaryButton = ({ children, ...rest }: Pick<Props, 'children'>) => {
  return (
    <button
      {...rest}
      className={`${className} bg-blue-500 hover:bg-blue-300 text-white`}
    >
      {children}
    </button>
  );
};

const SecondaryButton = ({ children, ...rest }: Pick<Props, 'children'>) => {
  return (
    <button
      {...rest}
      className={`${className} border border-solid border-primary-100 bg-white hover:bg-gray-100 text-blue-ribbon`}
    >
      {children}
    </button>
  );
};

const Button = ({ children, type = 'primary', ...rest }: Props) => {
  const renderButtonAccordingToType = () => {
    switch (type) {
      case 'primary':
        return <PrimaryButton {...rest}>{children}</PrimaryButton>;
      case 'secondary':
        return <SecondaryButton {...rest}>{children}</SecondaryButton>;
      default:
        throw new Error('Invalid button type');
    }
  };
  return <>{renderButtonAccordingToType()}</>;
};

export default Button;
