import { LoaderFunction } from 'react-router-dom';

import { getUser } from '../../services/users';

export const userLoader: LoaderFunction = ({ params }) => {
    const user = params.userId && getUser(params.userId);

    if (!user) {
        throw new Response('', {
            status: 404,
            statusText: 'Not Found',
        });
    }

    return user;
};
