import dayjs from 'dayjs';

import { Balance } from '../../domain/Balance';
import { BalanceTypeFilter, DateInterval } from './filters';

interface FilterOptions {
    dateInterval?: DateInterval;
    balanceType?: BalanceTypeFilter;
}

export const getFilteredBalances = (
    data: Balance[],
    { dateInterval, balanceType }: FilterOptions,
) => {
    const parsedDateInterval = dateInterval && parseInt(dateInterval, 10);

    return data.filter((balance) => {
        const isCorrectBalanceType =
            balanceType !== 'all' ? balance.balanceType === balanceType : true;
        const isCorrectDate = parsedDateInterval
            ? dayjs(balance.createdAt).isAfter(dayjs().subtract(parsedDateInterval))
            : true;

        return isCorrectBalanceType && isCorrectDate;
    });
};
