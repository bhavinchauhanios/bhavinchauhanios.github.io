import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// This project deploys to a GitHub *user/org* Pages repo (bhavinchauhanios.github.io),
// which is served from the domain root — so base stays "/".
// If you ever move this to a *project* Pages repo (e.g. username.github.io/repo-name),
// change base to "/repo-name/".
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
