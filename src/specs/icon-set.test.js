import * as IconSet from '../icon-set';
const { getIconByName, getIconById } = IconSet;

describe('Icons Dataset', () => {
  const expectedBankObject = {
    bankName: 'itau',
    bankId: 341,
    svg: {
      color: '/a',
      mono: '/b',
    },
  };

  it('should return the icon data when exact bank name is given', () => {
    const bank = getIconByName('itau');
    expect(bank).toEqual(expectedBankObject);
  });

  it('should return the icon data when bank name is given with case variations', () => {
    const bank = getIconByName('ItaU');
    expect(bank).toEqual(expectedBankObject);
  });

  it('should return the icon data when bank id is given as number', () => {
    const bank = getIconById(341);
    expect(bank).toEqual(expectedBankObject);
  });

  it('should return the icon data when bank id is given as string and its a valid number', () => {
    const bank = getIconById('341');
    expect(bank).toEqual(expectedBankObject);
  });

  it('should return undefined when bank id is given as string and its an invalid number', () => {
    expect(() => getIconById('ABC')).toThrowError();
  });

  it('should return undefined if no bank is found by name', () => {
    const bank = getIconByName('DBS');
    expect(bank).toBeUndefined();
  });

  it('should return undefined if no bank is found by name', () => {
    const bank = getIconById('-9999');
    expect(bank).toBeUndefined();
  });
});
