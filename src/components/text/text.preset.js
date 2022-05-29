import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

const BASE = {
  fontFamily: typography.primary,
  fontWeight: 400,
  color: colors.white,
};

const BOLD = {
  fontFamily: typography.primary,
  color: colors.white,
  fontWeight: "bold",
};

export const presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BOLD,
    fontSize: 24,
    lineHeight: 26.4,
  },
  h2: {
    ...BOLD,
    fontSize: 20,
    lineHeight: 22,
  },
  h3: {
    ...BOLD,
    fontSize: 18,
    lineHeight: 22,
  },
  h4: {
    ...BOLD,
    fontSize: 16,
    lineHeight: 17.6,
  },
  small: {
    ...BOLD,
    fontSize: 14,
    lineHeight: 22,
  },
};
