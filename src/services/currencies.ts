import { Currency } from '../domain/Currency';
import currencies from '../mocks/mock-currencies.json';

export const getCurrencies = () => currencies.data.collection;
export const getCurrency = (currencyId: string) =>
    currencies.data.collection.find((currencies) => currencies.currencyId === currencyId) as
        | Currency
        | undefined;
