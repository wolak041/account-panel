import { Currency } from './Currency';
import { User } from './User';

export interface RawBalance {
    userId: string;
    balanceId: string;
    currencyId: string;
    balanceType: string;
    balanceName: string;
    fundsAvailable: string;
    updatedAt: number;
    createdAt: number;
}

export enum BalanceType {
    Admin = 'ADMIN',
    User = 'USER',
    System = 'SYSTEM',
}

export interface Balance {
    user: User;
    balanceId: string;
    currency: Currency;
    balanceType: BalanceType;
    balanceName: string;
    fundsAvailable: string;
    updatedAt: number;
    createdAt: number;
}

interface MapRawBalanceToBalanceProps {
    rawBalance: RawBalance;
    user: User;
    currency: Currency;
}

export const mapRawBalanceToBalance = ({
    rawBalance,
    user,
    currency,
}: MapRawBalanceToBalanceProps): Balance => {
    const { userId, currencyId, balanceType, ...balance } = rawBalance;

    return {
        ...balance,
        balanceType: balanceType as BalanceType,
        user,
        currency,
    };
};
