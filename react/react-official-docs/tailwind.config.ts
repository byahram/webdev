import type { Config } from "tailwindcss";

import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            pre: {
              backgroundColor: theme("colors.neutral.600"),
              color: theme("colors.white"),
              padding: "1rem",
              borderRadius: "0.375rem",
              overflowX: "auto",
            },
            code: {
              backgroundColor: theme("colors.gray.100"),
              color: theme("colors.red.600"),
              padding: "0.125rem 0.25rem",
              borderRadius: "0.25rem",
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
