import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { ROUTES } from './config';
import { ThemeProvider } from './contexts/ThemeProvider';
import { BasicLayout } from './layouts/Basic';
import { BalancesPage } from './pages/Balances';
import { balanceLoader } from './pages/Balances/balanceLoader';
import { CurrenciesPage } from './pages/Currencies';
import { ErrorPage } from './pages/Error';
import { MainPage } from './pages/Main';
import { UsersPage } from './pages/Users';
import { userLoader } from './pages/Users/userLoader';

const router = createBrowserRouter([
    {
        path: ROUTES.MAIN,
        element: (
            <BasicLayout>
                <Outlet />
            </BasicLayout>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <MainPage />,
                    },
                    {
                        path: `${ROUTES.USERS}/:userId`,
                        element: <UsersPage />,
                        loader: userLoader,
                    },
                    {
                        path: ROUTES.CURRENCIES,
                        element: <CurrenciesPage />,
                    },
                    {
                        path: `${ROUTES.BALANCES}/:balanceId`,
                        element: <BalancesPage />,
                        loader: balanceLoader,
                    },
                ],
            },
        ],
    },
]);

const App = () => (
    <ThemeProvider>
        <RouterProvider router={router} />
    </ThemeProvider>
);

export default App;
