var heading = {
  fontFamily: "heading",
  fontWeight: "heading",
  lineHeight: "heading",
}
var index = {
  useCustomProperties: true,
  initialColorMode: "system",
  colors: {
    modes: {
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
    body: "Cabin",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  sizes: {
    container: 1300,
    sidebar: 200,
  },
  layout: {
    header: {
      borderBottom: "1px solid orange",
    },
    aside: {
      p: 2,
      border: "1px solid blue",
    },
    main: {
      flex: "1 1 auto",
      p: 3,
      border: "1px solid red",
    },
    footer: {
      width: "100%",
      border: "1px solid green",
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
      fontSize: [5, 6],
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
    display: {
      variant: "text.heading",
      fontSize: [6, 7, 8],
      fontWeight: "display",
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
