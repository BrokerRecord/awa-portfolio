import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}","./lib/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#172333", paper: "#fafaf8", blue: "#2866d6", muted: "#657182" }, fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"] } } }, plugins: [] } satisfies Config;
