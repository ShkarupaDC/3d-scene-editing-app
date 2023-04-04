import { defineConfig, loadEnv } from "vite";
import solidPlugin from "vite-plugin-solid";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return defineConfig({
    base: "./",
    plugins: [solidPlugin()],
    server: {
      port: parseInt(env.VITE_PORT),
    },
    build: {
      target: "esnext",
    },
    define: {
      "process.env": env,
    },
  });
};
