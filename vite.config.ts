import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"
import { componentTagger } from "lovable-tagger"

export default defineConfig(({ mode }) => ({
  server: {
    port: 5173,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    sourcemap: false, // Ensures no source code is leaked
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          mui: ["@mui/material", "@mui/icons-material"],
        },
      },
    },
  },
  esbuild: {
    drop: ["console", "debugger"], // Completely remove console.logs and debuggers in prod
  },
}))
