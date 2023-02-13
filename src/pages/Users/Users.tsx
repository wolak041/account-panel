import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { Box } from '@mui/material';
import { User } from '../../interfaces/User';

export const UsersPage = () => {
    const data = useLoaderData() as User;

    return <Box className="users">Użytkownik {data.userName}</Box>;
};
