function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    })
  } else {
    obj[key] = value
  }

  return obj
}

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
    modes: {
      polaris: {
        text: "#454f5b",
        background: "#fff",
        primary: "#5c6ac4",
        secondary: "#006fbb",
        highlight: "#47c1bf",
        muted: "#e6e6e6",
        gray: "#dfe3e8",
        accent: "#f49342",
        darken: "#00044c",
      },
      polarisdark: {
        text: "#3e4155",
        background: "#000639",
        primary: "#9c6ade",
        secondary: "#b4e1fa",
        highlight: "#b7ecec",
        muted: "#e6e6e6",
        accent: "#f49342",
        darken: "#00044c",
      },
      tosh: {
        text: "#000",
        background: "#fff",
        primary: "#000",
        secondary: "#3f3f3f",
        muted: "#e0e0e0",
        highlight: "#9f9f9f",
        gray: "#6c6c6c",
        accent: "#3f3f3f",
      },
      toshdark: {
        text: "#fff",
        background: "#060606",
        primary: "#d2d2d2",
        secondary: "#b2b2b2",
        muted: "#191919",
        highlight: "#3c3c3c",
        gray: "#999",
        accent: "#e0e0e0",
      },
      funk: {
        text: "#000",
        background: "#fff",
        primary: "#609",
        secondary: "#306",
        muted: "#f6f6f6",
      },
      roboto: {
        text: "#202124",
        background: "#fff",
        primary: "#1a73e8",
        secondary: "#9c27b0",
        muted: "#f1f3f4",
      },
      dark: {
        text: "#fff",
        background: "#060606",
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
    body:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  sizes: {
    container: 1300,
    sidebar: 200,
  },
  layout: {
    main: {
      flexGrow: 99999,
      flexBasis: 0,
      minWidth: 320,
    },
    footer: {
      height: "40px",
    },
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    bold: 500,
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
      mt: 3,
    },
  },
  buttons: {
    secondary: {
      fontWeight: "bold",
      color: "white",
      bg: "primary",
      "&:hover": {
        bg: "dark",
      },
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
      // extends the text.heading styles
      variant: "text.heading",
      fontSize: [6, 7, 8],
      fontWeight: "display",
    },
  },
  links: {
    nav: {
      px: 2,
      py: 1,
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

    pre: {
      fontFamily: "monospace",
      fontSize: 1,
      p: 3,
      color: "text",
      bg: "muted",
      overflow: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: 1,
    },
    inlineCode: {
      fontFamily: "monospace",
      color: "secondary",
      bg: "muted",
    },
    table: _defineProperty(
      {
        width: "100%",
        my: 4,
        borderCollapse: "separate",
        borderSpacing: 0,
      },
      ["th", "td"],
      {
        textAlign: "left",
        py: "4px",
        pr: "4px",
        pl: 0,
        borderColor: "muted",
        borderBottomStyle: "solid",
      }
    ),
    th: {
      verticalAlign: "bottom",
      borderBottomWidth: "2px",
    },
    td: {
      verticalAlign: "top",
      borderBottomWidth: "1px",
    },
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "muted",
    },
  },
}

module.exports = index
//# sourceMappingURL=index.js.map
