import { css } from "@emotion/react";
import { colors } from "./theme";

const globalStyles = css`
  :root {
    --color-primary: ${colors.primary};
    --color-background: ${colors.background};
    --color-content: ${colors.content};
    --color-divider: ${colors.divider};

    --text-primary: ${colors.text.primary};
    --text-secondary: ${colors.text.secondary};

    --color-success: ${colors.success.main};
    --color-success-l: ${colors.success.light};
    --color-success-d: ${colors.success.dark};

    --color-error: ${colors.error.main};
    --color-error-l: ${colors.error.light};
    --color-error-d: ${colors.error.dark};

    --color-info: ${colors.info.main};
    --color-info-l: ${colors.info.light};
    --color-info-d: ${colors.info.dark};
  }
`;

export default globalStyles;
