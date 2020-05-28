var heading = {
  fontFamily: "heading",
  fontWeight: "heading",
  lineHeight: "heading",
}
var index = {
  useCustomProperties: true,
  initialColorMode: "system",
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#33e",
    secondary: "#119",
    muted: "#f6f6f6",
    highlight: "#efeffe",
    gray: "#777",
    accent: "#609",
    blue: "#007bff",
    indigo: "#6610f2",
    purple: "#6f42c1",
    pink: "#e83e8c",
    red: "#dc3545",
    orange: "#fd7e14",
    yellow: "#ffc107",
    green: "#28a745",
    teal: "#20c997",
    cyan: "#17a2b8",
    grayDark: "#343a40",
    text: "#212529",
    background: "#fff",
    primary: "#007bff",
    secondary: "#6c757d",
    muted: "#dee2e6",
    success: "#28a745",
    info: "#17a2b8",
    warning: "#ffc107",
    danger: "#dc3545",
    light: "#f8f9fa",
    dark: "#343a40",
    textMuted: "#6c757d",
    gray: [
      "#fff",
      "#f8f9fa",
      "#e9ecef",
      "#dee2e6",
      "#ced4da",
      "#adb5bd",
      "#6c757d",
      "#495057",
      "#343a40",
      "#212529",
    ],
    modes: {
      cool: {
        text: "#000200",
        background: "#FAFAF9",
        muted: "rgba(0,0,0,.1)",
        primary: "#F25F5C",
        primaryDark: "#B51916",
        primaryLight: "#FCBAB1",
        blue: "#B6DEE2",
        blueDark: "#247BA0",
        greenDark: "#2D5948",
        green: "#B2E4DC",
        yellowDark: "#FFDA3A",
        yellow: "#FCF5C7",
      },
      dark: {
        text: "#FFFFFF",
        background: "#212529",
        primary: "#3cf",
        secondary: "#e0f",
        muted: "#191919",
        highlight: "#29112c",
        gray: "#999",
        accent: "#c0f",
      },
      deep: {
        text: "hsl(210, 50%, 96%)",
        background: "hsl(230, 25%, 18%)",
        primary: "hsl(260, 100%, 80%)",
        secondary: "hsl(290, 100%, 80%)",
        highlight: "hsl(260, 20%, 40%)",
        accent: "hsl(290, 100%, 80%)",
        muted: "hsla(230, 20%, 0%, 20%)",
        gray: "hsl(210, 50%, 60%)",
      },
      swiss: {
        text: "hsl(10, 20%, 20%)",
        background: "hsl(10, 10%, 98%)",
        primary: "hsl(10, 80%, 50%)",
        secondary: "hsl(10, 60%, 50%)",
        highlight: "hsl(10, 40%, 90%)",
        accent: "hsl(250, 60%, 30%)",
        muted: "hsl(10, 20%, 94%)",
        gray: "hsl(10, 20%, 50%)",
      },
    },
  },
  fonts: {
    body: "Inter",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  sizes: {
    container: 1300,
    sidebar: 200,
  },
  borders: {
    thick: "2px solid var(--theme-ui-colors-text, black)",
    thin: "1px solid var(--theme-ui-colors-text, black)",
  },
  shadows: {
    outline: "0 0 0px 1px black rgba(0,0,0,.4)",
    default: "15px 24px 25px -18px rgba(0,0,0,.4)",
    hover: "2px 8px 10px -6px rgba(0,0,0,.4)",
  },
  layout: {
    header: {},
    aside: {
      border: "thin",
      bg: "muted",
      p: 1,
    },
    main: {
      flex: "1 1 auto",
      display: "flex",
      alignItems: "center",
    },
    footer: {
      bg: "text",
      color: "background",
      width: "100%",
    },
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    bold: 600,
    heading: 700,
    display: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  textStyles: {
    heading: heading,
    display: {
      variant: "textStyles.heading",
      fontSize: [4, 5],
      fontWeight: "display",
      letterSpacing: "-0.03em",
    },
  },
  letterSpacings: {
    heading: "-0.05em",
    caps: "0.1em",
  },
  text: {
    caps: {
      textTransform: "uppercase",
      letterSpacing: ".2em",
    },
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
  },
  links: {
    nav: {
      textTransform: "uppercase",
      letterSpacing: "0.2em",
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.5)",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "textStyles.display",
    },
    h2: {
      variant: "textStyles.heading",
      fontSize: 5,
    },
    h3: {
      variant: "textStyles.heading",
      fontSize: 4,
    },
    h4: {
      variant: "textStyles.heading",
      fontSize: 3,
    },
    h5: {
      variant: "textStyles.heading",
      fontSize: 2,
    },
    h6: {
      variant: "textStyles.heading",
      fontSize: 1,
    },
    a: {
      color: "primary",
      "&:hover": {
        color: "highlight",
      },
    },
    buttons: {
      primary: {
        color: "background",
        bg: "primary",
      },
      inverted: {
        color: "primary",
        bg: "background",
      },
      secondary: {
        color: "background",
        bg: "secondary",
      },
      gray: {
        color: "background",
        bg: "gray",
      },
    },
  },
}

module.exports = index
//# sourceMappingURL=index.js.map
