module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  pattern: /^bg-(red|blue|green|yellow|purple)-[1-9]00$/, // 100부터 900까지
  variants: ["hover", "focus", "active"], // 호버, 포커스 등의 변형도 포함
  theme: {
    extend: {
      keyframes: {
        float1: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(10px, -10px) rotate(10deg)" },
          "66%": { transform: "translate(-5px, 5px) rotate(-5deg)" },
        },
        float2: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(-10px, 10px) rotate(-10deg)" },
          "66%": { transform: "translate(5px, -5px) rotate(5deg)" },
        },
        float3: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(5px, 5px) rotate(-5deg)" },
          "66%": { transform: "translate(-10px, -10px) rotate(10deg)" },
        },
      },
      animation: {
        float1: "float1 6s ease-in-out infinite",
        float2: "float2 7s ease-in-out infinite",
        float3: "float3 8s ease-in-out infinite",
      },
    },
  },
};
