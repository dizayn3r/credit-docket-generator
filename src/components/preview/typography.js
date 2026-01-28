export const typography = {
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    margin: "0 0 10px 0",
  },

  subtitle: {
    fontSize: "14px",
    fontWeight: "bold",
    textAlign: "center",
    margin: "0 0 20px 0",
  },

  label: {
    fontWeight: "500",
  },

  value: (hasValue) => ({
    fontWeight: hasValue ? "bold" : "normal",
  }),
};
