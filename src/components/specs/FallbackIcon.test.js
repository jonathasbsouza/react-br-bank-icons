jest.mock('../../icons');
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import FallbackIcon from '../FallbackIcon';

const defaultProps = {
  color: 'white',
  size: 16,
};

const BankIconComponent = (props = defaultProps) => shallow(<FallbackIcon {...props} />);
const findChild = (selector) => BankIconComponent().find(selector);

describe('<FallbackIcon />', () => {
  it('renders BankIcon component correctly', () => {
    const component = renderer.create(<FallbackIcon {...defaultProps} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have an svg', () => {
    expect(findChild('svg')).toBeTruthy();
  });
});
