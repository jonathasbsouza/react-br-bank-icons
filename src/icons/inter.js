import React from 'react';

const original = (
  <g>
    <path d="M0 2C0 0.89543 0.895431 0 2 0H22C23.1046 0 24 0.895431 24 2V22C24 23.1046 23.1046 24 22 24H2C0.89543 24 0 23.1046 0 22V2Z" fill="url(#paint0_linear)" />
    <path d="M8.83771 10.045C8.67555 10.045 8.53141 9.9189 8.53141 9.75674C8.53141 9.75674 8.53141 9.75674 8.53141 9.73872C8.53141 9.57656 8.65754 9.43242 8.83771 9.43242C9.01789 9.43242 9.14401 9.57656 9.14401 9.73872C9.14401 9.9189 9.01789 10.045 8.83771 10.045ZM8.83771 9.36035C8.60348 9.36035 8.44133 9.54053 8.44133 9.73872C8.44133 9.93692 8.60348 10.1171 8.83771 10.1171C9.07194 10.1171 9.2341 9.93692 9.2341 9.73872C9.2341 9.54053 9.07194 9.36035 8.83771 9.36035ZM7.75666 9.93692L7.81071 9.99097C7.73864 10.063 7.64855 10.1171 7.50441 10.1171C7.2882 10.1171 7.10802 9.95493 7.10802 9.73872C7.10802 9.52251 7.27018 9.36035 7.50441 9.36035C7.64855 9.36035 7.72062 9.4144 7.81071 9.46846L7.75666 9.52251C7.68458 9.48647 7.61251 9.45044 7.50441 9.45044C7.32423 9.45044 7.19811 9.57656 7.19811 9.75674C7.19811 9.93692 7.32423 10.063 7.50441 10.063C7.61251 10.045 7.68458 10.009 7.75666 9.93692ZM6.31524 9.37837H6.40533V10.1171H6.33326L5.82877 9.52251V10.1171H5.73868V9.37837H5.82877L6.31524 9.97295V9.37837ZM4.47745 9.84683L4.65762 9.46846L4.8378 9.84683H4.47745ZM4.62159 9.37837L4.26123 10.1171H4.35132L4.44141 9.9189H4.85582L4.9459 10.1171H5.03599L4.67564 9.37837C4.69366 9.37837 4.62159 9.37837 4.62159 9.37837ZM3.34233 10.045H3.09009V9.77476H3.34233C3.46846 9.77476 3.54053 9.82881 3.54053 9.90088C3.54053 9.99097 3.46846 10.045 3.34233 10.045ZM3.09009 9.45044H3.32432C3.43242 9.45044 3.50449 9.50449 3.50449 9.57656C3.50449 9.66665 3.43242 9.70269 3.32432 9.70269H3.09009V9.45044ZM3.45044 9.73872C3.52251 9.70269 3.57656 9.66665 3.57656 9.55855C3.57656 9.45044 3.46846 9.37837 3.32432 9.37837H3V10.1171H3.34233C3.50449 10.1171 3.63062 10.045 3.63062 9.9189C3.63062 9.81079 3.55855 9.75674 3.45044 9.73872Z" fill="white" />
    <path d="M11.3428 9V10.8558H12.8563V11.9909H11.3428V13.7206C11.3428 14.099 11.523 14.2612 11.8833 14.2972C12.2977 14.3512 12.622 14.1711 12.8563 14.063L12.8923 14.0449L13.3608 15.0539L13.3427 15.0719C12.7301 15.3782 12.3518 15.4683 11.8833 15.4683C10.7482 15.4683 10.1356 14.8377 10.1356 13.7026V9.63062L11.3428 9ZM18.1895 10.9819H18.1715V15.3242H19.3786V11.9369C19.5228 11.9189 19.6669 11.9008 19.9552 11.9008C20.2435 11.9008 20.4237 11.9369 20.6219 11.9909H20.6399L21.0002 10.8738H20.9642C20.6038 10.7837 20.3156 10.7477 19.8471 10.7477C19.3967 10.7477 18.694 10.8018 18.1895 10.9819ZM13.3608 13.1441C13.3608 11.6486 14.0454 10.7477 15.4328 10.7477C16.8021 10.7477 17.5408 11.5045 17.5408 12.9999L15.5049 13.9909L14.9823 12.9999L16.2796 12.3333C16.2976 12.045 15.9193 11.8648 15.4508 11.8828C14.9103 11.9189 14.604 12.1711 14.604 13.09C14.604 13.9909 15.0364 14.2972 15.685 14.2972C16.2616 14.2972 16.8201 14.2071 17.1084 14.117H17.1264L17.4868 15.1981H17.4688C16.9823 15.3602 16.3337 15.4323 15.685 15.4323C14.1535 15.4323 13.3608 14.6575 13.3608 13.1441ZM5.3429 10.9819H5.32488V15.3242H6.53207V11.9369C6.74828 11.9008 6.91044 11.9008 7.23475 11.9008C7.82934 11.9008 8.11762 12.1531 8.11762 12.6576V15.3422H9.3248V12.7296C9.3248 11.4864 8.56806 10.7477 7.32484 10.7477C6.60414 10.7477 5.79334 10.8378 5.3429 10.9819ZM3.00061 15.3242H4.20779V10.8558H3.00061V15.3242Z" fill="white" />
    <defs>
      <linearGradient id="paint0_linear" x1="-0.716046" y1="11.9853" x2="24.015" y2="11.9853" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF8700" />
        <stop offset="1" stopColor="#FF500F" />
      </linearGradient>
    </defs>
  </g>
);

