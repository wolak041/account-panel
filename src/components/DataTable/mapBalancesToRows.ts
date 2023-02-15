import { Balance } from '../../domain/Balance';
import { formatFunds } from '../../helpers/formatFunds';
import { getFormattedDate } from '../../helpers/getFormattedDate';

export const mapBalancesToRows = (balances: Balance[]) =>
    balances.map(
        ({
            balanceId,
            user,
            currency,
            updatedAt,
            createdAt,
            fundsAvailable,
            balanceName,
            balanceType,
        }) => {
            const updatedAtDate = getFormattedDate(updatedAt);
            const createdAtDate = getFormattedDate(createdAt);
            const funds = formatFunds(fundsAvailable, currency.precision);

            return {
                id: balanceId,
                userName: user.userName,
                balanceName,
                balanceType,
                fundsAvailable: `${funds} ${currency.currencyName}`,
                updatedAt: updatedAtDate,
                createdAt: createdAtDate,
            };
        },
    );
