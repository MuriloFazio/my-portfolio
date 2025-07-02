
export type Theme = {
  colors: {
    primary: string;
    secondary: string;
  },
  fonts: {
    primary: string;
    secondary: string;
  },
  backgroundColor: {
    primary: string;
    secondary: string;
  },
  breakpoint: {
    mobile: string,
    desktop: string,
    wide: string,
  },
}

export const theme: Theme = {
  colors: {
    primary: "#1f2937",
    secondary: "#FFFFFF",
  },
  fonts: {
    primary: `'Roboto', sans-serif`,
    secondary: `'Arial', sans-serif`,
  },
  backgroundColor: {
    primary: "#F5F5F5",
    secondary: "#333333",
  },
  breakpoint: {
    mobile: '768px',
    desktop: '1024px',
    wide: '1440px',
  },
};

// text colors:
// primary: #15161A;
// secondary: #4A4C52;
// weak: #ABAEB8;
// white: #FFFFFF;
//
// background colors:
// primary: #fff;
// secondary: #27282e;
// button: "#0070f3";
//
// border colors:
// primary: #CBCED6;
//


// const breakpoint = {
//   mobile: '768px',
//   desktop: '1024px',
//   wide: '1440px',
// };