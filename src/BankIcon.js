import React from 'react';
import { propTypes, defaultProps } from './types';
import { getIconByName, getIconById } from './icon-set';

const BankIcon = ({bankName, bankId, size, color}) => {

    const bankIconData = getIconByName(bankName); 
    const svgPath = (color ? bankIconData.svg.mono : bankIconData.svg.original );

    return (
        <svg width={size} className={'rbbi-' + bankIconData.bankName } height={size} viewBox="0 0 24 24" fill={ color } >
            <title>{bankIconData.ariaTitle}</title>
            <desc>{ 'Ícone representando a marca do ' + bankIconData.ariaTitle +'.' }</desc>
            <g dangerouslySetInnerHTML={{__html: svgPath }} />
        </svg>
    )}

BankIcon.propTypes = propTypes;
BankIcon.defaultProps = defaultProps;

export default BankIcon;