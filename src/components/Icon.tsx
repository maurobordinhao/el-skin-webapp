import React from 'react';
import { IconType } from 'react-icons';

interface IconProps {
  as: IconType;
  className?: string;
}

const Icon = ({ as, ...props }: IconProps): React.ReactElement => {
  // Forçamos o TypeScript a entender que o componente é seguro para uso em JSX
  const Component = as as React.ComponentType<any>;
  return <Component {...props} />;
};

export default Icon;
