const refs = (configType) => {
  if (configType === "DEVELOPMENT") {
    return {
      react: {
        title: "React",
        url: "http://localhost:6007",
      },
      vue: {
        title: "Vue",
        url: "http://localhost:6008",
      },
    };
  }
  return {
    react: {
      title: "React",
      url: "https://design-system.sunasta.com/react",
    },
    vue: {
      title: "Vue",
      url: "https://design-system.sunasta.com/vue",
    },
  };
};

export default refs;
