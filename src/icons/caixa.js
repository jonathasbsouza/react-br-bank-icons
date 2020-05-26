import React from 'react';

const original = (
  <g>
    <path d="M0 0H24V24H0V0Z" fill="#0070AF" />
    <path fillRule="evenodd" clipRule="evenodd" d="M8.64331 12.5025H14.7147L18.8747 19.3922H12.8024L8.64331 12.5025Z" fill="white" />
    <path fillRule="evenodd" clipRule="evenodd" d="M9.27441 11.4444H15.5498L21 4.58361H14.7246L9.27441 11.4444Z" fill="#F6822A" />
    <path fillRule="evenodd" clipRule="evenodd" d="M3 19.434H9.27441L14.7246 12.4896H8.44918L3 19.434Z" fill="#F6822A" />
    <path fillRule="evenodd" clipRule="evenodd" d="M5.2627 4.49999H11.119L15.1317 11.4444H9.27442L5.2627 4.49999Z" fill="white" />
  </g>
);

const mono = (
  <g>
    <path d="M24 0H0V24H24V0ZM5.26276 4.49999H11.1191L12.6653 7.17582L14.7245 4.58361H21L15.5498 11.4444H15.1318H9.27448H9.27435L9.27443 11.4443L5.26276 4.49999ZM14.7144 12.5025H14.7147L18.8747 19.3922H12.8024L11.2828 16.875L9.27441 19.434H3L8.44918 12.4896H14.7246L14.7144 12.5025Z" fillRule="evenodd" clipRule="evenodd" />
  </g>
);

const Caixa = {
  bankName: 'caixa',
  bankId: 104,
  ariaTitle: 'Caixa Econômica Federal',
  svg: {
    original,
    mono,
  },
};

export default Caixa;