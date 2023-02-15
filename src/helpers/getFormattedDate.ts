import dayjs from 'dayjs';

export const getFormattedDate = (date: Date | number) => dayjs(date).format('DD-MM-YYYY HH:mm');
