const icons = [
  {
    bankName: 'itau',
    bankId: 341,
    svg: {
      color: '/a',
      mono: '/b',
    },
  },
];

export const getIconByName = (bankName) => icons.find((icon) => new RegExp(bankName, 'i').test(icon.bankName));

export const getIconById = (bankId) => {
  if (isNaN(Number(bankId))) {
    throw Error('The provided BankId is not a number');
  }
  return icons.find((icon) => icon.bankId == bankId);
};