const mono = (
  <g>
    <path  d="M0 2C0 0.89543 0.895431 0 2 0H22C23.1046 0 24 0.895431 24 2V22C24 23.1046 23.1046 24 22 24H2C0.89543 24 0 23.1046 0 22V2ZM8.83769 10.045C8.67553 10.045 8.53139 9.9189 8.53139 9.75674V9.73872C8.53139 9.57657 8.65752 9.43242 8.83769 9.43242C9.01787 9.43242 9.14399 9.57657 9.14399 9.73872C9.14399 9.9189 9.01787 10.045 8.83769 10.045ZM8.83769 9.36035C8.60346 9.36035 8.44131 9.54053 8.44131 9.73872C8.44131 9.93692 8.60346 10.1171 8.83769 10.1171C9.07192 10.1171 9.23408 9.93692 9.23408 9.73872C9.23408 9.54053 9.07192 9.36035 8.83769 9.36035ZM7.75663 9.93692L7.81069 9.99097C7.73862 10.063 7.64853 10.1171 7.50439 10.1171C7.28818 10.1171 7.108 9.95494 7.108 9.73872C7.108 9.52251 7.27016 9.36035 7.50439 9.36035C7.63397 9.36035 7.7053 9.40404 7.78385 9.45214L7.81069 9.46846L7.75663 9.52251C7.68456 9.48648 7.61249 9.45044 7.50439 9.45044C7.32421 9.45044 7.19809 9.57657 7.19809 9.75674C7.19809 9.93692 7.32421 10.063 7.50439 10.063C7.61249 10.045 7.68456 10.009 7.75663 9.93692ZM6.31522 9.37837H6.40531V10.1171H6.33324L5.82875 9.52251V10.1171H5.73866V9.37837H5.82875L6.31522 9.97295V9.37837ZM4.47742 9.84683L4.6576 9.46846L4.83778 9.84683H4.47742ZM4.62157 9.37837L4.26121 10.1171H4.3513L4.44139 9.9189H4.85579L4.94588 10.1171H5.03597L4.67562 9.37837H4.62157ZM3.34231 10.045H3.09007V9.77476H3.34231C3.46844 9.77476 3.54051 9.82881 3.54051 9.90088C3.54051 9.99097 3.46844 10.045 3.34231 10.045ZM3.09007 9.45044H3.32429C3.4324 9.45044 3.50447 9.50449 3.50447 9.57657C3.50447 9.66665 3.4324 9.70269 3.32429 9.70269H3.09007V9.45044ZM3.45042 9.73872C3.52249 9.70269 3.57654 9.66665 3.57654 9.55855C3.57654 9.45044 3.46844 9.37837 3.32429 9.37837H2.99998V10.1171H3.34231C3.50447 10.1171 3.6306 10.045 3.6306 9.9189C3.6306 9.81079 3.55853 9.75674 3.45042 9.73872ZM11.3427 10.8558V9L10.1355 9.63062V13.7026C10.1355 14.8377 10.7481 15.4683 11.8833 15.4683C12.3517 15.4683 12.7301 15.3782 13.3427 15.0719L13.3607 15.0539L12.8922 14.0449L12.8562 14.063C12.8337 14.0733 12.8104 14.0844 12.7863 14.0958C12.5589 14.2035 12.2579 14.346 11.8833 14.2972C11.5229 14.2612 11.3427 14.099 11.3427 13.7206V11.9909H12.8562V10.8558H11.3427ZM18.1714 10.9819H18.1894C18.6939 10.8018 19.3966 10.7477 19.8471 10.7477C20.3155 10.7477 20.6038 10.7837 20.9641 10.8738H21.0002L20.6398 11.9909H20.6218C20.4236 11.9369 20.2434 11.9008 19.9552 11.9008C19.6669 11.9008 19.5227 11.9189 19.3786 11.9369V15.3242H18.1714V10.9819ZM15.4327 10.7477C14.0454 10.7477 13.3607 11.6486 13.3607 13.1441C13.3607 14.6575 14.1535 15.4323 15.685 15.4323C16.3336 15.4323 16.9822 15.3602 17.4687 15.1981H17.4867L17.1264 14.117H17.1084C16.8201 14.2071 16.2615 14.2972 15.685 14.2972C15.0363 14.2972 14.6039 13.9909 14.6039 13.09C14.6039 12.1711 14.9102 11.9189 15.4507 11.8828C15.9192 11.8648 16.2976 12.045 16.2796 12.3333L14.9823 12.9999L15.5048 13.9909L17.5408 12.9999C17.5408 11.5045 16.8021 10.7477 15.4327 10.7477ZM5.32484 10.9819H5.34285C5.7933 10.8378 6.60409 10.7477 7.32479 10.7477C8.56801 10.7477 9.32475 11.4864 9.32475 12.7296V15.3422H8.11757V12.6576C8.11757 12.1531 7.82929 11.9008 7.23471 11.9008C6.91039 11.9008 6.74823 11.9008 6.53202 11.9369V15.3242H5.32484V10.9819ZM4.20774 15.3242H3.00056V10.8558H4.20774V15.3242Z" fillRule="evenodd" clipRule="evenodd"/>
  </g>
);

const Inter = {
  bankName: 'inter',
  bankId: 77,
  ariaTitle: 'Banco Inter',
  svg: {
    original,
    mono,
  },
};

export default Inter;