import React from "react";
import FallbackIcon from "./FallbackIcon";
import { propTypes, defaultProps } from "./types/BankIcon.types";
import { getIconByName, getIconById } from "../util/icon-set";

const getIcon = (bankName, bankId) => {
  if (bankName && bankId) {
    console.warn(
      "Both BankID and BankName were provided. BankName will be used."
    );
    return getIconByName(bankName);
  }
  return bankId ? getIconById(bankId) : getIconByName(bankName);
};

const BankIcon = ({
  bankName,
  bankId,
  size,
  color,
  borderRadius,
  fallbackIcon,
}) => {
  const bankIconData = getIcon(bankName, bankId);

  const svgBorderRadius = (size * borderRadius) / 24;

  if (!bankIconData) {
    if (fallbackIcon) {
      return (
        <fallbackIcon size={size} borderRadius={borderRadius} color={color} />
      );
    }
    return (
      <FallbackIcon size={size} borderRadius={borderRadius} color={color} />
    );
  }

  const svgPath = color ? bankIconData.svg.mono : bankIconData.svg.original;
  const ariaLabel = `Ícone representando a marca do ${bankIconData.ariaTitle}.`;

  return (
    <svg
      width={size}
      style={{ borderRadius: svgBorderRadius }}
      className={`rbbi-${bankIconData.bankName}`}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
    >
      <title>{bankIconData.ariaTitle}</title>
      <desc>{ariaLabel}</desc>
      {svgPath}
    </svg>
  );
};

BankIcon.propTypes = propTypes;
BankIcon.defaultProps = defaultProps;

export default BankIcon;
