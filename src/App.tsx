import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Box } from "@mui/material";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#ff9f1a" },
    secondary: { main: "#58d9ff" },
    background: {
      default: "#06080f",
      paper: "#0e121d",
    },
    text: {
      primary: "#f5f7ff",
      secondary: "#a6b0c6",
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"Sora", "Space Grotesk", "Outfit", sans-serif',
    h2: {
      fontWeight: 800,
      letterSpacing: "-0.03em",
    },
    h3: {
      fontWeight: 750,
      letterSpacing: "-0.02em",
    },
    h4: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "#06080f",
          backgroundAttachment: "fixed",
        },
        "::selection": {
          background: "#ff9f1a",
          color: "#111",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background:
            "linear-gradient(160deg, rgba(21,26,41,0.88) 0%, rgba(13,17,28,0.9) 100%)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 700,
          borderRadius: 8,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 9,
          fontWeight: 600,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: "rgba(9,12,19,0.76)",
          borderRadius: 8,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255,255,255,0.14)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255,159,26,0.56)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff9f1a",
            borderWidth: "1px",
          },
        },
        input: {
          color: "#f5f7ff",
        },
      },
    },
  },
});

import { CircularProgress } from "@mui/material";

const LoadingFallback = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      bgcolor: '#06080f'
    }}
  >
    <CircularProgress sx={{ color: '#ff9f1a' }} />
  </Box>
);

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
