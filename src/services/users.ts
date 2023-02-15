import { User } from '../domain/User';
import users from '../mocks/mock-users.json';

export const getUsers = () => users.data.collection;
export const getUser = (userId: string) =>
    users.data.collection.find((user) => user.userId === userId) as User | undefined;
