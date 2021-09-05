"use strict";

module.exports = () => {
  process.nextTick(() => {
    strapi.StrapIO = (require("strapio"))(strapi);
  });
};
