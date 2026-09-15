import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If you deploy to GitHub Pages at https://<user>.github.io/<repo>/,
// uncomment and set `base` to "/<repo>/". Vercel/Netlify don't need this.
export default defineConfig({
  plugins: [react()],
  // base: "/contract-tracker-app/",
});
