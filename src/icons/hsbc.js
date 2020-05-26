import React from 'react';

const original = (
  <g>
    <path d="M0 0H24V24H0V0Z" fill="#DB0011" />
    <path d="M21 12.0029L16.5027 7.495V16.5003L21 12.0029Z" fill="white" />
    <path d="M12.0053 12.0029L16.5026 7.495H7.50793L12.0053 12.0029Z" fill="white" />
    <path d="M3 12.0029L7.50794 16.5003V7.495L3 12.0029Z" fill="white" />
    <path d="M12.0053 12.0029L7.50793 16.5003H16.5026L12.0053 12.0029Z" fill="white" />
  </g>
);

const mono = (
  <g>
    <path d="M0 0H24V24H0V0ZM21 12.0029L16.5026 7.495H7.50793L3 12.0029L7.50794 16.5003H16.5026L21 12.0029ZM12.0053 12.0029L7.50793 7.495L7.50794 16.5003L12.0053 12.0029ZM12.0053 12.0029L16.5026 16.5003V7.495L12.0053 12.0029Z" fillRule="evenodd" clipRule="evenodd" />
  </g>
);

const HSBC = {
  bankName: 'hsbc',
  bankId: 399,
  ariaTitle: 'HSBC',
  svg: {
    original,
    mono,
  },
};

export default HSBC;