const path = require("path");

console.log("config is working");

module.exports = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
};
