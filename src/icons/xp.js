import React from 'react';

const original = (
  <g>
    <path d="M0 2C0 0.89543 0.895431 0 2 0H22C23.1046 0 24 0.895431 24 2V22C24 23.1046 23.1046 24 22 24H2C0.89543 24 0 23.1046 0 22V2Z" fill="#0070AF" />
    <path d="M8.64331 12.5025H14.7147L18.8747 19.3922H12.8024L8.64331 12.5025Z" fill="white" />
    <path d="M9.27441 11.4444H15.5498L21 4.58361H14.7246L9.27441 11.4444Z" fill="#F6822A" />
    <path d="M3 19.434H9.27441L14.7246 12.4896H8.44918L3 19.434Z" fill="#F6822A" />
    <path d="M5.2627 4.49999H11.119L15.1317 11.4444H9.27442L5.2627 4.49999Z" fill="white" />
  </g>
);

const mono = (
  <g>
    <path d=""  fillRule="evenodd" clipRule="evenodd" />
  </g>
);

const XP = {
  bankName: 'xp',
  bankId: 102,
  ariaTitle: 'Banco XP',
  svg: {
    original,
    mono,
  },
};

export default XP;