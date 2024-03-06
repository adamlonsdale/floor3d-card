import typescript from "rollup-plugin-typescript2";
import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import serve from "rollup-plugin-serve";
import json from "@rollup/plugin-json";

export default {
  input: ["src/floor3d-card.ts"],
  output: {
    dir: "./dist",
    format: "es",
  },
  plugins: [
    nodeResolve(),
    typescript(),
    json(),
    babel({
      exclude: "node_modules/**",
    }),
    terser(),
    serve({
      contentBase: "./dist",
      host: "0.0.0.0",
      port: 5000,
      allowCrossOrigin: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }),
  ],
};
