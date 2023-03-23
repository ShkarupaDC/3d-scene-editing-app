import { defineConfig, loadEnv } from "vite";
import solidPlugin from "vite-plugin-solid";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    base: "./",
    plugins: [solidPlugin()],
    server: {
      port: parseInt(process.env.VITE_PORT),
    },
    build: {
      target: "esnext",
    },
  });
};
