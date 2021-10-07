export const stringToDate = (str: string): Date => {
  if (str === '*') {
    return new Date(str);
  }

  const [month, year] = str.split('-');
  return new Date(`${month} 1 20${year}`);
};

export const dateToString = (date: Date): string => {
  if (isNaN(date.valueOf())) {
    return '*';
  }

  const [, month, , year] = date.toString().split(' ');
  return `${month.toUpperCase()}-${year.slice(2, 4)}`;
};

export const parseCSV = (str: string) => {
  const [headersStr, ...lines] = str.split(';\n');

  const headers = headersStr.split(';');

  return lines.map((line) => {
    return line.split(';').reduce((acc, value, i) => {
      if (['ACCOUNT', 'DEBIT', 'CREDIT'].includes(headers[i])) {
        acc[headers[i]] = parseInt(value, 10);
      } else if (headers[i] === 'PERIOD') {
        acc[headers[i]] = stringToDate(value);
      } else {
        acc[headers[i]] = value;
      }
      return acc;
    }, {} as {[key: string]: any});
  });
};

export const toCSV = (arr: {[key: string]: any}[]) => {
  const headers = Object.keys(arr[0]).join(';');
  const lines = arr.map((obj) => Object.values(obj).join(';'));
  return [headers, ...lines].join(';\n');
};

export const parseUserInput = (str: string) => {
  const [startAccount, endAccount, startPeriod, endPeriod, format] = str.split(' ');

  return {
    startAccount: parseInt(startAccount, 10),
    endAccount: parseInt(endAccount, 10),
    startPeriod: stringToDate(startPeriod),
    endPeriod: stringToDate(endPeriod),
    format,
  };
};
