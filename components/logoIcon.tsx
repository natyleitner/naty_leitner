import { LogoColor } from './logo';
import clsx from 'clsx';

const LogoIcon = ({ logoColor }: { logoColor: LogoColor }) => (
  <svg
    className={clsx(
      'w-8',
      logoColor === LogoColor.white && 'text-teal-accent-400',
      logoColor === LogoColor.black && 'text-deep-purple-accent-400'
    )}
    viewBox="0 0 24 24"
    strokeLinejoin="round"
    strokeWidth="2"
    strokeLinecap="round"
    strokeMiterlimit="10"
    stroke="currentColor"
    fill="none"
  >
    <rect x="3" y="1" width="7" height="12" />
    <rect x="3" y="17" width="7" height="6" />
    <rect x="14" y="1" width="7" height="6" />
    <rect x="14" y="11" width="7" height="12" />
  </svg>
);

export default LogoIcon;
