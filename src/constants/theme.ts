export const mq = {
  fromMobileSm: "@media (min-width: 375px)",
  fromMobileLg: "@media (min-width: 546px)",
  fromTabletSm: "@media (min-width: 768px)",
  fromTabletMd: "@media (min-width: 938px)",
  fromTabletLg: "@media (min-width: 1030px)",
  fromDesktopSm: "@media (min-width: 1270px)",
  fromDesktopLg: "@media (min-width: 1560px)",
  fromDesktopXl: "@media (min-width: 2240px)",
};

export const colors = {
  primary: {
    dark: "#884CD3",
    main: "#9D68DF",
    light: "#F5F0FA",
  },
  content: "#FFFFFF",
  background: "#F3F5F8",
  text: {
    primary: "#383838",
    secondary: "#5E5E5E",
  },
  divider: "#d7d7d7",
  success: {
    light: "#F6FFF8",
    main: "#50A773",
    dark: "#169F00",
  },
  error: {
    light: "#FFF6F6",
    main: "#F03232",
    dark: "#9F0000",
  },
  info: {
    light: "#F6FDFF",
    main: "#327DF0",
    dark: "#00799F",
  },
} as const;
