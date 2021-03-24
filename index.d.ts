import * as React from 'react';

declare module 'react-br-bank-icons' {
  interface BankIconProps {
    [key: string]: string | number;
    bankName?: string;
    bankId?: number;
    size?: number | string;
    color?: string;
    borderRadius?: number;
  }

  class BankIcon extends React.Component<BankIconProps> {}

  export default BankIcon;
}
