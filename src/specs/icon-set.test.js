jest.mock('../icons');
import React from 'react';

import * as IconSet from '../icon-set';
const { getIconByName, getIconById } = IconSet;


describe('Icons Dataset', () => {
  const expectedBankObject = {
    bankName: 'pitu',
    bankId: -2,
    ariaTitle: 'Banco Pitú',
    svg: {
      original: <div>Pitú Original.</div>,
      mono: <div>Pitú Cola.</div>,
    },
  };

  it('should return the icon data when exact bank name is given', () => {
    const bank = getIconByName('pitu');
    expect(bank).toEqual(expectedBankObject);
  });

  it('should return the icon data when bank name is given with case variations', () => {
    const bank = getIconByName('PiTu');
    expect(bank).toEqual(expectedBankObject);
  });

  it('should return the icon data when bank id is given as number', () => {
    const bank = getIconById(-2);
    expect(bank).toEqual(expectedBankObject);
  });

  it('should return the icon data when bank id is given as string and its a valid number', () => {
    const bank = getIconById('-2');
    expect(bank).toEqual(expectedBankObject);
  });

  it('should return undefined when bank id is given as string and its an invalid number', () => {
    expect(() => getIconById('ABC')).toThrowError();
  });

  it('should return undefined if no bank is found by name', () => {
    const bank = getIconByName('nobank');
    expect(bank).toBeUndefined();
  });

  it('should return undefined if no bank is found by name', () => {
    const bank = getIconById('-9999');
    expect(bank).toBeUndefined();
  });
});
