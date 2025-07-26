import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // ← allow external connections
    port: 5173,
    strictPort: true, // optional: crash instead of choosing a random port
    watch: {
      usePolling: true, // good for Docker volume changes
    },
  },
});
