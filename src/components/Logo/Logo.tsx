import React from 'react';

import { ReactComponent as IceoLogo } from './logo.svg';

interface LogoProps {
    width?: number | string;
    height?: number | string;
}

export const Logo = ({ width, height }: LogoProps) => <IceoLogo width={width} height={height} />;
