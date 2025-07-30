import { createTheme } from "@mui/material/styles";

export const createAppTheme = (mode: "light" | "dark") => {
  const isLight = mode === "light";

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: isLight ? "rgb(59, 130, 246)" : "rgb(96, 165, 250)", // Blue theme
        contrastText: "rgb(255, 255, 255)",
      },
      secondary: {
        main: isLight ? "rgb(107, 114, 128)" : "rgb(156, 163, 175)",
        contrastText: isLight ? "rgb(17, 24, 39)" : "rgb(255, 255, 255)",
      },
      background: {
        default: isLight ? "rgb(249, 250, 251)" : "rgb(17, 24, 39)", // Dark blue-gray
        paper: isLight ? "rgb(255, 255, 255)" : "rgb(31, 41, 55)", // Slightly lighter dark
      },
      text: {
        primary: isLight ? "rgb(17, 24, 39)" : "rgb(243, 244, 246)",
        secondary: isLight ? "rgb(107, 114, 128)" : "rgb(156, 163, 175)",
      },
      divider: isLight ? "rgba(229, 231, 235, 1)" : "rgba(75, 85, 99, 0.3)",
      action: {
        hover: isLight ? "rgba(243, 244, 246, 1)" : "rgba(55, 65, 81, 0.4)",
        selected: isLight
          ? "rgba(239, 246, 255, 1)"
          : "rgba(59, 130, 246, 0.3)",
        hoverOpacity: 0.4,
      },
      success: {
        main: isLight ? "rgb(34, 197, 94)" : "rgb(74, 222, 128)",
      },
      error: {
        main: isLight ? "rgb(239, 68, 68)" : "rgb(248, 113, 113)",
      },
      warning: {
        main: isLight ? "rgb(245, 158, 11)" : "rgb(251, 191, 36)",
      },
      info: {
        main: isLight ? "rgb(59, 130, 246)" : "rgb(96, 165, 250)",
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: isLight ? "rgb(255, 255, 255)" : "rgb(31, 41, 55)",
            borderColor: isLight
              ? "rgb(229, 231, 235)"
              : "rgba(75, 85, 99, 0.3)",
            border: "1px solid",
            borderRadius: "12px",
            boxShadow: isLight
              ? "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
              : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            backgroundColor: isLight ? "rgb(34, 197, 94)" : "rgb(74, 222, 128)",
            color: "rgb(255, 255, 255)",
            fontWeight: 500,
            "&.MuiChip-colorDefault": {
              backgroundColor: isLight
                ? "rgb(243, 244, 246)"
                : "rgb(55, 65, 81)",
              color: isLight ? "rgb(55, 65, 81)" : "rgb(209, 213, 219)",
            },
          },
          colorSuccess: {
            backgroundColor: isLight ? "rgb(34, 197, 94)" : "rgb(74, 222, 128)",
            color: "rgb(255, 255, 255)",
          },
          colorError: {
            backgroundColor: isLight
              ? "rgb(239, 68, 68)"
              : "rgb(248, 113, 113)",
            color: "rgb(255, 255, 255)",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: isLight ? "rgb(17, 24, 39)" : "rgb(243, 244, 246)",
          },
          h1: {
            fontWeight: 700,
            color: isLight ? "rgb(17, 24, 39)" : "rgb(255, 255, 255)",
          },
          h2: {
            fontWeight: 600,
            color: isLight ? "rgb(17, 24, 39)" : "rgb(255, 255, 255)",
          },
          h3: {
            fontWeight: 600,
            color: isLight ? "rgb(17, 24, 39)" : "rgb(255, 255, 255)",
          },
          subtitle1: {
            color: isLight ? "rgb(107, 114, 128)" : "rgb(156, 163, 175)",
          },
          subtitle2: {
            color: isLight ? "rgb(107, 114, 128)" : "rgb(156, 163, 175)",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
            textTransform: "none",
            fontWeight: 500,
          },
          containedPrimary: {
            backgroundColor: isLight
              ? "rgb(59, 130, 246)"
              : "rgb(96, 165, 250)",
            "&:hover": {
              backgroundColor: isLight
                ? "rgb(37, 99, 235)"
                : "rgb(59, 130, 246)",
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: isLight ? "rgb(255, 255, 255)" : "rgb(31, 41, 55)",
            backgroundImage: "none",
          },
        },
      },
    },
    typography: {
      fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
    },
  });

  return theme;
};

export default createAppTheme;
