jest.mock('../icons');
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import BankIcon from '../BankIcon';

const defaultProps = {
  bankName: 'cajuina',
  bankId: -1,
  size: 16,
};

const BankIconComponent = (props = defaultProps) => shallow(<BankIcon {...props} />);
const findChild = (selector) => BankIconComponent().find(selector);

describe('<BankIcon />', () => {
  it('renders BankIcon component correctly', () => {
    const component = renderer.create(<BankIcon {...defaultProps} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should do something', () => {
    expect(true).toBeTruthy();
  });
});
