import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme 
  {
    colors: {
      primary: string,
      secondary: string,
    },
    fonts: {
      primary: string,
      secondary: string,
    },
    backgroundColor: {
      primary: string,
      secondary: string,
    },
    breakpoint: {
      mobile: string,
      desktop: string,
      wide: string,
    },
  }
}
