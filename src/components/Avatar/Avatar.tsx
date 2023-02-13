import React from 'react';

import { Avatar as MuiAvatar } from '@mui/material';
import personLogo from './avatar.png';

export const Avatar = () => <MuiAvatar src={personLogo} sx={{ width: 40, height: 40 }} />;
