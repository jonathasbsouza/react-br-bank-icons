import * as React from 'react';

declare module 'react-br-bank-icons' {
  interface BankIconProps {
    [key: string]: string | number;
    name?: string;
    bankId?: number;
    size?: number | string;
    color?: string
  }

  class BankIcon extends React.Component<BankIconProps> {}

  export default BankIcon;
}