import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/tensixty-app-clone",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
