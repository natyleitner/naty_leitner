import React from 'react';
import clsx from 'clsx';
import LogoIcon from './logoIcon';

export enum LogoColor {
  white,
  black,
}

const Logo = ({ logoColor }: { logoColor: LogoColor }) => {
  return (
    <>
      <LogoIcon logoColor={logoColor} />
      <span
        className={clsx(
          'ml-2 text-xl font-bold tracking-wide uppercase',
          logoColor === LogoColor.white && 'text-gray-100',
          logoColor === LogoColor.black && 'text-gray-800'
        )}
      >
        Naty Leitner
      </span>
    </>
  );
};

export default Logo;
